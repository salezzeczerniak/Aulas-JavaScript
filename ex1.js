let prompt = require("prompt-sync")();

let nome = prompt("Por favor, digite o seu usuario: ")
let senha = prompt("Digite a sua senha: ")

if(nome === "admin" && senha === "senha123"){ 
    console.log("Login bem sucedido!!")
}else{
    console.log("Falha no login!!")
}