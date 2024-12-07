document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorContainer = document.getElementById('error-messages');

    // registrationForm.addEventListener('submit', (event) => {
    //     event.preventDefault(); // Отменяем стандартную отправку формы
    //
    //     // Очищаем контейнер с ошибками перед каждой проверкой
    //     errorContainer.innerHTML = '';
    //
    //     // Валидируем поля
    //     let errors = [];
    //
    //     if (usernameInput.value.trim() === '') {
    //         errors.push('Введите имя пользователя.');
    //     }
    //
    //     if (emailInput.value.trim() === '') {
    //         errors.push('Введите email.');
    //     } else if (!validateEmail(emailInput.value)) {
    //         errors.push('Введите корректный email.');
    //     }
    //
    //     if (passwordInput.value.trim() === '') {
    //         errors.push('Введите пароль.');
    //     }
    //
    //     if (confirmPasswordInput.value.trim() === '') {
    //         errors.push('Подтвердите пароль.');
    //     }
    //
    //     if (passwordInput.value !== confirmPasswordInput.value) {
    //         errors.push('Пароли не совпадают.');
    //     }
    //
    //     // Если есть ошибки, выводим их и прерываем отправку
    //     if (errors.length > 0) {
    //         errors.forEach((error) => {
    //             const errorItem = document.createElement('div');
    //             errorItem.className = 'error-item';
    //             errorItem.textContent = error;
    //             errorContainer.appendChild(errorItem);
    //         });
    //     } else {
    //         // Если ошибок нет, можно отправить данные
    //         console.log('Регистрация прошла успешно');
    //         // Здесь можно добавить код для отправки данных на сервер
    //     }
    // });
    //
    // // Функция для проверки валидности email
    // function validateEmail(email) {
    //     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return re.test(email);
    // }
});
