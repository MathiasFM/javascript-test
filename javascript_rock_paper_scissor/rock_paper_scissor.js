function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function computerPlay() {
    let RPS = randomNum();
    if(RPS <= 33) {
        console.log("ROCK!");
    } else if(RPS <= 66) {
        console.log("PAPER!");
    } else {
        console.log("SCISSOR!");
    }
}


function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
