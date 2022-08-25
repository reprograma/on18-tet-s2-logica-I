
let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512


idh = brasil

if (idh >= 0 && idh <= 0.499) {
    console.log("Valor:",idh,"- IDH Muito baixo");
  } else if (idh >= 0.500 && idh <= 0.599) {
    console.log("Valor: ",idh,"IDH Baixo");
  } else if (idh >= 0.600 && idh <= 0.699) {
    console.log("Valor: ",idh,"IDH Médio");
  } else if (idh >= 0.700 && idh <= 0.799) {
    console.log("Valor: ",idh,"IDH Alto");
  } else if (idh >= 0.800 && idh <= 1000) {
    console.log("Valor: ",idh,"IDH Muito Alto");  
  
} else {
    console.log("IDH digitado inválido ou fora do padrão");
  }
  

