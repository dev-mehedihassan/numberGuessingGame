const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const resetGame = document.getElementById("resetGame");

let randomNumber;
let attempts;

// Start a new game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsText.innerText = attempts;
    message.innerText = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuess.disabled = false;
}

// Guess the number
submitGuess.addEventListener("click", function() {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100 || guessInput.value === "") {
        message.innerText = "Please enter a valid number between 1 and 100.";
        return;
    }
    attempts++;
    attemptsText.innerText = attempts;

    if (userGuess === randomNumber) {
        message.innerText = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        guessInput.disabled = true;
        submitGuess.disabled = true;
    } else if (userGuess < randomNumber) {
        message.innerText = "Too low! Try a higher number.";
    } else {
        message.innerText = "Too high! Try a lower number.";
    }
});

// Reset the game
resetGame.addEventListener("click", function() {
    startGame();
});

// Start the first game
startGame();