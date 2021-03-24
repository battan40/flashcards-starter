const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card1 = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');

    turn1 = new Turn('three', card1);
    turn2 = new Turn ('seven', card1);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    expect(turn1, turn2).to.be.an.instanceof(Turn);
  });

  it('should be able to store a user\'s guess', () => {
    expect(turn1.guess).to.equal('three');
  });

  it('should be able to store a card object', () => {
    expect(turn1.card).to.deep.equal(card1);
  });

  it('should be able to return a user\'s guess', () => {
    expect(turn1.returnGuess()).to.equal('three');
  });

  it('should be able to return a card', () => {
      expect(turn1.returnCard()).to.deep.equal(card1);
  });

  it('should be able to evaluate if the user\'s answer is correct', () => {
    expect(turn1.guess).to.deep.equal('three');
    expect(turn1.evaluateGuess()).to.deep.equal(true);
  })

  it('should be able to evaluate if the user\'s guess in incorrect', () => {
    expect(turn2.guess).to.deep.equal('seven');
    expect(turn2.evaluateGuess()).to.deep.equal(false);
  })

  it('should be able to give feedback to the user when their answers are correct', () => {
    expect(turn1.giveFeedback()).to.deep.equal('CORRECT!');
  })

  it('should be able to give alternative feedback to the user when their answers are incorrect', () => {
    expect(turn2.giveFeedback()).to.deep.equal('TRY AGAIN!');
  })
});
