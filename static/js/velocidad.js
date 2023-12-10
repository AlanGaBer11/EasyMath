function convertSpeed() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = 'Ingrese un valor válido.';
        return;
    }

    let result;

    switch (fromUnit) {
        case 'm/s':
            result = convertMetersPerSecond(inputValue, toUnit);
            break;
        case 'km/s':
            result = convertKilometersPerSecond(inputValue, toUnit);
            break;
        case 'km/h':
            result = convertKilometerPerHour(inputValue, toUnit);
            break;
        case 'c':
            result = convertSpeedOfLight(inputValue, toUnit);
            break;
        case 'mph':
            result = convertMilesPerHour(inputValue, toUnit);
            break;
        case 'fps':
            result = convertFeetPerSecond(inputValue, toUnit);
            break;
        case 'ips':
            result = convertInchesPerSecond(inputValue, toUnit);
            break;
        default:
            result = 'Unidad no reconocida';
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(4)} ${toUnit}`;
}

function convertMetersPerSecond(value, toUnit) {
    switch (toUnit) {
        case 'km/s':
            return value / 1000;
        case 'km/h':
            return value * 3.6;
        case 'c':
            return value / 299792458;
        case 'mph':
            return value * 2.23694;
        case 'fps':
            return value * 3.28084;
        case 'ips':
            return value * 39.3701;
        default:
            return value;
    };
}
function convertKilometersPerSecond(value, toUnit) {
    switch (toUnit) {
        case 'm/s':
            return value * 1000;
        case 'km/h':
            return value * 3600;
        case 'c':
            return value / 299792.458;
        case 'mph':
            return value * 3600 / 1609.34;
        case 'fps':
            return value * 3280.84;
        case 'ips':
            return value * 39370.1;
        default:
            return value;
    }
}

function convertSpeedOfLight(value, toUnit) {
    switch (toUnit) {
        case 'm/s':
            return value * 299792458;
        case 'km/s':
            return value * 299792.458;
        case 'km/h':
            return value * 3600;
        case 'mph':
            return value * 670616629.3844 / 1609.34;
        case 'fps':
            return value * 983571056.4305 / 3280.84;
        case 'ips':
            return value * 983571056.4305 / 39370.1;
        default:
            return value;
    }
}

function convertMilesPerHour(value, toUnit) {
    switch (toUnit) {
        case 'm/s':
            return value * 1609.34 / 3600;
        case 'km/s':
            return value * 1.60934 / 3600;
        case 'km/h':
            return value * 1.60934;
        case 'c':
            return value * 1609.34 / 670616629.3844;
        case 'fps':
            return value * 5280 / 3600;
        case 'ips':
            return value * 63360 / 3600;
        default:
            return value;
    }
}

function convertFeetPerSecond(value, toUnit) {
    switch (toUnit) {
        case 'm/s':
            return value * 0.3048;
        case 'km/s':
            return value * 0.0003048;
        case 'km/h':
            return value * 1.09728;
        case 'c':
            return value * 0.3048 / 299792458;
        case 'mph':
            return value * 3600 / 5280;
        case 'ips':
            return value * 12;
        default:
            return value;
    }
}

function convertInchesPerSecond(value, toUnit) {
    switch (toUnit) {
        case 'm/s':
            return value * 0.0254;
        case 'km/s':
            return value * 0.0000254;
        case 'km/h':
            return value * 0.0277778;
        case 'c':
            return value * 0.0254 / 299792458;
        case 'mph':
            return value * 3600 / 63360;
        case 'fps':
            return value * 1 / 12;
        default:
            return value;
    }
}
function convertKilometerPerHour(value, toUnit){
    switch (toUnit) {
        case 'm/s':
            return value * 0.277778;
        case 'km/s':
            return value * 0.000277778;
        case 'c':
            return value * 0.000277778 / 299792458;
        case 'mph':
            return value * 0.621371;
        case 'fps':
            return value * 0.911344;
        case 'ips':
            return value * 11.0236;
        default:
            return value;
    }
}
