const display = document.querySelector('#display');

const displayBttns = Array.from(document.querySelectorAll('.numbers-operators > button')).map(e => e.addEventListener('click', displayEvent));

const numbers = Array.from(document.querySelectorAll('.numbers')).map(e => e.addEventListener('click', saveVar));

let var1 = '';
let var2 = 2;

function displayEvent(){
    display.textContent += this.textContent;
};

function saveVar(){
    var1 += this.textContent;
    console.log(var1);
}

let operatorSelect

function setOperator(){
    console.log(this.id);
    operatorSelect = this.id;
}

function whichOperator(){
    console.log(operatorSelect);
    console.log(var2)
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

// document.getElementById('divide').addEventListener('click', setOperator) 

// document.getElementById('multiply').addEventListener('click', setOperator) 

// document.getElementById('minus').addEventListener('click', setOperator) 

// document.getElementById ('plus').addEventListener('click', setOperator) 

// document.getElementById('equals').addEventListener('click', whichOperator)

document.querySelector('#clear').addEventListener('click', clear)

function clear(){
    display.textContent = '';
    var1 = '';
    operatorSelect = '';
}