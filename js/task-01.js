// ====================================== 1-ше завдання =====================================
const items = document.querySelectorAll('.item');
const quantityItems = items.length;
console.log(quantityItems);
// ====================================== 2-ге завдання =====================================

const textTitles = document.querySelectorAll('.item ul');
for (const val of textTitles) {
    console.log(`Category: ${val.previousElementSibling.textContent}`);
    console.log(`Elements: ${val.children.length}`);
}