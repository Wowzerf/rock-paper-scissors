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

