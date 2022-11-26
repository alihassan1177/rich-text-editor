componentButtons?.forEach(button => {
    button.addEventListener('click', (e)=>{
        componentBlock.classList.add("hidden")
        const whichButton = button.dataset.component
        const elementID = makeElementID(10)
        const input = createHTMLElement(commands[whichButton]["input"])
        input.classList.add(...inputClasses)
        const element = createHTMLElement(commands[whichButton]["element"])
        const classes = commands[whichButton]["class"]
        element.classList.add(...classes)

        input.id = elementID
        element.id = elementID

        
        appendElementToParent(element, code, false)
        appendElementToParent(input, textEditor, false)
        
        attachValueChangeListener(element, elementID)

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

refreshBtn.addEventListener('click', ()=>{
  preview.innerHTML = code.innerHTML  
})