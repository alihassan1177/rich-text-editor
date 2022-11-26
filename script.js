const componentBlock = document.querySelector("#component-block")
const textEditor  = document.querySelector("#text-editor")
const componentButtons = document.querySelectorAll("#component-btn")

componentButtons?.forEach(button => {
    button.addEventListener('click', (e)=>{
        componentBlock.classList.add("hidden")
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