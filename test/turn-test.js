const chai = require('chai');
const expect = chai.expect
const {evaluateGuess} = require('../src/card')

describe ('turns', () => {
    var guess;
    beforeEach(() => {
        guess = 'potato';
    })
    it('should return correct if the guess is correct', () => {
        //setup
        const correctAnswer = 'potato';
        //execution
        const result = evaluateGuess(guess, correctAnswer)
        //assertion
        expect(result).to.equal('correct!')
    })
    it('should return incorrect if the guess is incorrect', () => {
        const correctAnswer = 'carrot';
        const result = evaluateGuess(guess, correctAnswer)
        expect(result).to.equal('incorrect!')
    })
})