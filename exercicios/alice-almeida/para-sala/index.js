let temperaturaFahrenheit = 10;

if (temperaturaFahrenheit < 32 || temperaturaFahrenheit > 212) {
  console.log("Digite uma temperatura ºF válida.");
} else {
  let temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;
  console.log(
    `${temperaturaFahrenheit} ºF equivalem a ${temperaturaCelsius} ºC`
  );
}
