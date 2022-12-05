
const list = document.querySelector('#counter');
const decreaseButton = list.firstElementChild;
const increaseButton = list.lastElementChild;
const value = document.querySelector('#value');
let counterValue = Number(value.textContent);


decreaseButton.addEventListener('click', onDecreaseButtonEvent);

function onDecreaseButtonEvent() {
    value.textContent = counterValue -= 1;
}

increaseButton.addEventListener('click', onincreaseButtonEvent);

function onincreaseButtonEvent() {
    value.textContent = counterValue += 1;
}