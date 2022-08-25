let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

if (brasil >= 0 && brasil <= 0.499) {
    console.log("IDH muito baixo");
} else if (brasil >= 0.500 && brasil <= 0.599) {
    console.log("IDH baixo");
} else if (brasil >= 0.600 && brasil <= 0.699) {
    console.log("IDH médio");
} else if (brasil >= 0.700 && brasil <= 0.799) {
    console.log("IDH alto");
} else if (brasil >= 0.800 && brasil <= 1) {
    console.log("IDH muito alto");
} else {
    console.log("Digite novamente um IDH");
}