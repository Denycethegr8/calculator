const display = document.querySelector('#display');

const displayBttns = Array.from(document.querySelectorAll('.numbers-operators > button')).map(e => e.addEventListener('click', displayEvent));

const numbers = Array.from(document.querySelectorAll('.numbers')).map(e => e.addEventListener('click', saveVar));

let var1 = '';
let var2 = '';

function displayEvent(){
    display.textContent += this.textContent;
};

function saveVar(){
    var1 += this.textContent;
    console.log(var1);
}

function setOperator(){
    console.log(this.id);
    return this.id;
}

function whichOperator(){
    if(setOperator === 'plus') return plus(var1, var2);
    else if (setOperator === 'minus') return minus(var1, var2);
    else if (setOperator === 'multiply') return multiply(var1, var2);
    else return divide(var1, var2)
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

document.getElementById('divide').addEventListener('click', setOperator) 

document.getElementById('multiply').addEventListener('click', setOperator) 

document.getElementById('minus').addEventListener('click', setOperator) 

document.getElementById ('plus').addEventListener('click', setOperator) 

document.getElementById('equals').addEventListener('click', setOperator)