class Deck {
  constructor(stack) {
    this.cards = stack;
  }
  countCardsInDeck() {
    return this.cards.length;
  }
}
module.exports = Deck;
