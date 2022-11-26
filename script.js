const componentBlock = document.querySelector("#component-block")
const textEditor  = document.querySelector("#text-editor")


window.oncontextmenu = function ()
{
    componentBlock.classList.remove("hidden")
    return false;     // cancel default menu
}