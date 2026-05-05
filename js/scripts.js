// Seleciona os elementos do DOM
const grid = document.querySelector('.grid-projetos');
const btnDir = document.querySelector('.dir');
const btnEsq = document.querySelector('.esq');

// Configura o quanto o carrossel vai andar em cada clique
const scrollAmount = 300; 

// Evento para a seta da DIREITA
btnDir.addEventListener('click', () => {
    grid.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Faz o movimento ser suave
    });
});

// Evento para a seta da ESQUERDA
btnEsq.addEventListener('click', () => {
    grid.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

