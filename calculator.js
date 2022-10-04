const display = document.querySelector('#display');

const numberButtons = Array.from(document.querySelectorAll('.numbers'));

console.log(numberButtons);

const addEvent = numberButtons.map(e => e.addEventListener('click', displayNums));

function displayNums(){
    display.textContent = this.textContent;
}

