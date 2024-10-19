let timer; // Переменная для хранения таймера
let timeLeft = 60; // Время в секундах (1 минута)

function StartTimer() {
    // Обновляем таймер каждую секунду
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            const timerElement = document.querySelector('.timer');
            timerElement.classList.remove('pulsing'); // Убираем класс пульсации при завершении времени
            
            // Переход к следующему вопросу
            currentQuestionIndex++; // Переходим к следующему вопросу
            loadNextQuestion(); // Загружаем следующий вопрос
            timeLeft = 60; // Сброс таймера
            timerElement.textContent = formatTime(timeLeft); // Обновляем отображение таймера
        } else {
            const timerElement = document.querySelector('.timer');

            if (timeLeft < 11) {
                timerElement.classList.add('pulsing'); // Добавляем класс пульсации к тексту
            } else {
                timerElement.classList.remove('pulsing'); // Убираем класс, если время больше 10 секунд
            }

            timeLeft -= 20;
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