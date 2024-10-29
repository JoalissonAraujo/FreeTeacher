// Seleciona elementos do DOM
const postButton = document.querySelector('#create-post button');
const postTextarea = document.querySelector('#create-post textarea');
const feed = document.querySelector('.feed');

// Função para criar um novo post
function createPost() {
    const postContent = postTextarea.value.trim();
    
    if (postContent === "") {
        alert("Você não pode publicar um post vazio.");
        return;
    }

    // Cria um novo elemento de post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
        <div class="post-header">
            <div class="user-image"></div>
            <h3>Usuário</h3>
            <span>Publicou agora</span>
        </div>
        <p class="post-content">${postContent}</p>
        <div class="post-actions">
            <button class="like">Curtir</button>
            <button class="comment">Comentar</button>
            <button class="share">Compartilhar</button>
        </div>
        <div class="comments"></div>
        <div class="comment-input" style="display: none;">
            <input type="text" placeholder="Digite seu comentário...">
            <button>Enviar</button>
        </div>
    `;

    // Adiciona o novo post ao feed
    feed.prepend(postDiv); // Adiciona o post no início do feed

    // Limpa o campo de texto
    postTextarea.value = "";

    // Adiciona funcionalidade de curtir
    const likeButton = postDiv.querySelector('.like');
    likeButton.addEventListener('click', () => {
        if (likeButton.classList.contains('liked')) {
            likeButton.classList.remove('liked');
            likeButton.textContent = 'Curtir';
        } else {
            likeButton.classList.add('liked');
            likeButton.textContent = 'Descurtir';
        }
    });

    // Adiciona funcionalidade de comentar
    const commentButton = postDiv.querySelector('.comment');
    const commentsDiv = postDiv.querySelector('.comments');
    const commentInputDiv = postDiv.querySelector('.comment-input');
    const commentInput = commentInputDiv.querySelector('input');
    const sendCommentButton = commentInputDiv.querySelector('button');

    commentButton.addEventListener('click', () => {
        commentInputDiv.style.display = commentInputDiv.style.display === 'none' ? 'block' : 'none';
    });

    sendCommentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        
        if (commentText === "") {
            alert("Você não pode enviar um comentário vazio.");
            return;
        }

        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;
        commentsDiv.appendChild(commentDiv);

        // Limpa o campo de entrada de comentários
        commentInput.value = "";
        commentInputDiv.style.display = 'none';
    });

    // Adiciona funcionalidade de compartilhar
    const shareButton = postDiv.querySelector('.share');
    shareButton.addEventListener('click', () => {
        console.log(`Post compartilhado: ${postContent}`);
        alert("Post compartilhado com sucesso!");
    });
}

// Adiciona evento ao botão de criar post
postButton.addEventListener('click', createPost);
