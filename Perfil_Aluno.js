function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function editProfile() {
    alert("Funcionalidade de edição de perfil ainda não implementada.");
}

function viewCourses() {
    alert("Funcionalidade para ver cursos ainda não implementada.");
}

function logout() {
    alert("Você foi desconectado.");
}

function addPost() {
    const input = document.getElementById('publicacao-input');
    const postsContainer = document.getElementById('posts');

    if (input.value.trim() !== "") {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.textContent = input.value;
        postsContainer.prepend(postDiv); // Adiciona a nova publicação no topo
        input.value = ""; // Limpa o campo de texto
    } else {
        alert("Por favor, escreva algo antes de publicar.");
    }
}
