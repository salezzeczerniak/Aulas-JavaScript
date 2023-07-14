let prompt = require("prompt-sync")();

console.log("Digite os números para definir a sequencia númerica")

let numero_1 = parseInt(prompt("Digite o primeiro número: "))
let numero_2 = parseInt(prompt("Digite o segundo número: "))
let numero_3 = parseInt(prompt("Digite o terceiro número: "))

if(numero_1 < numero_2 && numero_2 < numero_3){
    console.log("A sequencia é crescente")
}else if(numero_1 > numero_2 && numero_2 > numero_3){
    console.log("A sequencia é descrecente")
}