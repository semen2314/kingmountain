// Обновленный метод StartGame
function StartGame() {
    $('.waiting-container').fadeOut('slow', function() {
        $('.question-container').fadeIn('slow');
        $('.timer-container').fadeIn('slow');
        $('.round-container').fadeIn('slow');
        const roundContainer = document.querySelector('.round-container');
        roundContainer.textContent = 'Раунд - ' + currentRound;
        const numberOfQuestion = document.querySelector('.question-container h3');
        numberOfQuestion.textContent = 'Вопрос - ' + 1;
        StartTimer(); // Запуск таймера
    });
}



// Обработчик события нажатия клавиши
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && currentGameState == GameStates.WAITING_FOR_PLAYERS) {
        StartGame();
        currentGameState = GameStates.PLAYING;
    }
});



