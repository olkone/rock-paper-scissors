function computerPlay() {

    // Make an array of play choices (r=rock, p=paper, s=scissors)
    const plays = ['r', 'p', 's'];

    // Choose a random number in the length of the above array
    const randomIndex = Math.floor(Math.random() * plays.length);
    
    // Index into the array with the random index number
    return plays[randomIndex];
}

function playerPlay() {

    // Initialize variables
    let playerChoice;
    let inArray = false;

    // Loop through player response prompt until the first letter of the input string is either 'r', 'p', or 's'
    while (inArray === false) {
    
    // Prompt player for input; make it all lowercase and get only the first character
    playerChoice = prompt("Rock, Paper, or Scissors?: ").toLowerCase().charAt(0);

    // Validate whether first letter of the player's input is in the array
    // If so, the while-loop ends
    // If not, keep prompting the player
    if (['r', 'p', 's'].includes(playerChoice) === true) {
        inArray = true;
    } else {
        inArray = false;
    }

    }

    // return the player's choice after validation
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