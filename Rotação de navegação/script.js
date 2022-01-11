const abrir = document.getElementById('open')
const fechar = document.getElementById('close')
const container = document.querySelector('.container')

abrir.addEventListener('click', () => container.classList.add('mostrar-nav'))

fechar.addEventListener('click', () => container.classList.remove('mostrar-nav'))