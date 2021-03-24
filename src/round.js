class Round {
  constructor(pile) {
    this.deck = pile;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
    this.turnCounter = 0;

  }
}
module.exports = Round;
