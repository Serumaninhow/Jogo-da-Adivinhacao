function geraNumeroAleatorio(ini, fim){
    let n = Math.round(Math.random() * (fim - ini)) + ini;

    if(listaSorteados.length == 3 || listaSorteados.length == fim - ini + 1)
        listaSorteados = [];

    if(listaSorteados.includes(n)){
        return geraNumeroAleatorio(ini, fim);
    }else{
        listaSorteados.push(n);
        console.log(listaSorteados);
        return n;
    }
    
}

function exibeNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function verificarChute(){
    let input = document.querySelector('input');
    let n = input.value;
    let mensagem;
    if(n == numero){
        if(tentativas > 1)
            mensagem = `Você acertou com ${tentativas} tentativas!`;
        else
            mensagem = `Você acertou com uma tentativa!`;
        exibeNaTela('h1', `Parabéns!`);
        exibeNaTela('p', mensagem);
        let botao = document.getElementById('principal');
        let botaoReinicia = document.getElementById('reiniciar');
        botao.disabled = true;
        botaoReinicia.disabled = false;
    }else{
        tentativas++;
        if(n > numero){
            exibeNaTela('p', 'O número secreto é menor');
        }else{
            exibeNaTela('p', 'O número secreto é maior');
        }
        limpaTela();
    }
}

function limpaTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function iniciaJogo(){
    exibeNaTela('h1', 'Jogo do Número Secreto');
    exibeNaTela('p', `Digite um número de ${limiteInferior} até ${limiteSuperior}:`);
    let botao = document.getElementById('principal');
    let botaoReinicia = document.getElementById('reiniciar');
    botao.disabled = false;
    botaoReinicia.disabled = true;
    limpaTela();
    numero = geraNumeroAleatorio(limiteInferior, limiteSuperior);
    tentativas = 1;
}
let limiteInferior = 1;
let limiteSuperior = 10;
let listaSorteados = [];
let tentativas = 1;
iniciaJogo();

