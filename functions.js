function componentBlockActionOnRightClick(event){
    componentBlock.classList.remove("hidden")
    componentBlock.style.top = `${event.clientY - 30}px`
    componentBlock.style.left = `${event.clientX}px`
}

function createHTMLElement(element) {
    return document.createElement(element)
}

function appendElementToParent(elementName, parent, createElement = true) {
    if(createElement){
        const element = createHTMLElement(elementName)
        parent.append(element)
    }else{
        parent.append(elementName)
    }
}


