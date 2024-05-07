const chai = require('chai');
const expect = chai.expect;
const {createCard, createDeck, countCards} = require('../src/card')

describe ('createDeck',() => {
    it('should add an array of cards to the deck', () => {
        const firstCard = createCard(1, "What is life", [1,42,7,'idk'], 42);
        const secondCard = createCard(2, "When will I finish this project?", ['wednesday','thursday','tuesday','never'],'wednesday');
        const thirdCard = createCard(4, "When will I be a wizard?", ['in 2 years','in 5 years','never','in 50 years'],'never');
        const deck = createDeck([firstCard,secondCard,thirdCard]);
        expect(deck).to.be.an('array').that.includes(thirdCard)
    })
})