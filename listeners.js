componentButtons?.forEach(button => {
    button.addEventListener('click', (e)=>{
        componentBlock.classList.add("hidden")
        const whichButton = button.dataset.component        
        appendElementToParent(commands[whichButton], code)
    })
})

window.addEventListener('contextmenu', (event) => {
    if (event.target != textEditor) return
    event.preventDefault()
    componentBlockActionOnRightClick(event)
})

textEditor.addEventListener('click', ()=>{
    componentBlock.classList.add("hidden")
})
