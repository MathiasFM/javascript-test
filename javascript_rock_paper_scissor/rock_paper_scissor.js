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

    if(computerSelection == playerSelectionCaseIn) {
        return `It's a Tie! Computer chose ${computerSelection}, and you also chose ${playerSelectionCaseIn}. Try again!`;
    } else if(computerSelection == "Rock" && playerSelectionCaseIn == "Scissor") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Paper" && playerSelectionCaseIn == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Scissor" && playerSelectionCaseIn == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") {
        return `${playerSelectionCaseIn} is not accepted, please try again.`
    } else {
        return `You Win! ${playerSelectionCaseIn} beats ${computerSelection}`;
    }
}

const playerSelection = "PapEr";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound( playerSelection, computerSelection));
    }
}
console.log(game())

//AND method: else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") 
//OR method: else if(!(playerSelectionCaseIn == "Rock" || playerSelectionCaseIn == "Paper" || playerSelectionCaseIn == "Scissor"))


