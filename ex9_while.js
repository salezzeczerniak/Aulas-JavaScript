let prompt = require ("prompt-sync")();

let numero = parseInt(prompt("Digite qualquer número: "));

while(numero > 0){
    numero = numero - 1
    console.log(numero);
}