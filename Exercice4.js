let temperatureCelsius = prompt(`Veuillez entrer une température en Celsius`);
let temperatureKelvin = parseInt(temperatureCelsius)+273.15;
console.log(`la température de `+temperatureCelsius+` °Celsius vaut `+temperatureKelvin+` en Kelvin`)