let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

const IDH = brasil

if (IDH >= 0 && IDH <= 0.499){
    console.log('IDH muito baixo')
}else if(IDH >= 0.5 && IDH <= 0.599){
    console.log( 'IDH baixo')
}else if(IDH >= 0.6 && IDH <= 0.699){
    console.log('IDH médio')
}else if (IDH >= 0.7 && IDH <= 0.799) {
    console.log('IDH alto')
}else if(IDH >=0.8 && IDH <=1) {
    console.log('IDH muito alto' )
}else{
    console.log('IDH inválido')
}