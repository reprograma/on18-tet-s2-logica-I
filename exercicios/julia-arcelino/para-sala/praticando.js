//string
console.log("Julia Arcelino")
console.log(typeof("Julia Arcelino"))
//numeros
console.log(3+5)
console.log(typeof(3+5))
//numeros float
console.log(5.5)
console.log(typeof(5.5))
//boolean
console.log(true)
console.log(typeof(false))
//Um dado que você sabe que existe mas não consegue definir o que é. Ele serve pra indicar problemas no código
let nome
console.log(typeof(nome))
//É um dado qu está vazio, serve para substituir o "zero" ou "void" do java. Se você buscar algo no banco de dados, e te retornar como nulo, significa que é algum problema na conexão com o banco de dados
let nome2 = null
console.log(typeof(nome2))

console.log(" ")

//concatenação:
console.log("A soma entre "+2+" e "+3+ " é igual a "+ (2+3))
//Interpolação (usando crases n lugar de aspas)
console.log(`A soma entre ${2} e ${3} é igual a ${2+3}`)

console.log(" ")

//objetos
let pessoa1 = {
    nome: "Julia",
    endereco: "Rua dos aposentados",
    numero: 181
}
//perguntar pra professora como criar o que é chamado de classes em java