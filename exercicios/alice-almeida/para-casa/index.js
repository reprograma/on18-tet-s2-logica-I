/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

let noruega = 0.944;
let qatar = 0.85;
let canada = 0.913;
let brasil = 0.755;
let japao = 0.891;
let vietna = 0.666;
let afeganistao = 0.465;
let camaroes = 0.512;

const listaPaises = {
  noruega: noruega,
  qatar: qatar,
  canada: canada,
  brasil: brasil,
  japao: japao,
  vietna: vietna,
  afeganistao: afeganistao,
  camaroes: camaroes,
};

const idhChecker = (idh) => {
  if (idh < 0.5) {
    return "Muito Baixo";
  } else if (idh < 0.6) {
    return "Baixo";
  } else if (idh < 0.7) {
    return "Médio";
  } else if (idh < 0.8) {
    return "Alto";
  } else {
    return "Muito Alto";
  }
};

console.log("\nOs resultados são : \n");
Object.keys(listaPaises).forEach((pais) => {
  console.log(
    pais.replace(/^\w/, (c) => c.toUpperCase()) +
      " - " +
      listaPaises[pais] +
      " - " +
      idhChecker(listaPaises[pais])
  );
});
