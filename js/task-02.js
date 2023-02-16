// Отримання порожнього елемента <ul>
const ul = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Перебираємо масив інгредієнтів і створюємо елемент <li> для кожного
const liElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

//використовуємо оператор spread (...), щоб одночасно вставити всі елементи <li> в елемент <ul> за допомогою методу append().
ul.append(...liElements);