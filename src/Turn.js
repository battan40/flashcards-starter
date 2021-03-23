class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess(guess) {
    if (guess !== this.card.correctAnswer) {
      return false;
    } else {
      return true;
    }
  }
  giveFeedback(evaluation) {
    if (!this.evaluateGuess === evaluation) {
      return 'TRY AGAIN!';
    } else {
      return 'CORRECT!'
    }
  }
}
module.exports = Turn;
