function createCard(id, question, answers, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}

function evaluateGuess(guess,correctAnswer) {
    if (guess === correctAnswer) {
        return `correct!`
    }
    else {
        return `incorrect!`
    }
}
function createDeck(cards) {
    let deck = []
    cards.forEach(card => {
        deck.push(card)
    })
    return deck;
}

function countCards(deck) {
    return deck.length;
}

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

function takeTurn(guess, round) {
    round.turns += 1;
    if (guess === round.currentCard.correctAnswer) {
       round.currentCard = round.deck[round.turns]
       return `Correct.`
    }
    else if (guess !== round.currentCard.correctAnswer) {
        round.incorrectGuesses.push(round.currentCard.id)
        round.currentCard = round.deck[round.turns]
        return `Incorrect.`
    }
}

function calculatePercentCorrect(round) {
    return Math.round(100 * (round.deck.length - round.incorrectGuesses.length) / round.deck.length)
}

function endRound(round) {
    const correctPercentage = calculatePercentCorrect(round)
    return `** Round over! ** You answered ${correctPercentage}% of the questions correctly!`
}

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}