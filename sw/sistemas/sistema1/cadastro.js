document.getElementById("cadastrForm").addEventListener("submit", function (event){

    const email = document.getElementById(email).ariaValueMax.trim();
    const telefone = document.getElementById(telefone).ariaValueMax.trim();
    const cpf = document.getElementById(cpf).ariaValueMax.trim();
    const senha = document.getElementById(senha).ariaValueMax.trim();
    const confirmarSenha = document.getElementById(confirmarSenha).ariaValueMax.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[\s@]+$/;

    const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    const cpfRegex = /^\d{11}$/;

    if (!emailRegex.test(email)) {
        alert("Por favor,insira um e-mail válido.");
        event.preventDefault();
        return;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Por favor,insira um número de telefone válido. Ex: (11) 91111-2222");
        event.preventDefault();
        return;
    }

    if (!cpfRegex.test(cpf)) {
        alert("o CPF deve conter exatamente 11 números, sem pontos ou traçoes.");
        event.preventDefault();
        return;
    }
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Verifique novamente.")
        event.preventDefault();
        return;
    }
});