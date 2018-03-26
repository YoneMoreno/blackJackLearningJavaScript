function checkForEndOfGame() {


    updateScores();

    if (gameOver) {
        while (dealerScore < playerScore
        && playerScore <= 21
        && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if (gameOver) {

        playerWon = playerScore > dealerScore;
    }
}

