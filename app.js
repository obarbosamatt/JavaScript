// Iniciando Lógica de Programação com JavaScript

alert("Bem-vindo ao joguinho da Alura");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// parseInt - seleciona apenas a parte inteira do numero
// Math.random - seleciona um numero aleatótio entre 0 e 1
console.log(numeroSecreto);  //console.log deve ser retirado ao ir para producao
let chute;          // variavel vazia, pois recebera um valor posteriormente
let tentativas = 1; //ira contabilizar quantidade de tentativas, iniciando em 1

//enquanto (loop)
while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e " + numeroMaximo);

    //se e senao (condicao)
    if (numeroSecreto == chute) {
        break;
    } else {
    //  codigo antigo -   alert("Errrrrrroooouuuuu! O numero secreto era " + numeroSecreto + " e voce escolheu " + chute);
        if (numeroSecreto > chute) {
            alert("O numero secreto eh maior que " + chute);
        }
        else {
            alert(`O numero secreto eh menor que ${chute}`);
        }
        // tentativas = tentativas + 1; igual ao codigo abaixo, porem menos utilizado
        tentativas++;
        // tentativas-- seria usado para diminuir o contador
      }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //operador ternário
alert(`Voce descobriu! O numero secreto era ${numeroSecreto} e so precisou de ${tentativas} ${palavraTentativa}`);


// o codigo abaixo tem o mesmo resultado que o operador ternario acima

//if (tentativas > 1) {
//    alert(`Voce descobriu! O numero secreto era ${numeroSecreto} e so precisou de ${tentativas} tentativas`);
//} else {
//    alert(`Voce descobriu! O numero secreto era ${numeroSecreto} e so precisou de ${tentativas} tentativa`);
//}


//////////////////////////////// Testes da aula 01

// let nome = Lua;
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
//
// alert("Erro! Preencha todos os campos");
//
// let mensagemDeErro = "Erro! Preencha todos os campos";
//
// alert(mensagemDeErro);
//
// let nomeUser = prompt("Escreva seu nome");
//
// let idadeUser = prompt("Qual a sua idade");
//
// if (idadeUser >= 18) {
//     alert("Pode tirar habilitacao");
// }


////////////////////////////////////////Testes da Aula 02

//let diaDaSemana = prompt("Que dia da semana é hoje?");
//if (diaDaSemana == "Sabado") {
//    alert("Bom fim de semana!");
//} else {
//    if (diaDaSemana == "Domingo") {
//        alert("Bom fim de semana!");
//    }
//    else alert("Boa semana!");
//}
//
//
//let num = prompt("Digite um numero");
//if (num => 0) {
//    alert("O numero é positivo");
//}
//else {
//    alert("o numero é negativo");
//}
//
//
//
//let pontucao = 100;
//if (pontucao >= 100) {
//    alert("Voce venceu");
//}
//else {
//    alert("Tente novamente para ganhar");
//}
//
//let saldo = 5000;
//alert("Usuario, seu saldo no banco é de R$" + saldo);
//
//
//let nomeUser = prompt("Qual seu nome?");
//alert(nomeUser + ", seja bem-vindo ao sistema");



/////////////////////////////////////// Práticas da Aula 03
//
//let contador = 1;
//while (contador < 11) {
//    alert("Numero " + contador);
//    contador++;
//}

//let contador = 10;
//while (contador >= 0) {
//    alert("Numero " + contador);
//    contador--;
//}

//let numAleatorio = prompt("Escolha um numero");
//while (numAleatorio >= 0) {
//    alert(`Numero ${numAleatorio}`);
//    numAleatorio--;
//}

//let numAleatorio = prompt("Escolha um numero");
//let contador = 0;
//while (contador <= numAleatorio) {
//    alert(`Numero ${contador}`);
//    contador++;
//}

///////////////////////////////////////////
//      OPERADORES LOGICOS
//
//          AND (&&)
//           OR (||)
/////////////////////////////////////////////////////////// AULA 04

// console.log("Bem-vindo");
// 
// let nome = "Matheus";
// console.log(`Ola, ${nome}`);
// 
// let nome2 = "Matheus";
// alert("Ola, " + nome2);
// 
// let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
// console.log(linguagem);
// 
// let valor1 = 10;
// let valor2 = 20;
// let resultado = valor1 + valor2;
// let resultado2 = valor2 - valor1;
// console.log("A soma de " + valor1 + ` e ${valor2} é igual a ${resultado}.`);
// console.log("A diferenca de " + valor2 + ` e ${valor1} é igual a ${resultado2}.`);
// 
// let idade = prompt("Digite sua idade");
// let maiorIdade = idade >= 18 ? "maior" : "menor"
// alert("Voce é ")