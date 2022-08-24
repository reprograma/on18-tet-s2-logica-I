Algoritmo 

Escala do IDH




Var

 idh: real
 pais: caractere



Inicio

   escreva("Digite o nome do pais: ")
   leia(pais)

   idh <- 0
   
   escreva("O IDH do pais: ")
   leia (idh)
   

   se (idh <= 0.499) entao
       escreva("muito baixo")
    senao
        se (idh > 0.499) e (idh <= 0.599) entao
           escreva("Baixo")
     senao
       se idh <= 0.699 entao
        escreva("Média")
   senao
    se idh <= 0.799 entao
       escreva("Alto")
   senão
     escreva("Muito Alto")

fimse
     fimse
   fimse
fimse

escreval()

   escreva("o IDH do " , pais,  " é " , idh:3:3)

Fimalgoritmo