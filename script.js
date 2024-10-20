
let form = document.getElementById('form-cadastro');
let tabela = document.getElementById('tabela-usuarios').querySelector('tbody');


form.onsubmit = function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmacaoSenha = document.getElementById('confirmacao-senha').value;

    if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return; 
    }

    let linha = tabela.insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = email;

    form.reset();
};