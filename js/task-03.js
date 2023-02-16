const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Отримання порожнього елемента <ul>
const gallery = document.querySelector('.gallery');

// Використовуем масив об'єктів images для створення елементів <img>, вкладених в <li>
const imageHTML = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}" width="100%";>
  </li>
`);

// Додавання HTML-коду зображення до галереї за допомогою insertAdjacentHTML()
gallery.insertAdjacentHTML('beforeend', imageHTML.join(''));

// Застосувати стилі CSS до галереї
gallery.classList.add('image-gallery');