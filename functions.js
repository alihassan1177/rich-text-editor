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

function swapElements(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
}

function generateCode(element, content, classes, id) {
    const el = createHTMLElement(element)
    el.id = id
    el.innerHTML = content
    el.classList.add(...classes)
    attachValueChangeListener(el, id)
    return el
}