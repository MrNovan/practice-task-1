export default () => {
  const nameInput = document.querySelector('#name');
  const surnameInput = document.querySelector('#surname');
  const emailInput = document.querySelector('#email');

  nameInput.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(nameInput.value)) {
      nameInput.classList.remove('input-invalid');
      nameInput.classList.add('input-valid');
    } else {
      nameInput.classList.remove('input-valid');
      nameInput.classList.add('input-invalid');
    }
  });

  surnameInput.addEventListener('input', () => {
    const surnameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (surnameRegex.test(surnameInput.value)) {
      surnameInput.classList.remove('input-invalid');
      surnameInput.classList.add('input-valid');
    } else {
      surnameInput.classList.remove('input-valid');
      surnameInput.classList.add('input-invalid');
    }
  });

  emailInput.addEventListener('input', () => {
    console.log(emailInput.value);
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.classList.remove('input-invalid');
      emailInput.classList.add('input-valid');
    } else {
      emailInput.classList.remove('input-valid');
      emailInput.classList.add('input-invalid');
    }
  });
};
