const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const fullList = ingredients.forEach(value => {
  const item = document.createElement('li');
  item.textContent = value;
  item.classList.add('item');
  console.log(item);
  list.append(item);
});
