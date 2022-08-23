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


let paises=[noruega,qatar,canada,brasil,japao,vietna,afeganistao,camaroes]


paises.forEach(paises=>function(){
    if(paises<0.499){
        console.log('Países muito baixo')
    }
    if(paises>0.500 || paises<1.00){
        console.log('muito alto')
    }
})