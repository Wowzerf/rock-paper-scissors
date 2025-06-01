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

function getHumanChoice() {
        let askChoice = prompt("Rock,Paper, or Scissors?");
        return alert(askChoice);
    }