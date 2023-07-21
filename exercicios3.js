// let prompt = require("prompt-sync")();
// função

// let nome_recebido = prompt("Digite seu nome: ");
// let idade_recebida = parseInt(prompt("Digite sua idade: "));

import { exercicio1 } from "./moduloexercicio1.js"

exercicio1()

function olaPessoa(nome_, idade_){
    let pessoa = {
        nome: nome_,
        idade: idade_
    }
    
    console.log("Olá " + pessoa.nome + " voce está com " + pessoa.idade + " anos ");
}

olaPessoa("Andre", 27)

// Digite o numero do exercicio que voce quer exibir, se quiser sair digite sair 

do {
    switch(key){
        case value: 

            break; 

        default:
            break;
    }
} while (resposta != "sair");
