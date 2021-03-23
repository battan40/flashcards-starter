const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');
    turn = new Turn('three', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store a user\'s guess', () => {
    expect(turn.guess).to.equal('three');
  });

  it('should be able to store a card object', () => {
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return a user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('three');
  });

  it('should be able to return a card', () => {
      expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to evaluate if the user\'s answer is correct', () => {
    expect(turn.evaluateGuess(turn.guess)).to.deep.equal(true);
  })

  it ('should be able to evaluate if the user\'s guess in incorrect', () => {
    expect(turn.evaluateGuess(this.guess)).to.deep.equal(false);
  })

  it 

});
