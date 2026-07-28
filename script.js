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

function playRound(player, computer) {  
                                                 
    let result;                   
    if (player === computer) {
        result = "Draw"
    } else if (player === "scissors" && computer === "paper") {
            result = "You won the round."

    } else if (player === "paper" && computer === "rock") {
            result = "You won the round."

    } else if (player === "rock" && computer === "scissors") {
            result = "You won the round"

    } else {
            result = "Computer won the round."
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
    const msg = playRound(choice, getComputerChoice())
    if (msg.includes("You")) {
            playerWins += 1
            playerScore.textContent = "Your score: " + playerWins
    } else if (msg.includes("Computer")) {
        computerWins += 1
        computerScore.textContent = "Opponent's score: " + computerWins
    }

    if (playerWins === 5 || computerWins === 5) {
        announceWinner()
    }
}

function gameStart() {
    
    rockBtn.textContent = "Rock"
    paperBtn.textContent = "Paper"
    scissorsBtn.textContent = "Scissors"
    
    selection.appendChild(rockBtn)
    selection.appendChild(paperBtn)
    selection.appendChild(scissorsBtn)

    playerScore.textContent = "Your score: 0"
    computerScore.textContent = "Computer score: 0"

    const scoreDiv = document.getElementById("scores")
    scoreDiv.appendChild(playerScore)
    scoreDiv.appendChild(computerScore)

}

function announceWinner() {
    if (playerWins > computerWins) {
        whoWon.textContent = "You won the game!"
    } else {
        whoWon.textContent = "Computer won. Better luck next time."
    }
    restartBtn.textContent = "Try again"
    const endState = document.getElementById("end")
    endState.appendChild(whoWon)
    endState.appendChild(restartBtn)
    restartBtn.addEventListener("click", () => {location.reload()})
}

const restartBtn = document.createElement("button")
const selection = document.getElementById("selection")
const rockBtn = document.createElement("button")
const paperBtn = document.createElement("button")
const scissorsBtn = document.createElement("button")
rockBtn.id = "rock"
paperBtn.id = "paper"
scissorsBtn.id = "scissors"

const playerScore = document.createElement("h3")
const computerScore = document.createElement("h3")

const roundTable = document.getElementById("rounds")
const scores = document.createElement("div")
const playerChose = document.createElement("p")
const computerChose = document.createElement("p")
const resultPrinted = document.createElement("p")
const buttons = [];
buttons.push(rockBtn)
buttons.push(paperBtn)
buttons.push(scissorsBtn)
const startBtn = document.getElementById("start")
const whoWon = document.createElement("h1")

startBtn.addEventListener("click", () => gameStart())

let playerWins = 0
let computerWins = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => overallScores(button.id))
})

console.log(playerWins)


