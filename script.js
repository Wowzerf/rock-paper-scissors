let humanScore = 0;
let computerScore = 0;

//  Returns following string values for computer : rock, paper, scissors
function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3) + 1;

    if (randomizer === 1) {
        return console.log("rock");
    } else if (randomizer === 2) {
       return console.log("paper");
    } else {
       return console.log("scissors");
    }
}

// Returns alert of player input from prompt 
function getHumanChoice() {
        let askChoice = prompt("Rock,Paper, or Scissors?");
        return alert(askChoice);
    }

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
   if(humanChoice.toLowerCase() === "rock") {
    if(computerChoice === "paper") {
        alert("You lose! Paper beats Rock.");
        return console.log(`Computer Score : ${++computerScore}`);
    } else if(computerChoice === "scissors") {
        alert("You win! Rock beats Scissors");
        return console.log(`Human Score : ${++humanScore}`);
    } else {
        alert("It's a draw!");
    }
   } else if(humanChoice.toLowerCase() === "paper") {
        if(computerChoice === "rock") {
            alert("You win! Paper beats Rock.");
            return console.log(`Human Score : ${++humanScore}`);
        } else if(computerChoice === "scissors") {
            alert("You lose! Scissors beats Paper.");
            return console.log(`Computer Score : ${++computerScore}`);
        } else {
            alert("It's a draw!");
        }
   } else if (humanChoice.toLowercase === "scissors"()) {
    if(computerChoice === "rock") {
        alert("You Lose! Rock beats Paper.")
        return console.log(`Computer Score : ${computerScore}`);
    } else if(computerChoice === "paper") {
        alert("You win! Scissors beat Paper.")
    }
   }
}