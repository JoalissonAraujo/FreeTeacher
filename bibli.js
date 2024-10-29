// Seleciona elementos do DOM
const uploadForm = document.getElementById('upload-form');
const libraryDiv = document.getElementById('library');

// Função para criar um novo livro na biblioteca
function addBookToLibrary(bookFile, title, description, isExclusive) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="book-actions">
            <a href="${bookFile}" download>Baixar</a>
            <button class="favorite">Favoritar</button>
        </div>
    `;

    // Se o livro for exclusivo, adicione uma marcação
    if (isExclusive) {
        const exclusiveTag = document.createElement('span');
        exclusiveTag.textContent = "Exclusivo";
        exclusiveTag.style.color = 'red';
        exclusiveTag.style.fontWeight = 'bold';
        exclusiveTag.style.marginLeft = '10px';
        bookDiv.appendChild(exclusiveTag);
    }

    // Adiciona o livro na biblioteca
    libraryDiv.prepend(bookDiv);

    // Adiciona funcionalidade para favoritar
    const favoriteButton = bookDiv.querySelector('.favorite');
    favoriteButton.addEventListener('click', () => {
        favoriteButton.textContent = favoriteButton.textContent === 'Favoritar' ? 'Desfavoritar' : 'Favoritar';
    });
}

// Função para lidar com o envio do formulário
uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const bookFileInput = document.getElementById('book-file');
    const titleInput = document.getElementById('book-title');
    const descriptionInput = document.getElementById('book-description');
    const exclusiveInput = document.getElementById('exclusive');

    const bookFile = URL.createObjectURL(bookFileInput.files[0]);
    const title = titleInput.value;
    const description = descriptionInput.value;
    const isExclusive = exclusiveInput.checked;

    addBookToLibrary(bookFile, title, description, isExclusive);

    // Limpa o formulário
    uploadForm.reset();
});
