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
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    divide = document.getElementById("divide"),
    multi = document.getElementById("multi"),
    perchan = document.getElementById("perchan"),
    dot = document.getElementById("dot"),
    del = document.getElementById("del"),
    bracket = document.getElementById("bracket"),
    equal = document.getElementById("equal"),
    answer_display = document.getElementById("answer_display"),
    minus_count = 0,
    clear = document.getElementById("clear");

let string = "",
    num,
    bracket_Count=1;
answer_display.style.display = "none"

const text_display = document.getElementById("text_display")
// let innertext = text_display.innerText
// innertext = ""
one.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "1"
    text_display.innerText = string;
})
two.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "2"
    text_display.innerText = string;
})
three.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "3"
    text_display.innerText = string;
})
four.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "4"
    text_display.innerText = string;
})
five.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "5"
    text_display.innerText = string;
})
six.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "6"
    text_display.innerText = string;
})
seven.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "7"
    text_display.innerText = string;
})
eight.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "8"
    text_display.innerText = string;
})
nine.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "9"
    text_display.innerText = string;
})
zero.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "0"
    text_display.innerText = string;
})
one.addEventListener("click", display => {
    num = num * 0;
    answer_display.style.display = "none"
    string = string + "8"
    text_display.innerText = string;
})
clear.addEventListener("click", display => {
    string = ""
    num = num * 0;
    answer_display.style.display = "none"
    answer_display.innerText = num;
    text_display.innerText = string;
})
minus.addEventListener("click", display => {
    if (string.endsWith("-") === false) {
        string = string + "-"
        text_display.innerText = string;

    }

})
plus.addEventListener("click", display => {
    if (string.endsWith("+") === false) {
        string = string + "+"
        text_display.innerText = string;


    }

})
multi.addEventListener("click", display => {
    if (string.endsWith("*") === false && string.length != 0) {
        string = string + "*"
        text_display.innerText = string;

    }

})
divide.addEventListener("click", display => {
    if (string.endsWith("/") === false && string.length != 0) {
        string = string + "/"
        text_display.innerText = string;

    }

})
bracket.addEventListener("click", display => {
    if (bracket_Count === 1 ) {
        string = string + "("
        text_display.innerText = string;
        bracket_Count+=1

    }
    else {
        string = string + ")"
        bracket_Count-=1
        text_display.innerText = string;
    }

})
del.addEventListener("click", display => {
    if (string.endsWith(")") === true) {
            bracket_Count-=1
    }
    if (string.length != 0) {
        string = string.substring(0, string.length - 1);
        
        text_display.innerText = string;
        num = num * 0;
        answer_display.style.display = "none"
        answer_display.innerText = num;

    }
})
perchan.addEventListener("click", display => {
    if (string.endsWith("*") === false && string.length != 0){
        string = string + "%"
        text_display.innerText = string;
    }
    
    
})
equal.addEventListener("click", display => {
    if (string.endsWith("%")===true) {
        string = string.substring(0, string.length - 1);
        num = eval(string)
        num = num/100;

    }
    else{
        num = eval(string)
    }
    answer_display.style.display = "block"
    answer_display.innerText = num;
})

