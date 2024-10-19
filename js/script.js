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
let timer; // Переменная для хранения таймера
let timeLeft = 60; // Время в секундах (1 минута)

function StartTimer() {
    // Обновляем таймер каждую секунду
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            const timerElement = document.querySelector('.timer');
            timerElement.classList.remove('pulsing'); // Убираем класс пульсации при завершении времени
            alert("Время вышло!"); // Уведомление о завершении времени
        } else {
            const timerElement = document.querySelector('.timer');

            if (timeLeft < 10) {
                timerElement.classList.add('pulsing'); // Добавляем класс пульсации к тексту
            } else {
                timerElement.classList.remove('pulsing'); // Убираем класс, если время больше 10 секунд
            }

            timeLeft--;
            // Обновляем текст таймера на странице
            timerElement.textContent = formatTime(timeLeft);
        }
    }, 1000);
}



// Форматирование времени в MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Обновленный метод StartGame
function StartGame() {
    $('.waiting-container').fadeOut('slow', function() {
        $('.question-container').fadeIn('slow');
        $('.timer-container').fadeIn('slow');
        $('.round-container').fadeIn('slow');
        
        StartTimer(); // Запуск таймера
    });
}



// Обработчик события нажатия клавиши
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        StartGame();
    }
});

