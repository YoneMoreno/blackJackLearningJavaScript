'use strict';

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
//# sourceMappingURL=showStatus.js.map