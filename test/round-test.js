const chai = require('chai')
const expect = chai.expect
const {createCard, createDeck, createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/card')

describe ('createRound', () => {
    var firstCard, secondCard, thirdCard, deck, round
    beforeEach(() => {
        firstCard = createCard(1, "What is life", [1,42,7,'idk'], 42);
        secondCard = createCard(2, "When will I finish this project?", ['wednesday','thursday','tuesday','never'],'wednesday');
        thirdCard = createCard(4, "When will I be a wizard?", ['in 2 years','in 5 years','never','in 50 years'],'never');
        deck = createDeck([firstCard,secondCard,thirdCard])
        round = createRound(deck)
    })
    it ('should create an object that holds deck, currentCard, turns, and incorrectGuesses properties.', () => {
        expect(round).to.include.all.keys('deck', 'currentCard', 'turns', 'incorrectGuesses')
    })
    it ('should hold an array of cards for deck', () => {
        expect(round.deck).to.equal(deck)
    })
    it ('should have default values for currentCard, turns and incorrectGuesses', () => {
        expect(round.currentCard).to.equal(deck[0])
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuesses).to.deep.equal([])
    }) 
})

