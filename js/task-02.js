const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

for (const value of ingredients) {
  const item = document.createElement('li');
  item.textContent = value;
  item.classList.add('item');
  console.log(item);
  list.append(item);
}
