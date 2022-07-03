const buttons = document.querySelectorAll('.choice-buttons');
const playerIcon = document.querySelector('#player-icon');
const compIcon = document.querySelector('#comp-icon');
const replay = document.querySelector('#replay');

const winSuffix = [" Good guess.", " You got lucky.", " Bet you can't do that again.", " You got me.", " Lucky guess.", " Look at you go."];

const loseSuffix = [" I got lucky.", " That was easy.", " You're so predictable.", " Are you even trying?", " Maybe I can read your mind.", " I won this round."];

const tie = ["It's a draw.", "Looks the same to me.", "Great minds think alike.", "Looks like we tied.", "Let's try that again.", "One more time.", "Tie.", "Draw.", "That's a tie right there."];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const plays = ['r', 'p', 's'];
    const randomCompChoice = Math.floor(Math.random() * plays.length);
    
    return plays[randomCompChoice];
}

function hideButtons() {
    buttons.forEach(button => {
        button.classList.add("hidden");
    });
}

function playRound(playerSelection, computerSelection) {
    const status = document.querySelector('#status');
    let randomTie = tie[Math.floor(Math.random() * tie.length)];
    let randomWinSuffix = winSuffix[Math.floor(Math.random() * winSuffix.length)];
    let randomLoseSuffix = loseSuffix[Math.floor(Math.random() * loseSuffix.length)];

    let result;

    switch (playerSelection + computerSelection) {
        default:
            result = "Something went wrong 😖";
            break;

        case "rr":
            playerIcon.innerText = '👊';
            compIcon.innerText = '👊';
            result = randomTie;
            break;

        case "pp":
            playerIcon.innerText = '✋';
            compIcon.innerText = '✋';
            result = randomTie;
            break;

        case "ss":
            playerIcon.innerText = '✌️';
            compIcon.innerText = '✌️';
            result = randomTie;
            break;
        
        case "rp":
            computerScore++;
            playerIcon.innerText = '👊';
            compIcon.innerText = '✋';
            result = "Paper beats rock." + randomLoseSuffix;
            break;
        
        case "rs":
            playerScore++;
            playerIcon.innerText = '👊';
            compIcon.innerText = '✌️';
            result = "Rock beats scissors." + randomWinSuffix;
            break;
        
        case "pr":
            playerScore++;
            playerIcon.innerText = '✋';
            compIcon.innerText = '👊';
            result = "Paper beats rock." + randomWinSuffix;
            break;
        
        case "ps":
            computerScore++;
            playerIcon.innerText = '✋';
            compIcon.innerText = '✌️';
            result = "Scissors beats paper." + randomLoseSuffix;
            break;
        
        case "sr":
            computerScore++;
            playerIcon.innerText = '✌️';
            compIcon.innerText = '👊';
            result = "Rock beats scissors." + randomLoseSuffix;
            break;

        case "sp":
            playerScore++;
            playerIcon.innerText = '✌️';
            compIcon.innerText = '✋';
            result = "Scissors beats paper." + randomWinSuffix;
            break;
    }

    switch (true) {
        case (playerScore === 5):
            status.classList.add("win-game");
            result = "You won.";
            replay.classList.add("end-game");
            replay.classList.remove("hidden");
            hideButtons();
            break;

        case (computerScore === 5):
            status.classList.add("lose-game");
            result = "You lost.";
            replay.classList.add("end-game");
            replay.classList.remove("hidden");
            hideButtons();
            break;
            
        case (playerScore === 4 && computerScore === 4):
            result = "It all comes down to this. Choose wisely.";
            break;

        case (playerScore === 4):
            result = "Just one more to go.";
            break;

        case (computerScore === 4):
            result = "Don't mess up. I'm only one guess away.";
            break;
    }
    document.querySelector('#player').innerText = playerScore;
    document.querySelector('#computer').innerText = computerScore;
    document.querySelector('#status').innerText = result;
}

function game(e) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = e.target.value;
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    }
}

buttons.forEach(button => button.addEventListener('click', game));