from flask import Flask, render_template, request, redirect, url_for, session, json, jsonify
from functools import wraps
from flask_mysqldb import MySQL
import pymysql


app = Flask(__name__)

app.secret_key = 'mysecretkey'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'EasyMath'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


class User:
    def __init__(self, id_usuario, nom_usuario, correo, passw):
        self.id_usuario = id_usuario
        self.nom_usuario = nom_usuario
        self.correo = correo
        self.passw = passw

    def __repr__(self):
        return '<User:{self.id_usuario}'


# Objeto de la clase usuarios
users = []
no_auth_routes = ['login', 'singup', '/']


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return render_template('index.html')
    return render_template('index.html')


def login_required(f):
    # Generar funcón decorada (eso implica que solo se podrá ejecutar en secuencias específias
    # con el método '@login_requiered')
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Comprueba que la varibale session no esté vacía, en caso de que lo esté, mandará a logear
        if 'id_usuario' not in session:
            error = "Error: 403 Acceso no autorizado | Inicia sesión para ver"
            return render_template("error_usuario.html", des_error=error, paginaant='/login')

        # En caso de que lo esté, asignarle el valor con el 'id_usuario' que viene de la clase User
        id_usuario = session['id_usuario']
        # En caso de que no esté instanciado el 'id_usuario' mandará a logear para instanciarlo
        if not isinstance(id_usuario, (int, float)):
            error = "Error: 403 Acceso no autorizado | Inicia sesión para ver"
            return render_template("error_usuario.html", des_error=error, paginaant='/login')

        # Hace la validación del usuario llenando los parámtros de la clase users con las tuplas
        # de la tabla usuario en la db
        conn = pymysql.connect(
            host='localhost', user='root', passwd='', db='EasyMath')
        cursor = conn.cursor()
        cursor.execute('select id_usuario, nom_usuario, correo, passw from usuarios where id_usuario=%s',
                       (session['id_usuario']))
        dato = cursor.fetchone()
        users.clear()  # Vacía la clase users para evitar conflictos
        users.append(User(id_usuario=dato[0], nombre_usuario=[
                     1], correo=[2], passw=[3]))
        # Devuelve la variable global user, tomando el valor de users[0] que es el id del usuario
        g.user = users[0]
        # Devuelve los valores como atributos
        return f(*args, **kwargs)
    return (decorated_function)

# CREAR SESIÓN #
@app.route('/signUp', methods=['GET', 'POST'])
def singup():
    if request.method == 'POST':
        aux_nombre_usuario = request.form['nombre_usuario']
        aux_nombre = request.form['nombre']
        aux_ap_paterno = request.form['ap_paterno']
        aux_ap_materno = request.form['ap_materno']
        aux_correo = request.form['correo']
        aux_passw = request.form['passw']

        conn = pymysql.connect(
            host='localhost', user='root', passwd='', db='EasyMath')
        cursor = conn.cursor()
        # Tomar únicamente los usuarios para comprobar si existe (probablemente se pueda simplificar
        # en una sola linea de código )
        cursor.execute(
            'select nombre_usuario from usuarios where nombre_usuario=%s', (aux_nombre_usuario))
        comp_u = cursor.fetchone()
        # Tomar únicamente los correos para comprobar si existe (probablemente se pueda simplificar
        # en una sola linea de código )
        cursor.execute(
            'select correo from usuarios where correo=%s', (aux_correo))
        comp_c = cursor.fetchone()

        # Comprobar usuario existente
        if comp_u is not None:
            error = "Usuario no está dispoible"
            return render_template("error_usuario.html", des_error=error, paginaant='/signUp')

        # Comprobar correo existente
        elif (comp_c is not None):
            error = "Correo no está dispoible"
            return render_template("error_usuario.html", des_error=error, paginaant='/signUp')

        # Comprobar ambos (puede ser un poco inutil, posible de descartar)
        elif (comp_u and comp_c is not None):
            error = "Usuario y correo no están dispoibles"
            return render_template("error_usuario.html", des_error=error, paginaant='/signUp')

        # Fin de validación. Hacer alta
        else:
            cursor.execute('insert into usuarios '
                           ' (nombre_usuario, nombre, ap_paterno, ap_materno, correo, passw) '
                           ' VALUES (%s, %s, %s, %s, %s, %s) ',
                           (aux_nombre_usuario, aux_nombre, aux_ap_paterno, aux_ap_materno, aux_correo, aux_passw))
        conn.commit()
        conn.close()
    return render_template('signUp.html')

# Módulo para iniciar sesión
# Validar credenciales (que son correo y passw) y asignar el tipo de sesión
# dependiendo de si es un usuario o un admin
@app.route('/login', methods=['GET', 'POST'])
def login():
    session.pop('id_usuario', None)
    if request.method == 'POST':
        correo = request.form['correo']
        passw = request.form['passw']
        conn = pymysql.connect(
            host='localhost', user='root', passwd='', db='EasyMath')
        cursor = conn.cursor()
        # Verificación de usario
        cursor.execute(
            'select id_usuario, nombre_usuario, passw from usuarios where correo=%s and passw=%s', (correo, passw))
        usuario = cursor.fetchone()
        # En caso de error
        # En caso de que las credenciales no coincidan, mandará el siguiente error
        if (usuario == None):
            conn.close()
            error = "usuario y/o contraseña no son conrrectos"
            return render_template("error_usuario.html", des_error=error, paginaant='/login')
        # En caso de que se valide correctamente
        # En caso de que el usuario sea un administrador, el array usuario se establece como admin
        elif (usuario == 'admin'):
            session['admin'] = usuario[0]
            print('sesión: ', session)
            return render_template('index.html')

        # En caso de que sea un usuario común, la sesión se establece como usuario
        else:
            session['id_usuario'] = usuario[0]
            session['nombre_usuario'] = usuario[1]
            print('sesión: ', session)
            return render_template('index.html')

    return render_template('login.html')


def get_user():
    id = session.get('id_usuario')
    if id is not None and (id, (int, float)):
        g.id_us = int(id)
        return print(g.id_us)
    return g.id_us


# Cerrar sesión
# limpia la sesión y a los usuarios
@app.route('/logout')
def logout():
    if (session == None):
        return redirect(url_for('login'))
    else:
        session.clear()
        users.clear()
        return redirect(url_for('login'))

# Inicio de la web
@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/perfil")
@login_required
def perfil():
    return render_template("perfil.html")

# CALCULADORAS #
@app.route("/basic")
def basic():
    return render_template("basicCalculator.html")

@app.route("/advanced")
def advanced():
    return render_template('advancedCalculator.html')

@app.route("/conversion")
def conversion():
    return render_template('unitConversion.html')
# FIN CALCULADORAS #
# CONVERSIONES #
@app.route("/imc")
def imc():
    return render_template('imc.html')
@app.route("/longitud")
def longitud():
    return render_template('longitud.html')
@app.route("/datos")
def dato():
    return render_template('datos.html')
@app.route("/masa")
def masa():
    return render_template('masa.html')
@app.route("/velocidad")
def velocidad():
    return render_template('velocidad.html')
@app.route("/temperatura")
def temperatura():
    return render_template('temperatura.html')

@app.route("/tiempo")
def tiempo():
    return render_template('tiempo.html')
@app.route("/volumen")
def volumen():
    return render_template('volumen.html')
# FIN CONVERSIONES #

if __name__ == '__main__':
    app.run(port=500, debug=True)
