function convertMasa() {
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);

  if (isNaN(inputValue)) {
    alert("Ingrese un valor numérico válido.");
    return;
  }

  const conversionRates = {
    ton: { kg: 1000, g: 1e6, mg: 1e9, lb: 2204.62, oz: 35274 },
    kg: { ton: 0.001, g: 1000, mg: 1e6, lb: 2.20462, oz: 35.274 },
    g: { ton: 1e-6, kg: 0.001, mg: 1000, lb: 0.00220462, oz: 0.035274 },
    mg: { ton: 1e-9, kg: 1e-6, g: 0.001, lb: 2.20462e-6, oz: 3.5274e-5 },
    lb: { ton: 0.000453592, kg: 0.453592, g: 453.592, mg: 453592, oz: 16 },
    oz: { ton: 2.83495e-5, kg: 0.0283495, g: 28.3495, mg: 28349.5, lb: 0.0625 },
  };

  if (
    !(fromUnit in conversionRates) ||
    !(toUnit in conversionRates[fromUnit])
  ) {
    alert(
      "No se puede realizar la conversión entre las unidades seleccionadas."
    );
    return;
  }

  const result = inputValue * conversionRates[fromUnit][toUnit];
  document.getElementById("result").innerText = `${inputValue} ${fromUnit} es igual a ${result.toFixed(2)} ${toUnit}.`;
}
