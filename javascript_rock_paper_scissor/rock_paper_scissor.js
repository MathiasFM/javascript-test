function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function computerPlay() {
    //RPS = rock, paper, scissor
    let computerRPS = randomNum();
    if(computerRPS <= 33) {
        return "Rock"
    } else if(computerRPS <= 66) {
        return "Paper"
    } else {
        return "Scissor"
    }
    
    
}

//R>S S>P P>R
function playRound(playerSelection, computerSelection) {

    let playerSelectionCaseIn = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelectionCaseIn);

    if(computerSelection === playerSelectionCaseIn) {
        console.log(`Tie computer chose: ${computerSelection} You chose: ${playerSelectionCaseIn}`);
    } else if(computerSelection === "Rock" && playerSelectionCaseIn === "Scissor") {
        console.log(`You lose ${computerSelection} beats ${playerSelectionCaseIn}`);
    } else if(computerSelection === "Paper" && playerSelectionCaseIn === "Rock") {
        console.log(`You lose ${computerSelection} beats ${playerSelectionCaseIn}`);
    } else if(computerSelection === "Scissor" && playerSelectionCaseIn === "Paper") {
        console.log(`You lose ${computerSelection} beats ${playerSelectionCaseIn}`);
    } else if(!(playerSelectionCaseIn == "Rock" || playerSelectionCaseIn == "Paper" || playerSelectionCaseIn == "Scissor")) {
        console.log(`${playerSelectionCaseIn} is not accepted, please try again.`);
    } else {
        console.log(`You win Player ${playerSelectionCaseIn} beats Computer ${computerSelection}`);
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
