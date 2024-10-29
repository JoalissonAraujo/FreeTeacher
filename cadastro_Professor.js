    // Função para validar o formulário
    function validateForm() {
        const name = document.querySelector('input[placeholder="Nome"]').value.trim();
        const email = document.querySelector('input[placeholder="E-mail"]').value.trim();
        const password = document.querySelector('input[placeholder="Senha"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Confirme a sua Senha"]').value;
        const fileInput = document.querySelector('input[type="file"]');

        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !password || !confirmPassword || !fileInput.files.length) {
            alert("Por favor, preencha todos os campos e anexe sua certificação.");
            return false; // Impede o envio do formulário
        }

        // Verifica se as senhas correspondem
        if (password !== confirmPassword) {
            alert("As senhas não correspondem. Por favor, tente novamente.");
            return false; // Impede o envio do formulário
        }

        // Verifica se o e-mail é válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false; // Impede o envio do formulário
        }

        return true; // Permite o envio do formulário
    }

    // Adiciona um listener para o evento de envio do formulário
    document.addEventListener('DOMContentLoaded', function() {
        const submitButton = document.querySelector('input[type="Submit"]');
        submitButton.addEventListener('click', function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Impede o envio do formulário se a validação falhar
            }
        });
    });
