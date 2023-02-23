let dropSwitcher = document.querySelectorAll(".faq-list__question")
let collapsed = null

dropSwitcher.forEach(li => {
    li.addEventListener('click', (event) => {
        if(collapsed != event.currentTarget) {
            collapsed?.classList.remove('drop-down');
            collapsed = event.currentTarget;
        }

        event.currentTarget.classList.toggle('drop-down')
    })
})