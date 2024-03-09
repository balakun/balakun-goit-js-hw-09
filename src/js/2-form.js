// Отримуємо посилання на форму
const form = document.querySelector('.feedback-form');

// Перевірка, чи є дані в локальному сховищі
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  // Заповнюємо поля форми, якщо є збережені дані
  form.email.value = savedData.email;
  form.message.value = savedData.message;
}

// Прослуховуємо події input на формі
form.addEventListener('input', event => {
  // Записуємо дані форми у локальне сховище
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Прослуховуємо подію submit на формі
form.addEventListener('submit', event => {
  event.preventDefault(); // Забороняємо стандартну поведінку форми
  // Отримуємо дані з форми
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  // Перевіряємо, чи всі поля заповнені
  if (email && message) {
    // Виводимо дані у консоль
    console.log({ email, message });
    // Очищаємо локальне сховище
    localStorage.removeItem('feedback-form-state');
    // Очищаємо поля форми
    form.reset();
  } else {
    alert('Please fill in all fields.'); // Повідомлення про невалідність форми
  }
});
