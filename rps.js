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


function playRound(playerSelection, computerSelection) {

    // Create a string that contains the player's and computer's choices
    const choices = playerSelection + computerSelection;

    // Check through each possible choice combination
    // Declare a winner
    switch (choices) {
        default:
            console.log("Something went wrong.");
            break;

        case "rr":
        case "pp":
        case "ss":
            console.log("It's a draw!");
            break;
        
        case "rp":
            console.log("Paper beats rock. Computer wins!");
            break;
        
        case "rs":
            console.log("Rock beats scissors. Human wins!");
            break;
        
        case "pr":
            console.log("Paper beats rock. Human wins!");
            break;
        
        case "ps":
            console.log("Scissors beats paper. Computer wins!");
            break;
        
        case "sr":
            console.log("Rock beats scissors. Computer wins!");
            break;

        case "sp":
            console.log("Scissors beats paper. Human wins!");
            break;
    }
}

function game() {

    // Loop through gameplay 5 times
    for (let i = 0; i < 5; i++) {

        // Set variables for play selection for player and computer
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        // Run playRound and show results
        console.log(playRound(playerSelection, computerSelection));
    }
}