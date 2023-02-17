// Отримання посилань на елементи лічильника
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// Ініціалізація значення лічильника
let counterValue = 0;

// Додавання слухачів подій до кнопок
incrementBtn.addEventListener("click", () => {
    counterValue++;
    valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
    counterValue--;
    valueEl.textContent = counterValue;
});

