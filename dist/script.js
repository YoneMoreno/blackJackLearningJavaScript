'use strict';

// Blackjack

var textArea = document.getElementById('text-area');
var newGameButton = document.getElementById('new-game-button');
var hitButton = document.getElementById('hit-button');
var stayButton = document.getElementById('stay-button');

var gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

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

var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
var values = ['As', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to BlackJack!!!!!!!!!!';
        return;
    }
    var dealerCardString = '';
    for (var i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    var playerCardString = '';
    for (var _i = 0; _i < playerCards.length; _i++) {
        playerCardString += getCardString(playerCards[_i]) + '\n';
    }

    updateScores();

    textArea.innerText = 'Dealer has:\n' + dealerCardString + '(score: ' + dealerScore + ')\n\n' + 'Player has:\n' + playerCardString + '(score: ' + playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += 'YOU WIN';
        } else {
            textArea.innerText += 'DEALER WINS';
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}
//# sourceMappingURL=script.js.map