const one = document.getElementById("one"),
two = document.getElementById("two"),
three = document.getElementById("three"),
four = document.getElementById("four"),
five = document.getElementById("five"),
six = document.getElementById("six"),
seven = document.getElementById("seven"),
eight = document.getElementById("eight"),
nine = document.getElementById("nine"),
zero = document.getElementById("zero"),
clear = document.getElementById("clear");

let string = ""

const text_display = document.getElementById("text_display")
// let innertext = text_display.innerText
// innertext = ""
one.addEventListener("click",display=>{
    string = string+"1"
    text_display.innerText = string;
})
two.addEventListener("click",display=>{
    string = string+"2"
    text_display.innerText = string;
})
three.addEventListener("click",display=>{
    string = string+"3"
    text_display.innerText = string;
})
four.addEventListener("click",display=>{
    string = string+"4"
    text_display.innerText = string;
})
five.addEventListener("click",display=>{
    string = string+"5"
    text_display.innerText = string;
})
six.addEventListener("click",display=>{
    string = string+"6"
    text_display.innerText = string;
})
seven.addEventListener("click",display=>{
    string = string+"7"
    text_display.innerText = string;
})
eight.addEventListener("click",display=>{
    string = string+"8"
    text_display.innerText = string;
})
nine.addEventListener("click",display=>{
    string = string+"9"
    text_display.innerText = string;
})
zero.addEventListener("click",display=>{
    string = string+"0"
    text_display.innerText = string;
})
one.addEventListener("click",display=>{
    string = string+"8"
    text_display.innerText = string;
})
clear.addEventListener("click",display=>{
    string = string*0
    text_display.innerText = string;
})