// Отримання необхідних елементів
const controls = document.querySelector('#controls');
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


// Додавання слухачів подій до кнопок
createBtn.addEventListener('click', () => { createBoxes(input.value) });
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення boxes
function createBoxes(amount) {  
  // Створення boxes та додавання їх до container
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Функція знищення boxes
function destroyBoxes() {  
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

// Функція для створення випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
