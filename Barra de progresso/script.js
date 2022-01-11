const progress = document.getElementById('progress')
const anterior = document.getElementById('ant')
const proximo = document.getElementById('prox')
const circulos = document.querySelectorAll('.circulo')

let ativoAtual = 1

proximo.addEventListener('click', () => {
    ativoAtual++

    if( ativoAtual > circulos.length){
        ativoAtual = circulos.length
    }
    atualizar()
})

anterior.addEventListener('click', () => {
    ativoAtual--
    if(ativoAtual < 1){
        ativoAtual = 1 
    }
    atualizar()
})

function atualizar(){
    circulos.forEach((circulo, index) => {
         if(index < ativoAtual){
            circulo.classList.add('ativo')
        }else {
                circulo.classList.remove('ativo')
            }
         })

         const ativos = document.querySelectorAll('.ativo')

         progress.style.width = (ativos.length -1) / (circulos.length -1) * 100 + '%'

         if(ativoAtual === 1){
            anterior.disabled = true
         } else if(ativoAtual === circulos.length){
            proximo.disabled = true
         } else {
             anterior.disabled = false
             proximo.disabled = false
         }
}
