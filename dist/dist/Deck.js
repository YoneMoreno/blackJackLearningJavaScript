"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck() {
        _classCallCheck(this, Deck);
    }

    _createClass(Deck, [{
        key: "createDeck",
        value: function createDeck() {
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
            this.deck = deck;
            return deck;
        }
    }, {
        key: "shuffleDeck",
        value: function shuffleDeck() {
            for (var i = 0; i < deck.length; i++) {
                var swapIndex = Math.trunc(Math.random() * deck.length);
                var randomCard = deck[swapIndex];
                var currentCard = deck[i];
                deck[swapIndex] = currentCard;
                deck[i] = randomCard;
            }
        }
    }]);

    return Deck;
}();
//# sourceMappingURL=Deck.js.map