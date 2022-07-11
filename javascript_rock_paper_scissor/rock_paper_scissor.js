function randomNum() {
    return Math.floor(Math.random() * 100);
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

let playerScore = 0;
let computerScore = 0;
let gameError = 0;

//R>S S>P P>R
function playRound(playerSelection, computerSelection) {

    let playerSelectionCaseIn = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(computerSelection == playerSelectionCaseIn) {
        return `It's a Tie! Computer chose ${computerSelection}, and you also chose ${playerSelectionCaseIn}. Try again!`;
    } else if(computerSelection == "Rock" && playerSelectionCaseIn == "Scissor") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Paper" && playerSelectionCaseIn == "Rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(computerSelection == "Scissor" && playerSelectionCaseIn == "Paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelectionCaseIn}`;
    } else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") {
        gameError++;
        return `${playerSelectionCaseIn} is not accepted, please try again.`
    } else {
        playerScore++;
        return `You Win! ${playerSelectionCaseIn} beats ${computerSelection}`;
    }
}

let playerWinRound = ""
let tieRound = ""
//AND method: else if(playerSelectionCaseIn != "Rock" && playerSelectionCaseIn != "Paper" && playerSelectionCaseIn != "Scissor") 
//OR method: else if(!(playerSelectionCaseIn == "Rock" || playerSelectionCaseIn == "Paper" || playerSelectionCaseIn == "Scissor"))
//, `You Win! ${playerSelectionCaseIn} beats ${computerSelection}`

function game() {
    for (let i = 0; i < 50; i++) {
        const playerSelection = prompt('Choose "Rock", "Paper" or "Scissor"');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
        if(playerScore == 5 || computerScore == 5) {
            break;
        } else if(gameError > 0) {
            break;
        }
        
        
        
    }
    console.log("Your score is " + playerScore);
    console.log("The computers score is " + computerScore);
}
game()
