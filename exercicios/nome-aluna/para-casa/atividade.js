let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

if (IDH >= 0 && IDH < 0.499){
    console.log('IDH muito baixo')
}else if(IDH >= 0.500 && IDH <0.599){
    console.log( 'IDH baixo')
}else if(IDH >= 0.600 && IDH < 0.699){
    console.log('IDH médio')
}else if (IDH >= 0.700 && IDH < 0.799){
    console.log('IDH alto')
}else if(IDH >=0.800 && IDH <=1000){
    console.log('IDH muito alto')
}else{
    console.log('IDH inválido')
}

const IDH = canada