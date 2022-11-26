const componentBlock = document.querySelector("#component-block")
const textEditor  = document.querySelector("#text-editor")
const componentButtons = document.querySelectorAll("#component-btn")
const code = document.querySelector("#code")


componentButtons?.forEach(button => {
    button.addEventListener('click', (e)=>{
        componentBlock.classList.add("hidden")

        const whichButton = button.dataset.component

        if(whichButton == "heading"){
            code.innerHTML += "This is a Heading"
        }else if(whichButton == "image"){
            code.innerHTML += "This is a Image"
        }else if(whichButton == "link"){
            code.innerHTML += "This is a Link"
        }else if (whichButton == "paragraph"){
            code.innerHTML += "This is a Paragraph"
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