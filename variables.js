const componentBlock = document.querySelector("#component-block")
const textEditor = document.querySelector("#text-editor")
const componentButtons = document.querySelectorAll("#component-btn")
const code = document.querySelector("#code")

const commands = {
    "heading" : 'h1',
    "image" : "img",
    "link" : "a",
    "paragraph" : "p"
}

const headingClasses = ["w-full", "block", "bg-transparent", "border", "border-white", "p-3"]