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
    if (event.code === 'Space' && currentGameState == GameStates.WAITING_FOR_PLAYERS) {
        StartGame();
        currentGameState = GameStates.PLAYING;
    }
});



