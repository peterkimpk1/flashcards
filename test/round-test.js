const chai = require('chai')
const expect = chai.expect
const {createCard, createDeck, createRound,} = require('../src/card')
const {takeTurn, calculatePercentCorrect, endRound} = require('../src/round')

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

describe ('takeTurn', () => {
    var firstCard, secondCard, thirdCard, deck, round
    beforeEach(() => {
        firstCard = createCard(1, "What is life", ['1','42','7','idk'], '42');
        secondCard = createCard(2, "When will I finish this project?", ['wednesday','thursday','tuesday','never'],'wednesday');
        thirdCard = createCard(4, "When will I be a wizard?", ['in 2 years','in 5 years','never','in 50 years'],'never');
        deck = createDeck([firstCard,secondCard,thirdCard])
        round = createRound(deck)
    })
    it ('should update the turns count when a guess is made', () => {
        takeTurn('1', round);
        expect(round.turns).to.equal(1)
    })
    it ('should change the current card when a guess is made', () => {
        takeTurn('1', round);
        expect(round.currentCard).to.deep.equal(secondCard)
        takeTurn('wednesday', round);
        expect(round.currentCard).to.deep.equal(thirdCard)
    })
    it ('should store the card\'s id if a guess was incorrect', () => {
        takeTurn('1', round);
        expect(round.incorrectGuesses[0]).to.equal(1)
    })
    it ('should give the correct feedback if the guess was incorrect', () => {
        const guess = takeTurn('1', round);
        expect(guess).to.equal('Incorrect.')
    })
    it ('should give the correct feedback if the guess was correct', () => {
        const guess = takeTurn('42', round)
        expect (guess).to.equal('Correct.')
    })
})

describe('calculatePercentCorrect, endRound', () => {
    var firstCard, secondCard, thirdCard, deck, round
    beforeEach(() => {
        firstCard = createCard(1, "What is life", ['1','42','7','idk'], '42');
        secondCard = createCard(2, "When will I finish this project?", ['wednesday','thursday','tuesday','never'],'wednesday');
        thirdCard = createCard(4, "When will I be a wizard?", ['in 2 years','in 5 years','never','in 50 years'],'never');
        deck = createDeck([firstCard,secondCard,thirdCard])
        round = createRound(deck)
    })
    it('should calculate and return the percentage of correct guesses', () => {
        takeTurn('42', round);
        takeTurn('thursday', round);
        takeTurn('in 50 years', round);
        const correctPercentage = calculatePercentCorrect(round);
        expect (correctPercentage).to.equal(33)
    })
    it('should print that the round is over when the user has gone through the whole deck', () => {
        takeTurn('1', round);
        takeTurn('thursday', round);
        takeTurn('in 50 years', round);
        const correctPercentage = calculatePercentCorrect(round);
        const roundOverMessage = endRound(round);
        expect (roundOverMessage).to.equal(`** Round over! ** You answered ${correctPercentage}% of the questions correctly!`)
    })
})

