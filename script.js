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
            result = "You won"
    }
    console.log("You chose: " + player + " and the computer chose: " + computer)
    console.log(result)
    return result
}   

function playGame() {
    
    let playerWins = 0
    let computerWins = 0
    let whoWon;
    
    for (let i = 1; i <= 5; i++) {
        
        let humanChoice = (prompt("Type rock, paper or scissors: ")).toLowerCase() // thought it was not necessary to write a
        let computerChoice = getComputerChoice()         // whole new function for this                     
        console.log("Computer chose: " + computerChoice)
        let msg = playRound(humanChoice, computerChoice)
        try {
            if ("You" in msg) {
                playerWins += 1
            }
        } catch {
            computerWins += 1
        }
    }

    if (playerWins > computerWins) {
        whoWon = "You won the game!"
    } else {
        whoWon = "Computer won. Better luck next time."
    }
    return whoWon
}
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})