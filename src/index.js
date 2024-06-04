export default () => {
  const nameInput = document.querySelector('#name');
  const surnameInput = document.querySelector('#surname');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const aboutInput = document.querySelector('#about');

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
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.classList.remove('input-invalid');
      emailInput.classList.add('input-valid');
    } else {
      emailInput.classList.remove('input-valid');
      emailInput.classList.add('input-invalid');
    }
  });

  phoneInput.addEventListener('input', () => {
    const phoneRegex = /^\+\d{10}$/;
    if (phoneRegex.test(phoneInput.value)) {
      phoneInput.classList.remove('input-invalid');
      phoneInput.classList.add('input-valid');
    } else {
      phoneInput.classList.remove('input-valid');
      phoneInput.classList.add('input-invalid');
    }
  });

  aboutInput.addEventListener('input', () => {
    const aboutRegex = /^[a-zA-ZА-Яа-я0-9\s\\.,\-']{1,50}$/;
    if (aboutRegex.test(aboutInput.value)) {
      aboutInput.classList.remove('input-invalid');
      aboutInput.classList.add('input-valid');
    } else {
      aboutInput.classList.remove('input-valid');
      aboutInput.classList.add('input-invalid');
    }
  });
};
