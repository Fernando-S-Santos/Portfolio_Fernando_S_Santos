const inputs = document.querySelectorAll('[data-tipo]');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        mensagemErro(evento.target);
    });
});

const tiposDeErro = [
    'valueMissing',
];

const mensagensDeErro = {

    nome: {
        valueMissing: 'Campo nome é obrigatório, não pode estar vazio!'
    },
    email: {
        valueMissing: 'Campo e-mail é obrigatório, não pode estar vazio!',
        patternMismatch: 'O e-mail digitado não é válido!'
    },
    assunto: {
        valueMissing: 'Campo assunto é obrigatório, não pode estar vazio!'
    },
    mensagem: {
        valueMissing: 'Campo mensagem é obrigatório, não pode estar vazio!'
    }

};

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mensagemErro(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid && (!tipoDeInput === 'email' || regexEmail.test(input.value))) {
        input.parentElement.classList.remove('input__container--invalido');
        input.parentElement.querySelector('.form__erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input__container--invalido');
        input.parentElement.querySelector('.form__erro').innerHTML = exibirMensagemDeErro(tipoDeInput, input);
    }
};

function exibirMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        } else if (tipoDeInput === 'email' && !regexEmail.test(input.value)) {
            mensagem = mensagensDeErro.email.patternMismatch;
        }
    });

    return mensagem;
};
