function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperatureInput").value);
  var conversionOption = document.getElementById("conversionOption").value;
  var convertedTemperature;

  if (conversionOption === "CelsiusToFahrenheit") {
    convertedTemperature = (temperature * 9 / 5) + 32;
    document.getElementById("convertedTemperature").innerHTML = temperature + "°C = " + convertedTemperature.toFixed(2) + "°F";
  } else if (conversionOption === "FahrenheitToCelsius") {
    convertedTemperature = (temperature - 32) * 5 / 9;
    document.getElementById("convertedTemperature").innerHTML = temperature + "°F = " + convertedTemperature.toFixed(2) + "°C";
  }
}
