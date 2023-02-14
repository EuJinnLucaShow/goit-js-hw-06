// Отримання елемента списку категорій та його дочірніх елементів
const categoriesList = document.querySelector("ul#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виведення загальної кількості категорій
console.log(`Total number of categories: ${categoryItems.length}`);

// Перебираємо кожен елемент категорії та виводимо його назву та кількість елементів
categoryItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const numElements = category.querySelectorAll("li").length;
  console.log(`${title}: ${numElements} elements`);
});
