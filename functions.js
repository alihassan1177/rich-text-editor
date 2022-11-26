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

function attachValueChangeListener(element, id) {
    let input; 

    if (element.nodeName == "IMG") {
        input = document.querySelector(`input#${id}`)
        input.type = "file"
        input.addEventListener("change", (e)=>{
            const image = input.files[0]
            const reader = new FileReader()
            reader.addEventListener('load', ()=>{
                const dataURL = reader.result
                element.src = dataURL
            })
            reader.readAsDataURL(image)
        })
    }else{
        input = document.querySelector(`textarea#${id}`)
        input.addEventListener("blur", (e)=>{
            element.innerText = e.target.value
        })
    }

}
