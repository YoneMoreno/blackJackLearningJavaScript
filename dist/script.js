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

var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
var values = ['As', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

function createDeck() {
    var deck = [];
    for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
            var card = {
                suit: suits[suitIndex],
                value: values[valueIndex]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getNextCard() {
    return deck.shift();
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to BlackJack!!!!!!!!!!';
        return;
    }
    for (var i = 0; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

function shuffleDeck(deck) {
    for (var i = 0; i < deck.length; i++) {
        var swapIndex = Math.trunc(Math.random() * deck.length);
        var randomCard = deck[swapIndex];
        var currentCard = deck[i];
        deck[swapIndex] = currentCard;
        deck[i] = randomCard;
    }
}
//# sourceMappingURL=script.js.map