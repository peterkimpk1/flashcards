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
module.exports = {
    createCard,
    evaluateGuess
}