function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");
    var convertedTemperature;

    // Clear previous results and errors
    resultElement.textContent = "";
    errorElement.textContent = "";

    // Validate input as a number
    if (isNaN(temperatureInput)) {
      errorElement.textContent = "Please enter a valid number.";
      return;
    }

    var temperature = parseFloat(temperatureInput);

    // Perform temperature conversion based on selected unit
    switch (unitInput) {
      case "celsius":
        convertedTemperature = (temperature * 9) / 5 + 32;
        resultElement.textContent = convertedTemperature.toFixed(2) + " °F";
        break;
      case "fahrenheit":
        convertedTemperature = ((temperature - 32) * 5) / 9;
        resultElement.textContent = convertedTemperature.toFixed(2) + " °C";
        break;
      case "kelvin":
        convertedTemperature = temperature - 273.15;
        resultElement.textContent = convertedTemperature.toFixed(2) + " °C";
        break;
    }
  }