"use strict";

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

function shuffleDeck(deck) {
    for (var i = 0; i < deck.length; i++) {
        var swapIndex = Math.trunc(Math.random() * deck.length);
        var randomCard = deck[swapIndex];
        deck[swapIndex] = deck[i];
        deck[i] = randomCard;
    }
}
//# sourceMappingURL=deck.js.map