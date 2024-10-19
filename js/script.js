// Предустановленные логин и пароль
const validUsername = "user";
const validPassword = "password";

// Показать окно входа
document.querySelector('.login-container').style.display = 'block';

// Обработка формы
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановить отправку формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Проверка логина и пароля
    if (username === validUsername && password === validPassword) {
        // Скрыть окно входа и показать окно ожидания
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.waiting-container').style.display = 'block';
    } else {
        alert('Неверный логин или пароль'); // Сообщение об ошибке
    }
});

function StartGame() {
    // Плавное исчезновение окна ожидания
    $('.waiting-container').fadeOut('slow');
}

// Обработчик события нажатия клавиши
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        StartGame();
    }
});

