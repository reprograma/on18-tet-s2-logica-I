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

let pais = brasil

if (pais >= 0 && pais <= 0.499){
    console.log("O IDH desse país é muito baixo");
} else if(pais >= 0.5 && pais <= 0.599){
    console.log("O IDH desse país é baixo");
} else if(pais >= 0.6 && pais <= 0.699){
    console.log("O IDH desse páis é médio");
} else if(pais >= 0.7 && pais <= 0.799){
    console.log("O IDH desse país é alto");
} else if(pais >= 0.8 && pais <= 1){
    console.log("O IDH desse país é muito alto");
} else{
    console.log("Digite um IDH válido");
}