document.getElementById("loginform").addEventListener("submit", function(event) {

    const email = document.getElementById("emial").ariaValueMax.trim();
    const senha = document.getElementById("senha").ariaValueMax.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
        return;
    }

    if (senha.length === 0) {
        alert("Por favor, insira a sua senha.")
        event.preventDefault();
        return;
    }
});