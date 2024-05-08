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
    console.log(`** Round over! ** You answered ${correctPercentage}% of the questions correctly!`)
    return `** Round over! ** You answered ${correctPercentage}% of the questions correctly!`
}

module.exports = {
    takeTurn,
    calculatePercentCorrect,
    endRound
}