class Deck{
    createDeck() {
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
        this.deck = deck;
        return deck;
    }

    shuffleDeck() {
        for (let i = 0; i < deck.length; i++) {
            let swapIndex = Math.trunc(Math.random() * deck.length);
            let randomCard = deck[swapIndex];
            let currentCard = deck[i];
            deck[swapIndex] = currentCard;
            deck[i] = randomCard;
        }
    }
}