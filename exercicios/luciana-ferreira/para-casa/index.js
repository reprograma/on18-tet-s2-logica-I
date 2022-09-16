/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

let noruega = 0.944;
let qatar = 0.850;
let canada = 0.913;
let brasil = 0.755;
let japao = 0.891;
let vietna = 0.666;
let afeganistao = 0.465;
let camaroes = 0.512;
let paises = japao;

if (paises >= 0 && paises <= 0.499) {
    console.log('IDH muito baixo');
} else if (paises >= 0.5 && paises <= 0.599) {
    console.log('IDH baixo');
} else if (paises >= 0.6 && paises <= 0.699) {
    console.log('IDH médio');
} else if (paises >= 0.7 && paises <= 0.799) {
    console.log('IDH alto');
} else if (paises >= 0.8 && paises <= 1) {
    console.log('IDH muito alto');
} else {
    console.log('Digite um IDH válido');

}