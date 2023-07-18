let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite a tabuada desejada: "));

for(let tabuada = 1; tabuada <= 10; tabuada ++){
    console.log("A tabuada é: " + numero + "x" + tabuada + "=" + numero*tabuada)
}
