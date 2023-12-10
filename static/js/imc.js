function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight !== '' && height !== '') {
        var imc = (weight / (height * height)).toFixed(2);
        var result = '';
        if (imc < 18.5) {
            result = 'Bajo peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            result = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            result = 'Sobrepeso';
        } else {
            result = 'Obesidad';
        }
        document.getElementById('result').innerHTML = `IMC: ${imc} - ${result}`;
    } else {
        alert('Por favor, ingrese peso y altura.');
    }
}