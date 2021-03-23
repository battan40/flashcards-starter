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

  it.skip('should be a function', () => {
    const card = new Card();
    expect(card).to.be.a('function');
  });
  
});
