function convert() {
  const fromUnit = document.getElementById("from").value;
  const toUnit = document.getElementById("to").value;
  const inputData = parseFloat(document.getElementById("inputData").value);

  if (isNaN(inputData)) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }

  let result;

  switch (fromUnit) {
    case "bytes":
      result = convertBytes(inputData, toUnit);
      break;
    case "kilobytes":
      result = convertKilobytes(inputData, toUnit);
      break;
    case "megabytes":
      result = convertMegabytes(inputData, toUnit);
      break;
    case "gigabytes":
      result = convertGigabytes(inputData, toUnit);
      break;
    case "terabytes":
      result = convertTerabytes(inputData, toUnit);
      break;
    case "petabytes":
      result = convertPetabytes(inputData, toUnit);
      break;
    default:
      alert("Unidad no válida");
      return;
  }

  document.getElementById(
    "result").innerText = `${inputData} ${fromUnit} es igual a ${result.toFixed(3)} ${toUnit}`;
}

function convertBytes(value, toUnit) {
  const units = {
    bytes: 1,
    kilobytes: 1 / 1024,
    megabytes: 1 / 1024 / 1024,
    gigabytes: 1 / 1024 / 1024 / 1024,
    terabytes: 1 / 1024 / 1024 / 1024 / 1024,
    petabytes: 1 / 1024 / 1024 / 1024 / 1024 / 1024,
  };
  return value * units[toUnit];
}

function convertKilobytes(value, toUnit) {
  const units = {
    bytes: 1024,
    kilobytes: 1,
    megabytes: 1 / 1024,
    gigabytes: 1 / 1024 / 1024,
    terabytes: 1 / 1024 / 1024 / 1024,
    petabytes: 1 / 1024 / 1024 / 1024 / 1024,
  };
  return value * units[toUnit];
}

function convertMegabytes(value, toUnit){
    const units = {
        bytes: 1048576,
        kilobytes: 1 / 1024,
        megabytes: 1,
        gigabytes: 1 / 1024 / 1024,
        terabytes: 1 / 1024 / 1024 / 1024,
        petabytes: 1 / 1024 / 1024 / 1024 / 1024,
    };
    return value * units [toUnit];
}
function convertGigabytes(value, toUnit) {
    const units = {
        bytes: 1073741824,
        kilobytes: 1048576,
        megabytes: 1024,
        gigabytes: 1,
        terabytes: 1 / 1024,
        petabytes: 1 / 1024 / 1024,
    };
    return value * units[toUnit];
}

function convertTerabytes(value, toUnit) {
    const units = {
        bytes: 1099511627776,
        kilobytes: 1073741824,
        megabytes: 1048576,
        gigabytes: 1024,
        terabytes: 1,
        petabytes: 1 / 1024,
    };
    return value * units[toUnit];
}

function convertPetabytes(value, toUnit) {
    const units = {
        bytes: 1125899906842624,
        kilobytes: 1099511627776,
        megabytes: 1073741824,
        gigabytes: 1048576,
        terabytes: 1024,
        petabytes: 1,
    };
    return value * units[toUnit];
}
