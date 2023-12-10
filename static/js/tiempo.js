function convertTime() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var inputValue = parseFloat(document.getElementById("inputValue").value);

    var conversionFactors = {
        year: {
            week: 52.1775,
            day: 365,
            hour: 8760,
            minute: 525600,
            second: 31536000,
            millisecond: 31536000000,
        },
        week: {
            year: 0.0191781,
            day: 7,
            hour: 168,
            minute: 10080,
            second: 604800,
            millisecond: 604800000,
        },
        day: {
            year: 0.00273973,
            week: 0.142857,
            hour: 24,
            minute: 1440,
            second: 86400,
            millisecond: 86400000,
        },
        hour: {
            year: 0.000114155,
            week: 0.00595238,
            day: 0.0416667,
            minute: 60,
            second: 3600,
            millisecond: 3600000,
        },
        minute: {
            year: 0.00000190259,
            week: 0.0000992063,
            day: 0.000694444,
            hour: 0.0166667,
            second: 60,
            millisecond: 60000,
        },
        second: {
            year: 3.17098e-8,
            week: 1.65344e-6,
            day: 1.15741e-5,
            hour: 0.000277778,
            minute: 0.0166667,
            millisecond: 1000,
        },
        millisecond: {
            year: 3.17098e-11,
            week: 1.65344e-9,
            day: 1.15741e-8,
            hour: 2.77778e-7,
            minute: 1.66667e-5,
            second: 0.001,
        },
    };

    var result = inputValue * conversionFactors[fromUnit][toUnit];

    document.getElementById("result").innerHTML = result + " " + toUnit;
}
