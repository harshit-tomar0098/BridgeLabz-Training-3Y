// Q7. Smart Guessing Game
// The secret number is random. Change userGuess to test the different outcomes.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

console.log(`Secret number (for testing): ${secretNumber}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too high");
    } else if (userGuess < secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too low");
    } else {
        console.log("Guess must be between 1 and 50.");
    }
}
