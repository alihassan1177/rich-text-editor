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
    
    
    if (!startMove) {
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
    }

    startMove = !startMove

    inputContainer.addEventListener('dragover', (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(inputContainer, e.clientY)
        const draggable = document.querySelector('.dragging')
        const swapOne = code.querySelector(`#${draggable.id}`)
        const swapTwo = code.querySelector(`#${afterElement?.id}`)

        if (afterElement == null || afterElement == undefined || swapTwo == undefined) {
            inputContainer.appendChild(draggable)
            swapElements(swapOne, elements[elements.length - 1])
        } else {
            swapElements(swapOne, swapTwo)            
            inputContainer.insertBefore(draggable, afterElement)
        }
    })
})

