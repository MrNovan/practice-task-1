export default () => {
  const nameInput = document.querySelector('#name');
  const surnameInput = document.querySelector('#surname');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const aboutInput = document.querySelector('#about');
  const button = document.querySelector('.btn');

  nameInput.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (nameRegex.test(nameInput.value) && nameInput.value.length > 0) {
      nameInput.classList.remove('input-invalid');
      nameInput.classList.add('input-valid');
    } else {
      nameInput.classList.remove('input-valid');
      nameInput.classList.add('input-invalid');
    }

    if (nameInput.classList.contains('input-invalid') || surnameInput.classList.contains('input-invalid')
      || emailInput.classList.contains('input-invalid')) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  surnameInput.addEventListener('input', () => {
    const surnameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (surnameRegex.test(surnameInput.value) && surnameInput.value.length > 0) {
      surnameInput.classList.remove('input-invalid');
      surnameInput.classList.add('input-valid');
    } else {
      surnameInput.classList.remove('input-valid');
      surnameInput.classList.add('input-invalid');
    }

    if (nameInput.classList.contains('input-invalid') || surnameInput.classList.contains('input-invalid')
      || emailInput.classList.contains('input-invalid')) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  emailInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailInput.value) && emailInput.value.length > 0) {
      emailInput.classList.remove('input-invalid');
      emailInput.classList.add('input-valid');
    } else {
      emailInput.classList.remove('input-valid');
      emailInput.classList.add('input-invalid');
    }

    if (nameInput.classList.contains('input-invalid') || surnameInput.classList.contains('input-invalid')
      || emailInput.classList.contains('input-invalid')) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  phoneInput.addEventListener('input', () => {
    const phoneRegex = /\+[0-9]{10}/;
    if (phoneRegex.test(phoneInput.value) && phoneInput.value.length === 12) {
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

  const sendData = () => {
    const formData = {
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      about: aboutInput.value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to send data');
      })
      .then((data) => {
        console.log(data); // Обработка ответа от сервера
        alert('Данные успешно отправлены!'); // eslint-disable-line
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке данных'); // eslint-disable-line
      });
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = [nameInput, surnameInput, emailInput, phoneInput, aboutInput];
    let isValid = true;

    inputs.forEach((input) => {
      if (input.classList.contains('input-invalid')) {
        isValid = false;
      }
    });

    if (isValid) {
      sendData();
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Введите корректные данные.';
      errorMessage.style.display = 'block';
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 3000);
    }
  });
};
