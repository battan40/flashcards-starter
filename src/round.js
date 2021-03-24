const Turn = require("./Turn");

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
    let turn = new Turn (guess, this.currentCard);
    this.turnCounter++
    this.currentCard = this.deck.cards[this.turnCounter];
    if (turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard)
      return turn.giveFeedback();
    } else if (!turn.evaluateGuess()) {
      this.correctGuesses++
      return turn.giveFeedback();
    }
  }
}
module.exports = Round;
