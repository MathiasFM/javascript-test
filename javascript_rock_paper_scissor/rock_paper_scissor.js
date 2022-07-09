function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}
let playerScore = 0;
let computerScore = 0;
let tie = 0;
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
        return tieRound, `It's a Tie! Computer chose ${computerSelection}, and you also chose ${playerSelectionCaseIn}. Try again!`;
    } else if(computerSelection == "Rock" && playerSelectionCaseIn == "Scissor") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Paper" && playerSelectionCaseIn == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Scissor" && playerSelectionCaseIn == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") {
        return tieRound, `${playerSelectionCaseIn} is not accepted, please try again.`
    } else {
        return playerWinRound, `You Win! ${playerSelectionCaseIn} beats ${computerSelection}`;
    }
}

let playerWinRound = "You win"
let tieRound = "tie"
//AND method: else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") 
//OR method: else if(!(playerSelectionCaseIn == "Rock" || playerSelectionCaseIn == "Paper" || playerSelectionCaseIn == "Scissor"))
//, `You Win! ${playerSelectionCaseIn} beats ${computerSelection}`

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(gameScore(result))
        console.log(tie);
        console.log("Your score is " + playerScore);
        console.log("The computers score is " + computerScore);
        console.log(playRound(playerSelection, computerSelection));
        
        
    }
}

console.log(game())
function gameScore(result) {
    if(result == playerWinRound) {
        playerScore++;
    } else if(result == tieRound) {
        tie;
    } else {
        computerScore++;
    }
}
