/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

const noruega = 0.944
const qatar = 0.850
const canada = 0.913
const brasil = 0.755
const japao = 0.891
const vietna = 0.666
const afeganistao = 0.465
const camaroes = 0.512

const idh = camaroes

if(idh >=  0 && idh < 0.5) {
  console.log('IDH é muito baixo')
} else if (idh >= 0.5 && idh < 0.6) {
  console.log('IDH é baixo')
} else if (idh >= 0.6 && idh < 0.7) {
  console.log('IDH é médio')
} else if (idh >= 0.7 && idh < 0.8) {
  console.log('IDH é alto')
} else if (idh >= 0.8 && idh <= 1) {
  console.log('IDH é muito alto')
} else {
  console.log('IDH inválido')
}



//exemplos dados durante as dúvidas:

// const numeroUm = 7
// let numeroDois = 5

// numeroDois++
// console.log(numeroUm)

// const aluna = {
//   nome: "Thaysa",
//   signo: "gêmeos"
// }

// console.log(aluna.nome)

// aluna = "Samanta"
// console.log(aluna.nome)
