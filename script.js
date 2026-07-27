function getComputerChoice() {
    let num = Math.random()
    let choice;
    
    if (num >= 0 && num < 1/3) {
        choice = "rock"
    } else if (num >= 1/3 && num < 2/3) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    
    return choice
}

function playRound(player, computer) {  // for future Patrik - this function can be done in less code
                                        // by specifying e.g. if (player === "scissors" && computer === "paper")                
    let result;                         // then there would be only one else statement with the message "Computer won"                    
    if (player === computer) {
        result = "Draw"
    } else if (player === "scissors" && computer === "rock") {
            result = "You won"

    } else if (player === "paper" && computer === "rock") {
            result = "You won"

    } else if (player === "rock" && computer === "scissors") {
            result = "You won"

    } else {
            result = "Computer won"
    }
    
    playerChose.textContent = "You: " + player
    computerChose.textContent = "Computer: " + computer
    resultPrinted.textContent = result
    
    scores.appendChild(playerChose)
    scores.appendChild(computerChose)
    scores.appendChild(resultPrinted)

    roundTable.appendChild(scores)

    return result
}

function overallScores(choice) {
    if (playerWins < 5 && computerWins < 5) {
        const msg = playRound(choice, getComputerChoice())
        if (msg.includes("You")) {
                playerWins += 1
                playerScore.textContent = "Your score: " + playerWins
            } else if (msg.includes("Computer")) {
            computerWins += 1
            computerScore.textContent = "Opponent's score: " + computerWins
            }
        } else {

        }
}
const roundTable = document.getElementById("rounds")
const scores = document.createElement("div")
const playerChose = document.createElement("p")
const computerChose = document.createElement("p")
const resultPrinted = document.createElement("p")
const playerScore = document.getElementById("player")
const computerScore = document.getElementById("opponent")
const buttons = document.querySelectorAll("button")

let playerWins = 0
let computerWins = 0
buttons.forEach((button) => {
    button.addEventListener("click", () => overallScores(button.id))
})

if (playerWins > computerWins) {
    whoWon = "You won the game!"
} else {
    whoWon = "Computer won. Better luck next time."
}

console.log(playerWins)


