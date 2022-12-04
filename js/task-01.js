// ====================================== 1-ше завдання =====================================
const items = document.querySelectorAll('.item');
const quantityItems = items.length;
console.log(quantityItems);
// ====================================== 2-ге завдання =====================================

const textTitles = document.querySelectorAll('h2');
for (const val of textTitles) {
    console.log(`Category: ${val.textContent}`);
    console.log(`Elements: ${val.nextElementSibling.children.length}`);
}