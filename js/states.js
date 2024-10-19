const GameStates = {
    MAIN_MENU: 'main_menu',
    WAITING_FOR_PLAYERS: 'waiting_for_players',
    PLAYING: 'playing',
    SHOW_RESULTS: 'show_results'
};

let currentGameState = GameStates.MAIN_MENU; // Изначальное состояние
