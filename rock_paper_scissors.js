// Define global variables to keep track of wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;

// Function to start the game
function startGame() {
    // Get the number of rounds from the user input
    let rounds = parseInt(document.getElementById('rounds').value);

    // Loop through each round
    for (let i = 0; i < rounds; i++) {
        // Prompt the user to enter their choice (r for Rock, p for Paper, s for Scissors)
        let userChoice = prompt("Enter 'r' for Rock, 'p' for Paper, or 's' for Scissors:");

        // Generate a random choice for the computer (0 for Rock, 1 for Paper, 2 for Scissors)
        let computerChoice = Math.floor(Math.random() * 3);

        // Compare the user's choice with the computer's choice
        // Update wins, losses, and ties based on the game outcome
        if (userChoice === 'r' && computerChoice === 2 || 
            userChoice === 'p' && computerChoice === 0 || 
            userChoice === 's' && computerChoice === 1) {
            wins++;
            alert("You won this round!");
        } else if (userChoice === 'r' && computerChoice === 1 || 
                   userChoice === 'p' && computerChoice === 2 || 
                   userChoice === 's' && computerChoice === 0) {
            losses++;
            alert("You lost this round!");
        } else {
            ties++;
            alert("It's a tie!");
        }
    }

    // Display the final results to the user
    alert(`You won ${wins} time(s), lost ${losses} time(s), and tied ${ties} time(s).`);
}
function startGame() {
    let rounds = parseInt(document.getElementById('rounds').value);

    for (let i = 0; i < rounds; i++) {
        let userChoice = prompt("Enter 'r' for Rock, 'p' for Paper, or 's' for Scissors:");

        // Validate user input
        if (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
            alert("Invalid input! Please enter 'r' for Rock, 'p' for Paper, or 's' for Scissors.");
            continue; // Skip to the next iteration of the loop
        }

        // Proceed with game logic for valid user input
        let computerChoice = Math.floor(Math.random() * 3); 
        // Game logic and outcome comparison
        // ...
    }

    // Display final results
    // ...
}
