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

// Метод StartGame
function StartGame() {
    // Плавное исчезновение окна ожидания
    $('.waiting-container').fadeOut('slow', function() {
        // После исчезновения окна ожидания, плавно показать canvas
        $('#gameCanvas').fadeIn('slow', function() {
            // Запуск анимаций после появления канваса
            animateBlocks();
        });
    });
}

// Обработчик события нажатия клавиши
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        StartGame();
    }
});

// Начальные параметры анимации
let timerY = 10;
let questionRoundX = 210;
let questionScale = 1;

// Функция для анимации блоков
function animateBlocks() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Очистка канваса для обновления
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Анимация блока "Таймер"
    ctx.fillStyle = '#f0ad4e'; // Цвет, похожий на Bootstrap warning
    roundRect(ctx, 10, timerY, 180, 100, 10, true);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Таймер', 20, timerY + 40);
    timerY += Math.sin(Date.now() / 200) * 2;

    // Анимация блока "Раунд Вопрос"
    ctx.fillStyle = '#5bc0de'; // Цвет, похожий на Bootstrap info
    roundRect(ctx, questionRoundX, 10, 180, 100, 10, true);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Раунд Вопрос', questionRoundX + 10, 40);
    questionRoundX += 1;
    if (questionRoundX > canvas.width) questionRoundX = -200;

    // Анимация блока "Вопрос"
    const questionWidth = 180 * questionScale;
    const questionHeight = 100 * questionScale;
    const questionX = 410 + (180 - questionWidth) / 2;
    const questionY = 10 + (100 - questionHeight) / 2;
    ctx.fillStyle = '#d9534f'; // Цвет, похожий на Bootstrap danger
    roundRect(ctx, questionX, questionY, questionWidth, questionHeight, 10, true);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Вопрос', questionX + 10, questionY + 40);
    questionScale = 1 + 0.1 * Math.sin(Date.now() / 200);

    // Запрос на следующую анимацию
    requestAnimationFrame(animateBlocks);
}

// Функция для рисования прямоугольника с закругленными углами
function roundRect(ctx, x, y, width, height, radius, fill) {
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
}