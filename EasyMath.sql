CREATE DATABASE IF NOT EXISTS EasyMath;
USE EasyMath;

CREATE TABLE IF NOT EXISTS usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR (50),
    nombre VARCHAR (50),
    ap_paterno VARCHAR (50),
    ap_materno VARCHAR (50),
    correo VARCHAR (50),
    passw VARCHAR (50)
);