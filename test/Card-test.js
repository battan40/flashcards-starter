const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(1, 'How many Sirens sing sailors to their end?', ['one', 'seven', 'three'], 'three');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('How many Sirens sing sailors to their end?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['one', 'seven', 'three']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('three');
  });
});
