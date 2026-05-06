const grid = document.querySelector('.grid-projetos');
const btnDir = document.querySelector('.dir');
const btnEsq = document.querySelector('.esq');

// Função para calcular quanto rolar
function getScrollAmount() {
    const card = document.querySelector('.projeto-item');
    const style = window.getComputedStyle(grid);
    const gap = parseInt(style.columnGap) || 20; // Pega o valor do gap do seu CSS
    
    // Retorna a largura do card + o espaço entre eles
    return card.offsetWidth + gap;
}

btnDir.addEventListener('click', () => {
    grid.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
    });
});

btnEsq.addEventListener('click', () => {
    grid.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
    });
});

const certificados = document.querySelectorAll('.cert-img-container img');

certificados.forEach(img => {
    img.addEventListener('mousedown', function(e) {
        // Se a imagem já é o elemento ativo (está ampliada)
        if (document.activeElement === this) {
            // Pequeno atraso para garantir que o foco seja removido corretamente
            setTimeout(() => {
                this.blur();
            }, 10);
        }
    });
});