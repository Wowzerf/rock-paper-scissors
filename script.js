let humanScore = 0;
let computerScore = 0;

//  Returns following string values for computer : rock, paper, scissors
function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3) + 1;

    if (randomizer === 1) {
        return "rock";
    } else if (randomizer === 2) {
       return "paper";
    } else {
       return "scissors";
    }
}

// Returns player input from prompt 
function getHumanChoice() {
        let askChoice = prompt("Rock,Paper, or Scissors?");
        return askChoice;
    }

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
   if(humanChoice.toLowerCase() === "rock") {
    if(computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        return console.log(`Computer Score : ${++computerScore}`);
    } else if(computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return console.log(`Human Score : ${++humanScore}`);
    } else {
        console.log("It's a draw!");
    }
   } else if(humanChoice.toLowerCase() === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            return console.log(`Human Score : ${++humanScore}`);
        } else if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            return console.log(`Computer Score : ${++computerScore}`);
        } else {
            console.log("It's a draw!");
        }
   } else if(humanChoice.toLowerCase() === "scissors") {
    if(computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors.");
        return console.log(`Computer Score : ${++computerScore}`);
    } else if(computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        return console.log(`Human Score : ${++humanScore}`);
    } else {
        console.log("It's a draw!");
    }
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame {
    
}