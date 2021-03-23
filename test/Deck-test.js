const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck ();
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of a Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to have an array of cards', () => {
    const card1 = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');
    const card2 = new Card(2, 'What is the Sirens true name', ['Angie', 'Inanna', 'Nik', 'Hannah'], 'Angie');
    const card3 = new Card(3, 'Sirens in their true form are what creatures?', ['Mermaids', 'Snakes', 'Birds'], 'birds');

    const deck = new Deck ([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', () => {
    const card1 = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');
    const card2 = new Card(2, 'What is the Sirens true name', ['Angie', 'Inanna', 'Nik', 'Hannah'], 'Angie');
    const card3 = new Card(3, 'Sirens in their true form are what creatures?', ['Mermaids', 'Snakes', 'Birds'], 'birds');

    const deck = new Deck ([card1, card2, card3]);

    expect(deck.countCardsInDeck()).to.deep.equal(3)
  })
});
