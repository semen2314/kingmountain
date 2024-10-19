let currentQuestionIndex = 0; // Индекс текущего вопроса
const answers = []; // Массив для хранения ответов

// Массив вопросов для раунда
const questions = [
    "Данную структуру может создать лишь один народ. Они живут в крови и помагают нашему иммунитету справляться с различными невзгодами. Структура, которую они создают - их секретное оружие против недругов. Что это за структура?",
    "Они образуются в организме для того, чтобы защитить его, но часто они настолько сильно воздействуют на тучные клетки, что человеку от этого только хуже. Кто ОНИ?",
    "Этот фермент ходит за ручку с ферментом, который связывет медь. Его еще назвали в честь греческого Бога скорости",
    "В норме человек хорошо приспособлен к усваиванию меди. Но вот когда ОН ломается, возникает болезнь Вильсона-Коновалова. Кто ОН?",
    "Солнце - это котлета?"
];

// Обработчик события ввода ответа
document.querySelector('.question-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Если нажата клавиша Enter
        const answer = this.value; // Получаем ответ
        answers[currentQuestionIndex] = answer; // Сохраняем ответ в массиве
        this.value = ''; // Очищаем поле ввода
        this.disabled = true; // Блокируем поле ввода
    }
});


// Функция для загрузки следующего вопроса
function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.querySelector('.question-container p').textContent = questions[currentQuestionIndex];
        document.querySelector('.question-input').disabled = false; // Разблокируем поле ввода
        StartTimer();
    } else {
        showResults(); // Показать результаты, если это последний вопрос
    }
}



// Функция для показа результатов
function showResults() {
    currentGameState = GameStates.SHOW_RESULTS;
    let resultText = "Ваши ответы:\n";
    answers.forEach((answer, index) => {
        resultText += `Вопрос ${index + 1}: ${answer}\n`;
    });
    alert(resultText); // Показать ответы в окне
}
