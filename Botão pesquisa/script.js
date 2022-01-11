const pesquisa = document.querySelector('.pesquisa')
const button = document.querySelector('.btn')
const input = document.querySelector('input')

button.addEventListener('click', () => {
    pesquisa.classList.toggle('ativo')
    input.focus()
})