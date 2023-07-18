//Fn = (Fn - 1) + (Fn - 2)
//Imprimir os primeiros 10 números da sequência de Fibonacci.
let n1 = 0
let n2 = 1
let  soma;


for(let i = 0; i < 10; i ++){
    console.log(n1)
    soma = n1 + n2;
    n1 = n2;
    n2 = soma;
}

