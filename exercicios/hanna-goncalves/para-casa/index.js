/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512
let idh = 0.755

if (idh < 0 || idh > 1.000){
    console.log("Informe um valor de IDH válido")
}
else if (idh>=0 && idh <=0.499){
    console.log("Valor de IDH classificado como Muito Baixo")
}
else if (idh>=0.5 && idh<=0.599){
    console.log("Valor de IDH classificado como Baixo")
}
else if (idh>=0.6 && idh<=0.699){
    console.log("Valor de IDH classificado como Médio")
}
else if (idh>=0.7 && idh<=0.799){
    console.log("Valor de IDH classificado como Alto")
}
else {
    console.log("Valor de IDH classificado como Muito Alto")
}

