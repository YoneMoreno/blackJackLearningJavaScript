'use strict';

var textArea = document.getElementById('text-area');
var newGameButton = document.getElementById('new-game-button');
var hitButton = document.getElementById('hit-button');
var stayButton = document.getElementById('stay-button');

var hideInGameButtons = function hideInGameButtons() {
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
};

newGameButton.addEventListener('click', function () {

    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function () {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function () {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});
//# sourceMappingURL=buttonLogic.js.map