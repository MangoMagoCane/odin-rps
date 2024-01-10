function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}


function getPlayerChoice() {
    let choice = prompt('Choose "rock" "paper" or "scissors"');
    return choice.toLowerCase();
}


function playRound(playerSelection, computerSelection) {    
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "Winner!";
            } else if (computerSelection === "paper") {
                return "Loser!";
            }
        }
        if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "Winner!";
            } else if (computerSelection === "scissors") {
                return "Loser!";
            }
        }
        if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                return "Winner!";
            } else if (computerSelection === "rock") {
                return "Loser!";
            }
        }
        
        return "Tie!";
}

for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log(playRound(playerChoice, computerChoice));
}