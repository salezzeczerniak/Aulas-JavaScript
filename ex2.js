let prompt = require("prompt-sync")();

let numero = prompt("Digite um número de 1 à 7: ")

switch(numero){
    case '1':
        console.log("segunda-feira")
        break;
    case '2':
        console.log("terça-feira")
        break;
    case '3':
        console.log("quarta-feira")
        break;
    case '4':
        console.log("quinta-feira")
        break;
    case '5':
        console.log("sexta-feira")
        break;
    case '6':
        console.log("sabado")
        break;
    case '7':
        console.log("domingo")       
}

