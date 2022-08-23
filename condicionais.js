const horario = 40

// if... else

// if(horario < 18) {
//   console.log("é dia")
// } else {
//   console.log("é noite")
// }

// reduzindo ao operador ternário
// horario < 18 ? console.log("é dia") : console.log("é noite")


// encadeando else-if
if (horario >= 0 && horario < 6) {
  console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
  console.log("manhã");
} else if (horario >= 12 && horario < 18) {
  console.log("tarde");
} else if (horario > 18 && horario < 24) {
  console.log("noite");
} else {
  console.log("horário inválido")
}
