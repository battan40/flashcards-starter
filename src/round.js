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

  takeTurn(guess) {
    this.turnCounter++
    let turn = new Turn (guess, this.currentCard);
    const userFeedback = turn.giveFeedback();
    if (userFeedback === 'CORRECT!') {
      this.correctGuesses++
    } else {
    this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck.cards[this.turnCounter];
    turn.card = this.currentCard;
    this.returnCurrentCard()
    return userFeedback;
  }

  calculatePercentCorrect() {
    let percentage = Math.round(this.correctGuesses /
       this.turnCounter * 100)
    return percentage;
  }
  endRound() {
    const endRoundPhrase = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    return endRoundPhrase;
  }
}
module.exports = Round;
