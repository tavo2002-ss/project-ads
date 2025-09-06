document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Inicializa a biblioteca AOS

    // ... (código do carrossel e da calculadora abaixo) ...
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

    if (prevBtn && nextBtn && infoGrid) {
        nextBtn.addEventListener('click', () => {
            infoGrid.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            infoGrid.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        });
    }

    // Lógica do Carrossel de Mitos e Verdades
    const prevMythBtn = document.getElementById('prev-myth-btn');
    const nextMythBtn = document.getElementById('next-myth-btn');
    const mythGrid = document.querySelector('.myth-grid');
    const mythCardWidth = 500;
    
    if (prevMythBtn && nextMythBtn && mythGrid) {
        nextMythBtn.addEventListener('click', () => {
            mythGrid.scrollBy({ left: mythCardWidth + gap, behavior: 'smooth' });
        });
        prevMythBtn.addEventListener('click', () => {
            mythGrid.scrollBy({ left: -(mythCardWidth + gap), behavior: 'smooth' });
        });
    }
});