function computerPlay() {
    const plays = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * plays.length);
    
    let compChoice = plays[randomIndex];

    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    const playerIcon = document.querySelector('#player-icon');
    const compIcon = document.querySelector('#comp-icon');

    let result;

    switch (playerSelection + computerSelection) {
        default:
            result = "Something went wrong 😖";
            break;

        case "rr":
            playerIcon.innerText = '👊';
            compIcon.innerText = '👊';
            result = "It's a draw!";
            break;

        case "pp":
            playerIcon.innerText = '✋';
            compIcon.innerText = '✋';
            result = "It's a draw!";
            break;

        case "ss":
            playerIcon.innerText = '✌️';
            compIcon.innerText = '✌️';
            result = "It's a draw!";
            break;
        
        case "rp":
            computerScore++;
            playerIcon.innerText = '👊';
            compIcon.innerText = '✋';
            result = "Paper beats rock. Computer wins!";
            break;
        
        case "rs":
            playerScore++;
            playerIcon.innerText = '👊';
            compIcon.innerText = '✌️';
            result = "Rock beats scissors. Player wins!";
            break;
        
        case "pr":
            playerScore++;
            playerIcon.innerText = '✋';
            compIcon.innerText = '👊';
            result = "Paper beats rock. Player wins!";
            break;
        
        case "ps":
            computerScore++;
            playerIcon.innerText = '✋';
            compIcon.innerText = '✌️';
            result = "Scissors beats paper. Computer wins!";
            break;
        
        case "sr":
            computerScore++;
            playerIcon.innerText = '✌️';
            compIcon.innerText = '👊';
            result = "Rock beats scissors. Computer wins!";
            break;

        case "sp":
            playerScore++;
            playerIcon.innerText = '✌️';
            compIcon.innerText = '✋';
            result = "Scissors beats paper. Player wins!";
            break;
    }

    document.querySelector('#player').innerText = playerScore;
    document.querySelector('#computer').innerText = computerScore;
    document.querySelector('#status').innerText = result;

}

let playerScore = 0;
let computerScore = 0;

function game(e) {

    const winner = document.querySelector('#winner p');
    const refresh = document.querySelector('#refresh');

    if (playerScore < 5 && computerScore < 5) {

        let playerSelection = e.target.value;
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    } 
    
    if (playerScore > computerScore && playerScore === 5) {
        winner.innerText = "PLAYER WINS";
        refresh.classList.remove("hidden");

    } else if (computerScore > playerScore && computerScore === 5) {
        winner.innerText = "COMPUTER WINS";
        refresh.classList.remove("hidden");
    }
}

const buttons = document.querySelectorAll('.choice-buttons');
buttons.forEach(button => button.addEventListener('click', game));
