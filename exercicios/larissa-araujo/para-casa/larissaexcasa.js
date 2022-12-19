/*dados para a questão
noruega = 0.944
qatar = 0.850
canada = 0.913
brasil = 0.755
japao = 0.891
vietna = 0.666
afeganistao = 0.465
camaroes = 0.512

categorização dos idh
muitoBaixo 0 - 0.499
baixo 0.5 - 0.599
medio 0.6 - 0.699
alto 0.7 - 0.799
muitoAlto 0.8 - 1
*/

let idh = 0.755; //idh Brasil

if (idh >= 0 && idh < 0.5) {
  console.log("esse idh é muito baixo");
} else if (idh >= 0.5 && idh < 0.6) {
  console.log("esse idh é baixo");
} else if (idh >= 0.6 && idh < 0.7) {
  console.log("esse idh é medio");
} else if (idh >= 0.7 && idh < 0.8) {
  console.log("esse idh é alto");
} else if (idh >= 0.8 && idh <= 1) {
  console.log("esse idh é alto");
}
