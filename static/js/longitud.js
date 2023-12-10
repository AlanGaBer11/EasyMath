function convertLength() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var value = parseFloat(document.getElementById("value").value);

    if (isNaN(value)) {
        alert("Por favor, ingrese un valor válido.");
        return;
    }

    var result = calculateConversion(fromUnit, toUnit, value);
    document.getElementById("result").innerText = value + " " + fromUnit + " = " + result.toFixed(4) + " " + toUnit;
}

function calculateConversion(fromUnit, toUnit, value) {
    var conversionTable = {
        km: {
            m: 1000,
            dm: 10000,
            cm: 100000,
            mm: 1000000,
            mi: 0.621371,
            yd: 1093.61,
            ft: 3280.84,
            in: 39370.1
        },
        m: {
            km: 0.001,
            dm: 10,
            cm: 100,
            mm: 1000,
            mi: 0.000621371,
            yd: 1.09361,
            ft: 3.28084,
            in: 39.3701
        },
        dm: {
            km: 0.0001,
            m: 0.1,
            cm: 10,
            mm: 100,
            mi: 6.2137e-6,
            yd: 0.109361,
            ft: 0.328084,
            in: 3.93701
        },
        cm: {
            km: 1e-5,
            m: 0.01,
            dm: 0.1,
            mm: 10,
            mi: 6.2137e-7,
            yd: 0.0109361,
            ft: 0.0328084,
            in: 0.393701
        },
        mm: {
            km: 1e-6,
            m: 0.001,
            dm: 0.01,
            cm: 0.1,
            mi: 6.2137e-8,
            yd: 0.00109361,
            ft: 0.00328084,
            in: 0.0393701
        },
        mi: {
            km: 1.60934,
            m: 1609.34,
            dm: 16093.4,
            cm: 160934,
            mm: 1.60934e6,
            yd: 1760,
            ft: 5280,
            in: 63360
        },
        yd: {
            km: 0.0009144,
            m: 0.9144,
            dm: 9.144,
            cm: 91.44,
            mm: 914.4,
            mi: 0.000568182,
            ft: 3,
            in: 36
        },
        ft: {
            km: 0.0003048,
            m: 0.3048,
            dm: 3.048,
            cm: 30.48,
            mm: 304.8,
            mi: 0.000189394,
            yd: 0.333333,
            in: 12
        },
        in: {
            km: 2.54e-5,
            m: 0.0254,
            dm: 0.254,
            cm: 2.54,
            mm: 25.4,
            mi: 1.5783e-5,
            yd: 0.0277778,
            ft: 0.0833333
        }
    };
    return value * conversionTable[fromUnit][toUnit];
}