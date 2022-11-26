const componentBlock = document.querySelector("#component-block")
const textEditor  = document.querySelector("#text-editor")
const componentButtons = document.querySelectorAll("#component-btn")
const code = document.querySelector("#code")

textEditor.addEventListener('click', ()=>{
    componentBlock.classList.add("hidden")
})

componentButtons?.forEach(button => {
    button.addEventListener('click', (e)=>{
        componentBlock.classList.add("hidden")

        const whichButton = button.dataset.component

        // Break this into Different function
        if(whichButton == "heading"){
            appendElementToParent('h1', code)
        }else if(whichButton == "image"){
            appendElementToParent('img', code)
        }else if(whichButton == "link"){
            appendElementToParent('a', code)
        }else if (whichButton == "paragraph"){
            appendElementToParent('p', code)
        }

    })
})

window.addEventListener('contextmenu', (event) => {
    if (event.target != textEditor) return
    event.preventDefault()
    componentBlockActionOnRightClick(event)
})

function componentBlockActionOnRightClick(event){
    componentBlock.classList.remove("hidden")
    componentBlock.style.top = `${event.clientY - 30}px`
    componentBlock.style.left = `${event.clientX}px`
}

function createHTMLElement(element) {
    return document.createElement(element)
}

function appendElementToParent(elementName, parent) {
    const element = createHTMLElement(elementName)
    parent.append(element)
}
