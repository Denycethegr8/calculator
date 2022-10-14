const display = document.querySelector('#display');

const displayBttns = Array.from(document.querySelectorAll('.numbers-operators > button:not(#equals)')).map(e => e.addEventListener('click', displayEvent));


let var1 
let var2 

let arr = [];

function displayEvent(){
    display.textContent += this.textContent;
    arr.push(this.textContent);
    console.log(arr);
};




let operatorSelect

function setOperator(){
    console.log(this.id);
    operatorSelect = this.id;
}

function whichOperator(){
    console.log(operatorSelect);
    // let indexofOperator = arr.indexOf(//);
    var1 = arr.slice(0,indexofOperator).join('');
    var2 = arr.slice(indexofOperator+1).join('');
    if(operatorSelect === 'plus') display.textContent = plus(var1, var2);
    else if (operatorSelect === 'minus') display.textContent =  minus(var1, var2);
    else if (operatorSelect === 'multiply') display.textContent =  multiply(var1, var2);
    else display.textContent = divide(var1, var2)
    console.log(indexofOperator);
    console.log(var1 +'plus'+ var2)
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
    arr = [];
}