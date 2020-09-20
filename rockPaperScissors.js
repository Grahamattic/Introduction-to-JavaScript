/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPaperScissors(userChoice) {

    // Get a choice from the user. A new prompt displays when you refresh the browser.
    var userChoice = window.prompt("Enter your choice: rock, paper, or scissors");

    // Define the computer's choice.
    var computerChoice = Math.round(Math.random());

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }


    // Compare the computer's choice to the user's choice.
    if (computerChoice === userChoice) {
        console.log(`You chose ${userChoice}. The computer's choice is also ${computerChoice}. It's a tie.`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is also ${computerChoice}. It's a tie.`);
    }


    else if ((computerChoice === "rock") && (userChoice === "paper")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
    }


    else if ((computerChoice === "rock") && (userChoice === "scissors")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You lost.`);
        
        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You lost.`);
    }


    else if ((computerChoice === "paper") && (userChoice === "rock")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
    }


    else if ((computerChoice === "paper") && (userChoice === "scissors")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You won!`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You won!`);
    }


    else if ((computerChoice === "scissors") && (userChoice === "rock")) { 
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You won!`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You won!`);
    }


    else if ((computerChoice === "scissors") && (userChoice === "paper")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You lost.`);

        // Display results at index.html
        document.write(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You lost.`);
    }
}

rockPaperScissors();



