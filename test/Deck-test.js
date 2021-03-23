const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Deck', () => {
  let deck;

  beforeEach(() => {
    let deck = new Deck ();
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });
});
