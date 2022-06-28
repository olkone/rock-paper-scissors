function computerPlay() {

    // Make an array of play choices (r=rock, p=paper, s=scissors)
    const plays = ['r', 'p', 's'];

    // Choose a random number in the length of the above array
    const randomIndex = Math.floor(Math.random() * plays.length);
    
    // Index into the array with the random index number
    return plays[randomIndex];
}

function playerPlay() {

    let playerChoice;
    let inArray;

    // Changed to "do while" loop since the loop has to execute at least once

    do {
        playerChoice = prompt("Rock, Paper, or Scissors?: ").toLowerCase().charAt(0);

        // Validates player response
        if (['r', 'p', 's'].includes(playerChoice) === true) {
            inArray = true;
        } else {
            console.log("Invalid input. Try again.")
            inArray = false;
        }
    } while (inArray === false);

    return playerChoice;

}

// Initialize scores to 0 points each
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    // Check through each possible choice combination
    // Declare a round winner and allot a point
    switch (playerSelection + computerSelection) {
        default:
            console.log("Something went wrong.");
            break;

        case "rr":
        case "pp":
        case "ss":
            console.log("It's a draw!");
            break;
        
        case "rp":
            computerScore++;
            console.log("Paper beats rock. Computer wins!");
            break;
        
        case "rs":
            playerScore++;
            console.log("Rock beats scissors. Player wins!");
            break;
        
        case "pr":
            playerScore++;
            console.log("Paper beats rock. Player wins!");
            break;
        
        case "ps":
            computerScore++;
            console.log("Scissors beats paper. Computer wins!");
            break;
        
        case "sr":
            computerScore++;
            console.log("Rock beats scissors. Computer wins!");
            break;

        case "sp":
            playerScore++;
            console.log("Scissors beats paper. Player wins!");
            break;
    }
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
}

function game() {

    // Reset scores to 0 for each new game
    playerScore = 0;
    computerScore = 0;

    // Loop through gameplay 5 times
    for (let i = 0; i < 5; i++) {

        // Set variables for play selection for player and computer
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        // Run playRound and show results
        console.log(playRound(playerSelection, computerSelection));
    }

    // Compare scores and declare win/tie
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}