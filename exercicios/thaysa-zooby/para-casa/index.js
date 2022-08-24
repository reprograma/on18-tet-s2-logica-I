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

let pais = vietna



if (pais >= 0 && pais <= 0.499){
    console.log (`${pais} possui o idh muito baixo`)
} else if (pais >= 0.5 && pais <= 0.599){
    console.log (`${pais} possui o idh baixo`)
    } else if (pais >= 0.6 && pais <= 0.699){
        console.log (`${pais} possui o idh medio`)
        } else if (pais >= 0.7 && pais <= 0.799){
            console.log (`${pais} possui o idh alto`)
            } else if (pais >= 0.8 && pais <= 1){
                console.log (`${pais} possui o idh muito alto`)
                } else {
                    console.log (`Solicite um dos paises listados.`)
                    }




// // AUDACIOSA BRINCANDO COM OBJETOS E ARRAYS
// let paises = [
//     {nome: `noruega`, idh: 0.944},
//     {nome: `qatar`, idh: 0.850},
//     {nome: `canada`, idh: 0.913},
//     {nome: `brasil`, idh: 0.755},
//     {nome: `japao`, idh: 0.891},
//     {nome: `vietna`, idh: 0.666},
//     {nome: `afeganistao`, idh: 0.465},
//     {nome: `camaroes`, idh: 0.512},
// ] 

// // console.log(paises)

// let checarIdh = afeganistao

// if (paises.includes(checarIdh)) {
//     console.log(paises)
// }
//     // } else {
//     //     console.log(`escreva o nome de um pais listado`)
//     //     }
// //  else (checarIdh.idh > 0 && checarIdh.idh < 0.499 ) {
// //     console.log `${checarIdh} apresenta um IDH muito baixo`
