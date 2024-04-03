// Iniciando Lógica de Programação com JavaScript

alert("Bem-vindo ao joguinho da Alura");
let numeroSecreto = 11;
console.log(numeroSecreto);
let chute

//enquanto (loop)
while (chute) {
    chute = prompt("Escolha um numero entre 1 e 15");
}

//se e senao (condicao)
if (numeroSecreto == chute) {
    alert(`Voce descobriu! O numero secreto era ${numeroSecreto}`);
} else {
//  codigo antigo -   alert("Errrrrrroooouuuuu! O numero secreto era " + numeroSecreto + " e voce escolheu " + chute);
    if (numeroSecreto > chute) {
        alert("O numero secreto eh maior que " + chute);
    }
    else {
        alert(`O numero secreto eh menor que ${chute}`);
    }
}



// Testes da aula 01

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


//Testes da Aula 02

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