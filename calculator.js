const display = document.querySelector('#display');

const displayBttns = Array.from(document.querySelectorAll('.numbers-operators > button:not(#equals)')).map(e => e.addEventListener('click', displayEvent));

const numbers = Array.from(document.querySelectorAll('.numbers')).map(e => e.addEventListener('click', saveVar));

const numberArr = Array.from(document.querySelectorAll('.numbers')).map(e => e.id);
console.log(numberArr);

let var1 = [];
let var2 = '';

function displayEvent(){
    display.textContent += this.textContent;
};

function saveVar(){
    var1.push(this.textContent);
    console.log(var1)
}

let operatorSelect

function setOperator(){
    console.log(this.id);
    operatorSelect = this.id;
    display.textContent = '';
}

function whichOperator(){
    console.log(operatorSelect);
    if(operatorSelect === 'plus') display.textContent = plus(var1, var2);
    else if (operatorSelect === 'minus') display.textContent =  minus(var1, var2);
    else if (operatorSelect === 'multiply') display.textContent =  multiply(var1, var2);
    else display.textContent = divide(var1, var2)
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

Array.from(document.querySelectorAll('.operators:not(#equals)')).map(e => e.addEventListener('click', setOperator));

document.querySelector('#clear').addEventListener('click', clear)

function clear(){
    display.textContent = '';
    var1 = '';
    operatorSelect = '';
}