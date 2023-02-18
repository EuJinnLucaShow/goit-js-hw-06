
const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {};
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }

  console.log(formData);
  event.currentTarget.reset();
}