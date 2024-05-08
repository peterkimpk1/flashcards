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



module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound,
}