function showResults() {
    // Создание контейнера для результатов
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'results-container';

    // Заголовок
    const header = document.createElement('h2');
    header.textContent = 'Результаты первого раунда';
    resultsContainer.appendChild(header);

    // Поля с ответами и значками
    for (let i = 0; i < answers.length; i++) {
        const answerRow = document.createElement('div');
        answerRow.className = 'answer-row';

        const answerText = document.createElement('span');
        answerText.textContent = `Вопрос ${i + 1}: ${answers[i]}`; // Ваш ответ

        // Создание значка
        const icon = document.createElement('span');
        icon.className = 'result-icon';
        
         if (i <= 2) {
             icon.innerHTML = '✔️'; // Зелёная галочка
         } else {
             icon.innerHTML = '❌'; // Красный крестик
         }
        
        answerRow.appendChild(answerText);
        answerRow.appendChild(icon);
        resultsContainer.appendChild(answerRow);
    }
   // Создание кнопки
   const button = document.createElement('button');
   button.textContent = 'Продолжить'; // Текст кнопки
   button.className = 'continue-button'; // Класс для стилизации кнопки
   resultsContainer.appendChild(button);

   // Добавление контейнера на страницу
   document.body.appendChild(resultsContainer);

   // Запускаем анимацию
   requestAnimationFrame(() => {
       resultsContainer.classList.add('show'); // Добавляем класс для анимации
   });
}
