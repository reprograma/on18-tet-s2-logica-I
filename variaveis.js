// palavra reservada -> var, const ou let
// identificador -> nomeDaVariável
// operador de atribuição -> =
// dado atribuido à variável -> String, number, boolean...

// var nome = "Kaíza"
// let idade = "18"
// const signo = "Aquário"

// console.log(Signo)

// var nomePessoaQueEuConheciOntem //camelCase

// let nomeDaPessoa  //camelCase

// var ci_nasc = "Rio de Janeiro" 
// var cidadeDeNascimento = "Recife"

// VAR

// var nomeCompleto = "Lilit Bandeira Costa"

// console.log(nomeCompleto)

// nomeCompleto = "Grazielle Melo"

// console.log(nomeCompleto)

// CONST

// const signo = "Touro"

// console.log(signo)

// signo = "Gêmeos" // ERRO

// LET

// let idade = 32

// console.log(idade)

// idade = 19

// console.log(idade)

// Escopo Global x Escopo Local

var aluna = "Natália"
console.log(aluna)

{
  let aluna = "Juliana"
  console.log(aluna)
}

{
  let aluna = "Juliana"
  console.log(aluna)
}

{
  let aluna = "Juliana"
  console.log(aluna)
}

console.log(aluna)
