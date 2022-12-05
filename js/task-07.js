const input = document.querySelector('#font-size-control');
const size = document.querySelector('#text');

input.addEventListener('input', range);

function range() {
    size.style.fontSize = `${input.value}px`;

}