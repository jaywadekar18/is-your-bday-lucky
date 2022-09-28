let numberInput = document.querySelector('#input-number')
let numberDate = document.querySelector('#input-date')
let output = document.querySelector('#output')
let button = document.querySelector('#button')

function clickHandler() {
    if (!(numberInput.value && numberDate.value)) {
        alert("Pls enter both values");
        return;
    }
    let datesInString = numberDate.value.split('-');
    let datesInNumber = datesInString.map(num => Number(num));

    let dateSum = datesInNumber.reduce((acc, curr) => acc = acc + curr, 0);

    if (dateSum % Number(numberInput.value) === 0) {
        output.innerText = `${numberInput.value} is a Lucky number 🥳 🥳 🥳`
    }
    else {
        output.innerText = `${numberInput.value} is not that lucky 😕`
    }

}
button.addEventListener('click', clickHandler)

