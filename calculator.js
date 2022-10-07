const display = document.querySelector('#display');

const displayBttns = Array.from(document.querySelectorAll('.numbers-operators > button')).map(e => e.addEventListener('click', displayEvent));

const numbers = Array.from(document.querySelectorAll('.numbers')).map(e => e.addEventListener('click', saveVar));
let var1 = ''

function displayEvent(){
    display.textContent += this.textContent;
};

function saveVar(){
    var1 += this.textContent;
    console.log(var1);
}

function plus(a, b){
    return a+b;
};

function minus(a, b){
    return a-b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return a/b;
};

document.getElementById('divider').addEventListener('click', () =>
    display.textContent = divide(display.textContent, 2)) 

document.getElementById('multiply').addEventListener('click', () => multiply()) 

document.getElementById('minus').addEventListener('click', () =>  minus()) 

document.getElementById ('plus').addEventListener('click', () => plus()) 

document.getElementById('equals').addEventListener('click', () => plus() )