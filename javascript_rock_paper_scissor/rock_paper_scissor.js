function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function computerPlay() {
    //RPS = rock, paper, scissor
    let computerRPS = randomNum();
    if(computerRPS <= 33) {
        return "ROCK"
    } else if(computerRPS <= 66) {
        return "PAPER"
    } else {
        return "SCISSOR"
    }
    
    
}


function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        console.log("Tie");
    } else if(computerSelection !== playerSelection) {
        console.log("You lose");
    } else {
        console.log("SCISSOR");
    }
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
