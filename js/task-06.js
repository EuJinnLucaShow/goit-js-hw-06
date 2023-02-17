const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const maxLength = parseInt(input.getAttribute('data-length'));
  const actualLength = input.value.length;
        
  if (actualLength === maxLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
