function componentBlockActionOnRightClick(event) {
    componentBlock.classList.remove("hidden")
    componentBlock.style.top = `${event.clientY - 30}px`
    componentBlock.style.left = `${event.clientX}px`
}

function createHTMLElement(element) {
    return document.createElement(element)
}

function appendElementToParent(elementName, parent, createElement = true) {
    if (createElement) {
        const element = createHTMLElement(elementName)
        parent.append(element)
    } else {
        parent.append(elementName)
    }
}

function makeElementID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getURLandText(value) {
    return {url : value.substr(value.search("url:") + 4), text : value.substr(0, value.search("url:"))}
}

function attachValueChangeListener(element, id) {
    const input = document.querySelector(`textarea#${id}`)

    if (element.nodeName == "IMG") {
        input.addEventListener("blur", (e) => {
            element.src = e.target.value
        })
    }else if(element.nodeName == "A"){
        input.addEventListener("blur", (e) => {
            const value = e.target.value
            const content = getURLandText(value)
            const text = content.text
            const url = content.url
            element.innerText = text
            element.href = url
            element.target = "_blank"
        })
    }   
    else {
        input.addEventListener("blur", (e) => {
            element.innerText = e.target.value
        })
    }
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

function generateCode(element, content, classes, id) {
    const el = createHTMLElement(element)
    el.id = id

    if (element == "img") {
        el.src = content
    }else if(element == "a"){
        const value = getURLandText(content)
        el.href = value.url
        el.innerText  = value.text            
    }
     else {
        el.innerHTML = content
    }

    el.classList.add(...classes)
    attachValueChangeListener(el, id)
    return el
}