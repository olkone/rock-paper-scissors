function computerPlay() {
    const plays = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * plays.length);
    
    let compChoice = plays[randomIndex];

    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    const playerIcon = document.querySelector('#player-icon');
    const compIcon = document.querySelector('#comp-icon');
    const winner = document.querySelector('#winner p');
    const refresh = document.querySelector('#refresh');

    const tie = ["It's a draw.", "Looks the same to me.", "Great minds think alike.", "Looks like we tied.", " Let's try that again.", " One more time."];

    let randomTie = tie[Math.floor(Math.random() * tie.length)];

    const winSuffix = [" Good guess.", " You got lucky.", " Bet you can't do that again.", " You got me.", " Lucky guess.", " Look at you go."];

    let randomWinSuffix = winSuffix[Math.floor(Math.random() * winSuffix.length)];

    const loseSuffix = [" I got lucky.", " That was easy.", " You're so predictable.", " Are you even trying?", " Maybe I can read your mind."];

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
            result = "You won."
            refresh.classList.remove("hidden");
            break;
        case (computerScore === 5):
            result = "You lost."
            refresh.classList.remove("hidden");
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

let playerScore = 0;
let computerScore = 0;

function game(e) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = e.target.value;
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    } 
}

const buttons = document.querySelectorAll('.choice-buttons');
buttons.forEach(button => button.addEventListener('click', game));
