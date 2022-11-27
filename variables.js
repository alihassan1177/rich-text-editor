const componentBlock = document.querySelector("#component-block")
const textEditor = document.querySelector("#text-editor")
const componentButtons = document.querySelectorAll("#component-btn")
const code = document.querySelector("#code")
const refreshBtn = document.querySelector("#refresh")
const preview = document.querySelector("#preview")
const inputContainer = document.querySelector("#input-container")
const moveBtn = document.querySelector("#move")

const commands = {
    "heading" : {"element" : "h1", "input" : "textarea", "class" : ["text-2xl", "text-gray-900", "font-bold", "mb-2"]},
    "image" : {"element" : "img", "input" : "input", "class" : ["w-full", "block", "mb-2"]},
    "link" : {"element" : "a", "input" : "textarea", "class" : ["text-base", "text-blue-500", "underline", "cursor-pointer", "mb-2"]},
    "paragraph" : {"element" : "p", "input" : "textarea", "class" : ["text-base", "text-gray-800", "mb-2"]}
}

const inputClasses = ["mb-3","w-full", "block", "bg-transparent", "border", "border-white", "p-3"]
