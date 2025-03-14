let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;

    if (x===1) {
        return console.log("Rock");
    } else if (x===2) {
        return console.log("Paper");
    } else  {
        return console.log("Scissors");
    }
}

function getHumanChoice() {
    let askChoice = window.prompt("Rock, Paper, or Scissors ? ", "");

    if (askChoice === "Rock") {
        return alert("You chose " + askChoice);
    } else if (askChoice === "Paper") {
        return alert("You chose " + askChoice);
    } else if (askChoice === "Scissors") {
        return alert("You chose " + askChoice);
    } else {
        return alert("Invalid")
    }
}

getHumanChoice();

function playRound(humanChoice, computerChoice) {
    
}