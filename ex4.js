let prompt = require("prompt-sync")();

console.log("Em que ano voce nasceu? ")

let ano = prompt("Digite o ano de nascimento: ")

if(ano <= 2005){
    console.log("Voce tem 18 anos.")
}else{
    console.log("Voce é menor de 18 anos!")
}