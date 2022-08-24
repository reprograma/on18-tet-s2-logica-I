/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/


/*let qatar = 0.850
let canada = 0.913
let noruega = 0.944
let japao = 0.891
let brasil = 0.755
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512
*/

if (IDH >= 0 && IDH <= 0.499){
    console.log("O IDH é muito baixo.");

}else if( IDH >= 0.500 && IDH<= 0.599){
    console.log("O IDH é baixo.");

}else if(IDH >= 0.600 && IDH <= 0.699){
    console.log("O IDH é meédio.");

}else if(IDH >= 0.700 && IDH <= 0.799){
    console.log("O IDH é alto.");

}else if(IDH >= 0.800 && IDH <= 1.000) {
    console.log("O IDH é muito alto.");
}else {
    console.log("Digite um valor válido.");
}


