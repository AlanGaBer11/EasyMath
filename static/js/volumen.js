function convert() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const value = parseFloat(document.getElementById("value").value);

    let result;
    let resultUnit;

    switch (fromUnit) {
        case "metroCubico":
            switch (toUnit) {
                case "decimetroCubico":
                    result = value * 1000;
                    resultUnit = "dm³";
                    break;
                case "centimetroCubico":
                    result = value * 1000000;
                    resultUnit = "cm³";
                    break;
                case "milimetroCubico":
                    result = value * 1e9;
                    resultUnit = "mm³";
                    break;
                case "litro":
                    result = value * 1000;
                    resultUnit = "lt";
                    break;
                case "decilitro":
                    result = value * 10000;
                    resultUnit = "dl";
                    break;
                case "centilitro":
                    result = value * 100000;
                    resultUnit = "cl";
                    break;
                case "mililitro":
                    result = value * 1e6;
                    resultUnit = "ml";
                    break;
                case "pieCubico":
                    result = value * 35.3147;
                    resultUnit = "ft³";
                    break;
                case "yardaPulgadaCubica":
                    result = value * 61023.7;
                    resultUnit = "yd³ in³";
                    break;
                case "yardaCubica":
                    result = value * 1.30795;
                    resultUnit = "yd³";
                    break;
                default:
                    result = value;
                    resultUnit = toUnit;
            }
            break;
        default:
            result = value;
            resultUnit = toUnit;
    }

    document.getElementById("result").innerText = `Resultado: ${result} ${resultUnit}`;
}
