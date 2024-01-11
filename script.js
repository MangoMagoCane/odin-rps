let playerChoice = "";
let wins = 0;
let losses = 0;

const displayPlayerScore = document.querySelector("#pScore");
const displayComputerScore = document.querySelector("#cScore");

function UpdateScore(roundResult) {
    if (roundResult === "win") {
        wins += 1;
    } else if (roundResult === "lose") {
        losses += 1;
    }

    displayPlayerScore.innerText = `Player: ${wins}`
    displayComputerScore.innerText = `Computer: ${losses}`
}

const choices = document.querySelectorAll("#selectionContainer > button");
choices.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
    });
});


const roundButton = document.querySelector("#startRound");
roundButton.addEventListener("click", () => {
    if (playerChoice != "") {
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice, getComputerChoice());
        UpdateScore(result);

        playerChoice = "";
    }
});


function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {  
    if (playerSelection === "rock") {
        var winLoseAgainst = ["scissors", "paper"];
    } else if (playerSelection === "paper") {
        var winLoseAgainst = ["rock", "scissors"];
    } else if (playerSelection === "scissors") {
        var winLoseAgainst = ["paper", "rock"]; 
    }

    if (computerSelection === winLoseAgainst[0]) {
        return "win";
    } else if (computerSelection === winLoseAgainst[1]) {
        return "lose";
    } else {
        return "tie";
    }        
}

UpdateScore();