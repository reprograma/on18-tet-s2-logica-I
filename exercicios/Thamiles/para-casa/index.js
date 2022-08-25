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

let países = [noruega, qatar, canada, brasil, japao, vietna, afeganistao, camaroes]

console.log("Lista de países: 1. Noruega, 2. Qatar, 3. Canada, 4. Brasil, 5. Japão, 6. Vietnã, 7. Afeganistãoo, 8. Camarões")
console.log(" ")

for(let i=0;i<países.length;i++){
    console.log("Pais de número:" + (i+1))
    if (países[i] < 0.500){
    console.log("O IDH desse país é considerado Muito baixo")}
    else if (0.500 <= países[i] && países[i] < 0.600){
        console.log("O IDH desse país é considerado Baixo")}
    else if (0.600 <= países[i] && países[i] <0.700){
        console.log("O IDH desse país é considerado Médio")}
    else if (0.700 <= países[i] && países[i] <0.800){
        console.log("O IDH desse país é considerado Alto")}
    else if (0.800 <= países[i] && países[i] <=1.000){
        console.log("O IDH desse país é considerado Muito Alto")
    }
}
