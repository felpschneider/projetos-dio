// Desafio 3: O código  tem alguns erros e não funciona como deveria.
// Você pode identificar quais são e corrigi-los em um arquivo TS ?

export {}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let total: number = 0;

limparSaldo();

function somarAoSaldo(soma) {
    if (campoSaldo) {
        total += soma
        campoSaldo.innerHTML = total.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}




 