const display = document.querySelector('#display');

const buttons = Array.from(document.querySelectorAll('.numbers-operators > button'));

const addEvent = buttons.map(e => e.addEventListener('click', displayBttns));

function displayBttns(){
    display.textContent += this.textContent;
};

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