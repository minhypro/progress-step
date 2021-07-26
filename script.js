const progress = document.getElementById('progress')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const circles = document.querySelectorAll('.circle')
const bg = document.querySelector('body')
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

let currentActive = 1

    one.addEventListener('click', () => {
        currentActive = 1
        update()
        bg.className = ''
        bg.classList.add('bg-one')
    })

    two.addEventListener('click', () => {
        currentActive = 2
        update()
        bg.className = ''
        bg.classList.add('bg-two')
    })

    three.addEventListener('click', () => {
        currentActive = 3
        update()
        bg.className = ''
        bg.classList.add('bg-three')
    })

    four.addEventListener('click', () => {
        currentActive = 4
        update()
        bg.className = ''
        bg.classList.add('bg-four')
    })

// next.addEventListener('click', () => {
//     currentActive ++

//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }

//     update()
// })

// prev.addEventListener('click', () => {
//     currentActive--
    
//     if(currentActive <1) {
//         currentActive = 1
//     }
    
//     update()
// })

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length-1)/(circles.length-1) *100 + '%'

    // if(currentActive === 1) {
    //     prev.disabled = true
    // } else if(currentActive === circles.length) {
    //     next.disabled = true
    // } else {
    //     prev.disabled = false
    //     next.disabled = false
    // }
}

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})