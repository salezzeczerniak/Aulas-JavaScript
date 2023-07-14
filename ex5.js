let prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Qual o valor total da compra? "))

if(valor > 100 && valor <= 200){
    console.log("A sua conta tera um desconto de: 10%." + "O seu valor será: " + (valor - (valor * 0.1)))
}else if(valor > 200){
    console.log("A sua conta tera um desconto de: 20%." +  "O seu valor será: " + (valor - (valor * 0.2)))
}else{
    console.log("O seu valor nao da direito a desconto!")
}