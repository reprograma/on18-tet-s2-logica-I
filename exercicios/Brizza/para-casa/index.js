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


let verificarIDHpais = japao;

if (verificarIDHpais >= 0 && verificarIDHpais <= 0.499) {
    console.log('IDH muito baixo');
} else if (verificarIDHpais >= 0.5 && verificarIDHpais <= 0.599) {
    console.log('IDH baixo');
} else if (verificarIDHpais >= 0.6 && verificarIDHpais <= 0.699) {
    console.log('IDH médio');
} else if (verificarIDHpais >= 0.7 && verificarIDHpais <= 0.799) {
    console.log('IDH alto');
} else if (verificarIDHpais >= 0.8 && verificarIDHpais <= 1) {
    console.log('IDH muito alto');
} else {
    console.log('Digite um IDH válido');
}