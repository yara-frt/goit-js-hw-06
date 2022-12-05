const input = document.querySelector('#name-input');
const newName = document.querySelector('#name-output');


input.addEventListener('input', onInput);

function onInput(event) {
    const { value } = event.currentTarget;
    if (value.length) {
        newName.textContent = value;
    } else {
        newName.textContent = 'Anonymous';
    }
}