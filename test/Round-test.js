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
    expect(Round).to.be.a('function');
  });

  it('should instantiate the Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', () => {
    expect(round.deck).to.deep.equal(deck)
  });

  it('should track correct guesses and start with zero correct guesses', () => {
    expect(round.correctGuesses).to.deep.equal(0);
  });

  it('should be able to store the incorrect number of guesses', () => {
    expect(round.incorrectGuesses.length).to.deep.equal(0);
  });

  it('should have a turn counter', () => {
    expect(round.turnCounter).to.deep.equal(0);
  });

  it('should know what the current card in play is', () => {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should have a way of keeping track of the current card while the round is being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it('should update the turn count', () => {
    round.takeATurn('guess');
    round.takeATurn('guess');
    round.takeATurn('guess');

    expect(round.turnCounter).to.deep.equal(3);
  });



});
