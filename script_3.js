//Operadores logicos 
// Ou (ll)
// E (&&)
// Não (!)
//!true = false

//Quero validar se o numero digitado pelo usuario
// esta no intervalo entre 10 a 20
//hoje tá chovendo = false 
// hoje é terça = true 

// se hoje tá chovendo e hoje é terça
// então eu vou ficar em casa 

let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

if(numero >= 10 && numero <=20){
    console.log("O número informado está no intervalo desejado, entre 10 e 20");
}else{
    console.log("O número está fora do intervalo desejado!!");
}

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'cachorro': 
        console.log("mija")
        break;
    case 'gato':
        console.log("miaaau")
        break;
    case 'vaca':
        console.log("muuuuuuuuu")
        break;
    case 'papagaio':
        console.log("Voce foi a culpada desse amor se acabar...")
        console.log("https://www.youtube.com/watch?v=LuLnGDNhawM")
        break;
    default:
        console.log("Conheço não")
        break;
}