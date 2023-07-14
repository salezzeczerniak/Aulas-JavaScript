let prompt = require("prompt-sync")();

//Exercicio 1

let nome = prompt("Qual é o seu nome? ");
let cargo = prompt("Qual o seu cargo dentro da empresa? ");
let salario = prompt("Quanto voce ganha? ");

if(salario < 1000){
    console.log(salario * 1.1);
}else{
    console.log("Voce nao tera um acrescimo de 10% no salario");
}

console.log(nome)
console.log(cargo)
console.log(salario)

//Exercicio 2

let recebiveis = prompt("Qual é o seu salario?")

if(recebiveis < 500){
    console.log('O seu salario sera reajustado para ', recebiveis * 1.3);
}else{
    console.log("Infelizmente voce nao tera direito ao reajuste salarial")
}

//Exercicio 3

let numero = prompt("Digite um numero")

if(numero > 0){
    console.log("O numero escolhido é positivo")
}else if(numero <0){
    console.log("O numero escolhido é negativo")
}else{
    console.log("O numero zero é Neutro")
}

//Exercicio 4 

let quatro = parseInt(prompt("Digite um número"))

if(quatro % 2 ===0){
    console.log("O numero " + quatro + "é par!")
}else{
    console.log("O numero " + quatro + "é impar")
}

//Exercicio 5

let cinco_01 = parseInt(prompt("Digite o primeiro numero"))
let cinco_02 = parseInt(prompt("Digite o segundo número"))

if(cinco_01 > cinco_02){
    console.log("O" + cinco_01 + "é maior que " + cinco_02)
}else if(cinco_02 > cinco_01){
    console.log("O" + cinco_02 + "é maior que " + cinco_01)
}

//Exercicio 6 

let nota_1 = parseInt(prompt("Digite a primeira nota"))
let nota_2 = parseInt(prompt("Digite a segunda nota"))
let nota_3 = parseInt(prompt("Digite a terceira nota"))
let nota_4 = parseInt(prompt("Digite a quarta nota"))

if(nota_1 + nota_2 + nota_3 + nota_4 / 4 >= 7){
    console.log("Aprovado")
}else if(nota_1 + nota_2 + nota_3 + nota_4 / 4 <= 6){
    console.log("Recuperação")
}else if(nota_1 + nota_2 + nota_3 + nota_4 / 4 <= 5){
    console.log("Reprovado")
}