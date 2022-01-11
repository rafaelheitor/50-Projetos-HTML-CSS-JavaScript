const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const pontoDeAtivacao = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < pontoDeAtivacao) {
            box.classList.add('mostrar')
        } else{
            box.classList.remove('mostrar')
        }
    })
}