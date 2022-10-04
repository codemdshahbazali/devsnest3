//function expression syntax
const add = function(a, b) {
    return a+b;
}

//anonymus function

to find all the attributes of a dom object/node we can see properties tab on the element tab.

document 
window

document.body

document
    createElement()
    appendChild()
    getElementsByClassName() => give HTMLCollection
    getElementById()
    querySelector() => works with css selector => returns first element which matches the rule
    querySelectorAll() => gives NodeList


element.textContent => gives the text inside it.
element.id = "span-id"
element.className = "blue"
element.className = "green yellow"

element.style.backgroundColor = 'yellow' // assigns backgroundColor dynamically.

element.setAttribute("id", "new-id");
let idOfPara = element.getAttribute("id");

para.classList.add("newClass")
para.classList.remove("newClass")
para.classList.toggle("newClass")

element.textContent = "Hello <em>World!!!</em>" // this will convert everything to strng
element.innerHTML = "Hello <em>World!!!</em>"// this is respect html tags

const hobbies = ['coding', 'playing']

const list = document.createElement("ul")

for(let hobby of hobbies) {
    list.innerHTML += "<li class='blue'"+hobby+"</li>";
}

