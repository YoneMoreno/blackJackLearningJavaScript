// Blackjack


let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

let gameStarted = false,
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


newGameButton.addEventListener('click', function() {

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
})

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['As', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'
]



function createDeck() {
    let deck = [];
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            let card = {
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
    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }

}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIndex = Math.trunc(Math.random() * deck.length);
        let randomCard = deck[swapIndex];
        let currentCard = deck[i];
        deck[swapIndex] = currentCard;
        deck[i] = randomCard;
    }
}