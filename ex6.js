let prompt = require ("prompt-sync")();

let peso = parseFloat(prompt("Qual o seu peso : "))
let altura = parseFloat(prompt("Qual a sual altura : "))

let calculo = peso/(altura * altura)

switch(true){
    case calculo < '18.5':
        console.log("Voce esta abaixo do peso")
        break;
    case calculo >'18.5' && calculo <= '24.9':
        console.log("Voce está no peso normal")
        break;
    case calculo = '25' && calculo <= '29.9':
        console.log("Voce está com sobrepeso")
        break;
    case calculo = '30.0' && calculo <= '34.9':
        console.log("Voce está com obesidade grau 1")
        break;
    case calculo = '35.0' && calculo <= '39.9':
        console.log("Voce está com obesidade grau 2")
        break;
    case calculo >= '40.0':
        console.log("Voce está com obesidade grau 3")
        break; 
}