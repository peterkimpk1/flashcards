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
    round.currentCard = round.deck[round.turns]
    if (guess === round.currentCard.correctAnswer) {
       return `Correct.`
    }
    else {
        round.incorrectGuesses.push(round.deck[round.turns-1].id)
        return `Incorrect.`
    }
}

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound,
    takeTurn
}