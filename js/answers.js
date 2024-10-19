let currentQuestionIndex = 0; // Индекс текущего вопроса
const answers = []; // Массив для хранения ответов

const question = [
    [
       "Данную структуру может создать лишь один народ. Они живут в крови и помагают нашему иммунитету справляться с различными невзгодами. Структура, которую они создают - их секретное оружие против недругов. Что это за структура?",
    "Они образуются в организме для того, чтобы защитить его, но часто они настолько сильно воздействуют на тучные клетки, что человеку от этого только хуже. Кто ОНИ?",
    "Этот фермент ходит за ручку с ферментом, который связывет медь. Его еще назвали в честь греческого Бога скорости",
    "В норме человек хорошо приспособлен к усваиванию меди. Но вот когда ОН ломается, возникает болезнь Вильсона-Коновалова. Кто ОН?",
    "Солнце - это котлета?"
    ],
    [
        "Вопрос 1 раунда 2?",
        "Вопрос 2 раунда 2?",
        "Вопрос 3 раунда 2?",
        "Вопрос 4 раунда 2?",
        "Вопрос 5 раунда 2?"
    ],
    // Добавьте больше раундов по мере необходимости
];

let currentRound = 1; // Переменная для отслеживания текущего раунда
// Обработчик события ввода ответа
document.querySelector('.question-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Если нажата клавиша Enter
        const answer = this.value; // Получаем ответ
        answers[currentQuestionIndex] = answer; // Сохраняем ответ в массиве
        this.value = ''; // Очищаем поле ввода
        this.disabled = true; // Блокируем поле ввода
    }
});

function nextRount(){
    
const resultsContainer = document.querySelector('.results-container');
    if (resultsContainer) {
        resultsContainer.style.display = 'none'; // Или используйте resultsContainer.classList.add('hidden');
    }
currentRound++;
currentQuestionIndex = 0;
const numberOfQuestion = document.querySelector('.question-container h3');
        numberOfQuestion.textContent = 'Вопрос - ' + 1;
document.querySelector('.question-container p').textContent = question[currentRound - 1][currentQuestionIndex];
document.querySelector('.question-input').disabled = false; // Разблокируем поле ввода
StartTimer();
const roundContainer = document.querySelector('.round-container');
    roundContainer.textContent = 'Раунд - ' + currentRound;
}

// Функция для загрузки следующего вопроса
function loadNextQuestion() {
    if (currentQuestionIndex < question[currentRound - 1].length) {
        document.querySelector('.question-container p').textContent = question[currentRound - 1][currentQuestionIndex];
        document.querySelector('.question-input').disabled = false; // Разблокируем поле ввода
        const numberOfQuestion = document.querySelector('.question-container h3');
        numberOfQuestion.textContent = 'Вопрос - ' + (currentQuestionIndex + 1);
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
