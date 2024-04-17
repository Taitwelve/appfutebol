// Pegando os elementos do HTML 

const navMenu = document.querySelector('.nav-menu');
const sanduiche = document.querySelector('.sanduiche')

// Criar uma funçãoq ue alterna entre os elementos a aplicação da class active
function toggleMenu() {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active')
}
// Função precisa ser chamada por alguém!
sanduiche.addEventListener('click', toggleMenu)

// Fechar o menu quando clicamos no link
navMenu.addEventListener('click', (e) => {
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
    }
})
