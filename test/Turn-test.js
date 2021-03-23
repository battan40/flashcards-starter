const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Card');

describe ('Turn', () => {
  let card, turn;

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

  it('should be able to store a users guess', () => {
    expect(turn.guess).to.equal('three');
  });


});
