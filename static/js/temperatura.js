function convertTemperature() {
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;
    const temperature = parseFloat(document.getElementById("temperature").value);

    let result;

    if (fromUnit === toUnit) {
        result = "Seleccione diferentes unidades para la conversión.";
    } else {
        switch (fromUnit) {
            case "celsius":
                result = convertCelsius(temperature, toUnit);
                break;
            case "fahrenheit":
                result = convertFahrenheit(temperature, toUnit);
                break;
            case "kelvin":
                result = convertKelvin(temperature, toUnit);
                break;
            default:
                result = "Unidad invalida.";
        }
    }

    document.getElementById("result").innerHTML = result;
}

function convertCelsius(temperature, toUnit) {
    switch (toUnit) {
        case "fahrenheit":
            return (temperature * 9/5) + 32 + " °F";
        case "kelvin":
            return temperature + 273.15 + " K";
        default:
            return "Unidad invalida.";
    }
}

function convertFahrenheit(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            return (temperature - 32) * 5/9 + " °C";
        case "kelvin":
            return (temperature - 32) * 5/9 + 273.15 + " K";
        default:
            return "Unidad invalida.";
    }
}

function convertKelvin(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            return temperature - 273.15 + " °C";
        case "fahrenheit":
            return (temperature - 273.15) * 9/5 + 32 + " °F";
        default:
            return "Unidad invalida.";
    }
}
