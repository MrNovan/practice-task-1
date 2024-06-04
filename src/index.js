export default () => {
  const nameInput = document.querySelector('#name');

  nameInput.addEventListener('input', () => {
    console.log(nameInput.value);
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(nameInput.value)) {
      nameInput.classList.remove('input-invalid');
      nameInput.classList.add('input-valid');
    } else {
      nameInput.classList.remove('input-valid');
      nameInput.classList.add('input-invalid');
    }
  });
};
