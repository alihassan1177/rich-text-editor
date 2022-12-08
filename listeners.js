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

        element.classList.add("swap")

        input.id = elementID
        element.id = elementID

        input.dataset.element = whichButton

        input.classList.add("draggable")
        
        appendElementToParent(element, code, false)
        appendElementToParent(input, inputContainer, false)
        
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


let startMove = false
moveBtn.addEventListener("click", ()=>{
    const draggables = document.querySelectorAll(".draggable")
    const elements = document.querySelectorAll(".swap")

    let swapElementID;    
    
    if (!startMove) {
        code.innerHTML = ""
        moveBtn.innerText = "Stop Moving"
        draggables.forEach(item => {
            item.draggable = true
            item.addEventListener("dragstart", ()=>{
              item.classList.add("dragging")
            })
            
            item.addEventListener("dragend", ()=>{
              item.classList.remove("dragging")
            })
            item.classList.add("cursor-move")
        })            
    } else {
        moveBtn.innerText = "Move"
        draggables.forEach(item => {
            item.draggable = false
            item.classList.remove("cursor-move")
        })
        draggables?.forEach(inputEl => {
            code.appendChild(generateCode(commands[inputEl.dataset.element]["element"], 
            inputEl.value, 
            commands[inputEl.dataset.element]["class"],
            inputEl.id))
        })
    }

    startMove = !startMove
    

    inputContainer.addEventListener('dragover', (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(inputContainer, e.clientY)
        const draggable = document.querySelector('.dragging')

        if (afterElement == null || afterElement == undefined) {
            inputContainer.appendChild(draggable)
        } else {
            inputContainer.insertBefore(draggable, afterElement)
            swapElementID = afterElement.id
        }
    })
})

