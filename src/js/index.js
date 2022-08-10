

/*
 OBJETIVO 1 - QUANDO CLICARMOS NA SETA DE AVANÇAR TEMOS QUE MOSTRAR O PRÓXIMO CARTÃO DA LISTA 
 PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DA SETA AVANÇAR 
 PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA AVANÇAR
 PASSO 3 - FAZER APARECER O PRÓXIMO CARTÃO DA LISTA
 PASSO 4 - BUSCAR O CARTÃO QUE ESTÁ SELECIONADO E ESCONDER

    OBJETIVO 2 - QUANDO CLICARMOS NA SETA DE VOLTAR TEMOS QUE MOSTRAR O CARTÃO ANTERIOR DA LISTA 
 PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DA SETA VOLTAR 
 PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA VOLTAR
 PASSO 3 - FAZER APARECER O CARTÃO ANTERIOR DA LISTA
 PASSO 4 - BUSCAR O CARTÃO QUE ESTÁ SELECIONADO E ESCONDER


 FORMATO SIMPLES:

const btnAnvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

 btnAnvancar.addEventListener('click', function() {

    if(cartaoAtual === cartoes.length - 1) return 

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
    
 });

 btnVoltar.addEventListener('click', function() {

    if(cartaoAtual === 0) return 

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
    
 });

 FORMATO REFATORADO DE FORMA MAIS LIMPA: (SEM REPETCOES)
*/

 const btnAnvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

 btnAnvancar.addEventListener('click', function() {

    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
 });

 btnVoltar.addEventListener('click', function() {

    if(cartaoAtual === 0) return; 

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual)
    
 });

 //RETIRAMOS A REPETICAO DO esconderCartaoSelecionado e mostrarCartao fazendo uma funcao que chama as 2