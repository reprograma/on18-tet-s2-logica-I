let noruega = ["Noruega", 0.944];
let qatar = ["Qatar", 0.850];
let canada = ["Canadá", 0.913];
let brasil = ["Brasil", 0.755];
let japao = ["Japão", 0.891];
let vietna = ["Vietnã", 0.666];
let afeganistao = ["Afeganistão", 0.465];
let camaroes = ["Camarões", 0.512];

let paises = [noruega, qatar, canada, brasil, japao, vietna, afeganistao, camaroes];

for (let i=0; i<paises.length;i++){
    var pais_atual = paises[i]
    console.log("País: " + pais_atual[0])
    console.log("Índice de IDH: " + pais_atual[1])
    
    if (pais_atual[1] < 0.500){
        console.log("O IDH deste país é considerado MUITO BAIXO!.")
    }else if (0.500 <= pais_atual[1] && pais_atual[1] < 0.600){
        console.log("O IDH deste país é considerado BAIXO!.")
    }else if (0.600 <= pais_atual[1] && pais_atual[1] < 0.700){
        console.log("O IDH deste país é considerado MÉDIO!.")
    }else if (0.700 <= pais_atual[1] && pais_atual[1] < 0.800){
        console.log("O IDH deste país é considerado ALTO!.")
    }else if (0.800 <= pais_atual[1] && pais_atual[1] <= 1.000){
        console.log("O IDH deste país é considerado MUITO ALTO!.")
    }

    console.log("")
}