//Exercicio 1

//Listar professores e verificar posicao na lista
//Se o numero for par, escrever "par" e o numero correspondente
//Se o numero for impar, escrever "impar" e o numero correspondente
//Se for zero, escreva "zero"

let professores = ["Alana", "Alexia", "Jessica", "Odirlei", "Possarle", "Thiago", "Samantha"]
//length - cada vez que entrar um novo professor ele atualizara automaticamente as posiçoes
//Incremento
 for (let indice = 0; indice < professores.length; indice ++){
    console.log("O indice atual é: " + indice);
    console.log("A pessoa é: " + professores[indice]);
    console.log(professores[4]);
 }

// //Decremento
 for (let indice = 6; indice >= 0; indice --){
     console.log("O indice atual é: " + indice)
     console.log("a pessoa é: " + professores[indice])
 }

// //Laço contado - utiliza o contador, é usado para repetir um numero exato de vezes

 for(let contador = 0; contador < 3; contador = contador + 1){
    console.log("Boa noite")
}

//Laço condicional 
 let prompt = require("prompt-sync")();
 let resposta = prompt("Voce deseja ler um Boa Noite? ");

 while (resposta == "sim"){
     console.log("Boa Noite")
     resposta = prompt("Voce deseja continuar recebendo Boa Noite? ")
     if(resposta == "nao"){
        console.log("Entao nao me procure mais!!!")
     }
 };


 let teste = prompt("Voce deseja ler um boa noite? ");

 do{
     console.log("To nem ai, boa noite")
     teste = prompt("Voce deseja ler um boa noite? ")
}while (teste == "sim");


//Array

let listaDeNumeros = [1, 2, 5, 7, 16]

console.log(listaDeNumeros)
//[Array] - Mostrava desta forma 

console.log(listaDeNumeros[4])

for (let indice = 0; indice < 5; indice ++) {
    console.log(`O item de indice ${indice} é ${listaDeNumeros[indice]}`)
    
}