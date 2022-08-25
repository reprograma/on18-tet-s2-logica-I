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

const paises = [
    {
        pais: "noruega",
        IDH: noruega
    },
    {
        pais: "qatar",
        IDH: qatar
    },
    {
        pais: "canada",
        IDH: canada
    },
    {
        pais: "brasil",
        IDH: brasil
    },
    {
        pais: "japao",
        IDH: japao
    },
    {
        pais: "vietna",
        IDH: vietna
    },
    {
        pais: "afeganistao",
        IDH: afeganistao
    },
    {
        pais: "camaroes",
        IDH: camaroes
    }
];

for (let index = 0; index < paises.length; index++) {
    const pais = paises[index];
    if( pais.IDH >= 0.0 && pais.IDH < 0.5 ) {
        console.log("O pais " + pais.pais + " tem um IDH muito baixo");
    } else if( pais.IDH >= 0.5 && pais.IDH < 0.6 ) {
        console.log("O pais " + pais.pais + " tem um IDH baixo");
    } else if( pais.IDH >= 0.6 && pais.IDH < 0.7 ) {
        console.log("O pais " + pais.pais + " tem um IDH médio");
    } else if( pais.IDH >= 0.7 && pais.IDH < 0.8 ) {
        console.log("O pais " + pais.pais + " tem um IDH alto");
    } else if( pais.IDH >= 0.8 && pais.IDH <= 1 ) {
        console.log("O pais " + pais.pais + " tem um IDH muito alto");
    }
}

