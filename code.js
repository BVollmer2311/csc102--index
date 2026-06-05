// This function takes a player name as a parameter and returns a personalized welcome message.
function createWelcomeMessage(name) {
    // Creates a message using the name entered by the user.
    return "Welcome, " + name + ". The machine has accepted your sacrifice.";
}

// This function runs the Quarks Casino game when the form is submitted.
function playQuarksCasino() {
    // Gets the value typed into the player name input box.
    let playerName = document.getElementById("playerName").value;

    // Gets the paragraph where validation messages will be displayed.
    let validationMessage = document.getElementById("validationMessage");

    // Gets the paragraph where the main game result will be displayed.
    let gameResult = document.getElementById("gameResult");

    // Gets the paragraph where the bonus result will be displayed.
    let bonusResult = document.getElementById("bonusResult");

    // Checks if the player left the name box empty.
    if (playerName === "") {
        // Shows a validation message on the webpage using innerHTML.
        validationMessage.innerHTML = "You must enter your name before playing.";

        // Clears the game result area.
        gameResult.innerHTML = "";

        // Clears the bonus result area.
        bonusResult.innerHTML = "";

        // Stops the form from refreshing the page.
        return false;
    }

    // Shows a welcome message using the function that takes a parameter.
    validationMessage.innerHTML = createWelcomeMessage(playerName);

    // Generates a random number from 1 to 10 for the first energy crystal.
    let crystalOne = Math.floor(Math.random() * 10) + 1;

    // Generates a random number from 1 to 10 for the second energy crystal.
    let crystalTwo = Math.floor(Math.random() * 10) + 1;

    // Adds the two random crystal values together.
    let totalPower = crystalOne + crystalTwo;

    // Creates an empty variable to hold the result message.
    let resultMessage = "";

    // Checks if the total power is exactly 13.
    if (totalPower === 13) {
        // Sets the losing message.
        resultMessage = "Crystal One: " + crystalOne + "<br>Crystal Two: " + crystalTwo + "<br>Total Power: " + totalPower + "<br>The machine cursed you. You lose.";
    }

    // Checks if both crystals match.
    else if (crystalOne === crystalTwo) {
        // Sets the winning message.
        resultMessage = "Crystal One: " + crystalOne + "<br>Crystal Two: " + crystalTwo + "<br>Total Power: " + totalPower + "<br>Double crystals! You win.";
    }

    // Checks if the total power is greater than 15.
    else if (totalPower > 15) {
        // Sets the jackpot message.
        resultMessage = "Crystal One: " + crystalOne + "<br>Crystal Two: " + crystalTwo + "<br>Total Power: " + totalPower + "<br>Power surge jackpot! You win big.";
    }

    // Runs if none of the winning or losing conditions are met.
    else {
        // Sets the push message.
        resultMessage = "Crystal One: " + crystalOne + "<br>Crystal Two: " + crystalTwo + "<br>Total Power: " + totalPower + "<br>You pushed. The casino keeps breathing.";
    }

    // Displays the game result on the webpage using innerHTML.
    gameResult.innerHTML = resultMessage;

    // Uses math to calculate a bonus score.
    let bonusScore = totalPower * 3;

    // Displays the bonus score on the webpage using innerHTML.
    bonusResult.innerHTML = "Bonus Score: " + bonusScore;

    // Stops the form from refreshing the page.
    return false;
}