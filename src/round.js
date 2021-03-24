const Turn = require("./Turn");
const Card = require("./Card");

class Round {
  constructor(pile) {
    this.deck = pile;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
    this.turnCounter = 0;
    this.currentCard = this.deck.cards[0];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeATurn(guess) {
    let turn = new Turn ('guess', this.currentCard);
    this.turnCounter++
  }
}
module.exports = Round;
