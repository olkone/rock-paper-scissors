
const pScore = document.createElement('p');
const cScore = document.createElement('p');
const roundResult = document.createElement('p');
const pWin = document.createElement('h2');
const cWin = document.createElement('h2');

function computerPlay() {

    // Make an array of play choices (r=rock, p=paper, s=scissors)
    const plays = ['r', 'p', 's'];

    // Choose a random number in the length of the above array
    const randomIndex = Math.floor(Math.random() * plays.length);
    
    // Index into the array with the random index number
    return plays[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const status = document.querySelector('#status');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    let result;

    // Check through each possible choice combination
    // Declare a round winner and allot a point
    switch (playerSelection + computerSelection) {
        default:
            result = "Something went wrong.";
            break;

        case "rr":
        case "pp":
        case "ss":
            result = "It's a draw!";
            break;
        
        case "rp":
            computerScore++;
            result = "Paper beats rock. Computer wins!";
            break;
        
        case "rs":
            playerScore++;
            result = "Rock beats scissors. Player wins!";
            break;
        
        case "pr":
            playerScore++;
            result = "Paper beats rock. Player wins!";
            break;
        
        case "ps":
            computerScore++;
            result = "Scissors beats paper. Computer wins!";
            break;
        
        case "sr":
            computerScore++;
            result = "Rock beats scissors. Computer wins!";
            break;

        case "sp":
            playerScore++;
            result = "Scissors beats paper. Player wins!";
            break;
    }
    
    roundResult.textContent = result;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    player.appendChild(pScore);
    computer.appendChild(cScore);
    status.appendChild(roundResult);
}

let playerScore = 0;
let computerScore = 0;

function game(e) {
    const winner = document.querySelector('#winner');
    pWin.textContent = "Player Wins!!!!!"
    cWin.textContent = "Computer Wins!!!!!"

    if (playerScore < 5 && computerScore < 5) {

        let playerSelection = e.target.value;
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    } 
    
    if (playerScore > computerScore && playerScore === 5) {
        winner.appendChild(pWin);
    } else if (computerScore > playerScore && computerScore === 5) {
        winner.appendChild(cWin);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));
