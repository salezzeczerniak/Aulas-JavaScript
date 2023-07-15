let prompt = require("prompt-sync")

//Exemplo 1
for ([inicialização]; [condição]; [contagem]){
    //declaração
}

//Usada para executar repetidamente um bloco de código por um número específico de vezes.
//[inicialização] -> Usada para iniciar o contador de repetições.
//[condição] -> Uma expressão para ser avaliada antes de cada interação do loop. Se esta expressão for avaliada para true, a declaração será executado.
//[contagem] -> Uma expressão que será executada no final de cada iteração de loop. Geralmente usado para atualizar ou incrementar a variável do contador.


//Exemplo 2 

for (let contador = 1; contador <= 10; contador++) {

    console.log(contador);
    
}



//Exemplo 3 
//Enquanto(While) -> Executa uma instrução até que uma condição especifica seja verdadeira.
//Exemplo: Suponha que você tenha um salário inicial de R$1000. 
//Escreva um código que incremente seu salário em R$100 repetidamente até que ele atinja R$5000. E a cada aumento, mostre o valor atual do salário.

let salario = 1000

while (salario < 5000) {
salario += 100;
console.log("O salário ainda é R$" + salario);
}

//Exemplo 4
//Faça Enquanto(Do While) -> É possível também fazer com que o while execute ao menos uma vez seu bloco de código antes da verificação.
//Suponha que você tenha um salário inicial de R$1000. Escreva um código que incremente seu salário em R$100 repetidamente até que ele atinja R$5000. E a cada aumento, mostre o valor atual do salário.

let aumento = 1000;

do {
console.log("O salário ainda é R$" + aumento);

aumento += 100;
} while (aumento < 5000);

//Array 
//Exemplo 1

let arquivoEmails = ["Banana", "Maça"];
//Array + string envolvidos entre ""

//Exemplo 2

let NomeDoArray = [ Valor1, Valor2];
//Array + números envolvidos

//Exemplo 3

//Para cada(ForEach)

var arrayNumeros = [1,2,3,4,5,6];
arrayNumeros.forEach(elemento => {
console.log("Os número são:"+ elemento);
});


