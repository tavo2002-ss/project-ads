document.addEventListener('DOMContentLoaded', () => {
    const showModalButton = document.getElementById('show-modal');
    const modal = document.getElementById('new-topic-modal');
    const closeButton = document.querySelector('.close-button');
    const form = document.getElementById('new-topic-form');
    const topicInput = document.getElementById('topic-title-input');
    const tableBody = document.getElementById('forum-table-body');

    // Mostra o modal quando o botão "Criar Novo Tópico" é clicado
    showModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Esconde o modal quando o botão de fechar é clicado
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Esconde o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Lida com o envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newTopicTitle = topicInput.value;
        const newTopicAuthor = 'Você'; // Autor fictício

        // Cria a nova linha (tr) e as células (td) para o tópico
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td class="topic-title"><a href="#">${newTopicTitle}</a></td>
            <td class="topic-author">${newTopicAuthor}</td>
            <td class="topic-replies">0</td>
            <td class="topic-last-activity">agora mesmo</td>
        `;
        
        // Adiciona a nova linha ao início da tabela
        tableBody.prepend(newRow);

        // Limpa o campo de input e esconde o modal
        topicInput.value = '';
        modal.classList.add('hidden');
    });
});