// Отримання посилань на необхідні елементи
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');

// Додавання слухача події до кнопки
button.addEventListener('click', () => {
 // Генерування випадкового кольору
  const randomColor = getRandomHexColor();

  // Встановити колір фону body
  body.style.backgroundColor = randomColor;

// Відображення значення кольору в span
  colorSpan.textContent = randomColor;
});

// Функція для створення випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
