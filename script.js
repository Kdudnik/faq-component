let dropSwitcher = document.querySelectorAll(".faq-list__question")
let dropped = null

function dropSwitchState (el) {
    el.classList.add('drop-down')
    if(dropped !== null) {
        dropped.classList.remove('drop-down')
    }
    dropped = el
}

dropSwitcher.forEach(li => {
    li.addEventListener('click', () => {
        dropSwitchState(li)
    })
})