// Отримання посилань на елементи input
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

// Додавання слухача подій до input з умовою, якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
inputName.addEventListener("input", () => {
  if (inputName.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputName.value;
  }
});


