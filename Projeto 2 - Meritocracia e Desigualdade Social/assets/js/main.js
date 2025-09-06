document.addEventListener('DOMContentLoaded', () => {
    // Código para a calculadora, se você quiser manter no mesmo arquivo
    const form = document.getElementById('privilege-form');
    // ... (restante do código da calculadora) ...

    // Lógica do Carrossel
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const infoGrid = document.querySelector('.info-grid');

    const cardWidth = 350; // Largura do cartão
    const gap = 32;        // Espaço entre os cartões (2rem = 32px)

    nextBtn.addEventListener('click', () => {
        infoGrid.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        infoGrid.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
        });
    });
});