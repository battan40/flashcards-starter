const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');
    card2 = new Card(2, 'What is the Sirens true name', ['Angie', 'Inanna', 'Nik', 'Hannah'], 'Angie');
    card3 = new Card(3, 'Sirens in their true form are what creatures?', ['Mermaids', 'Snakes', 'Birds'], 'birds');
    deck = new Deck ([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(round).to.be.an.instanceof(Round);
  });
  
});
