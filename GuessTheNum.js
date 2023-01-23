function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let recursiveAsyncRealdLine = function () {
        readline.question('Guess the number (0-100): ', number => {

            guess = Number(number);

            if (guess <= 100 && guess >= 0) {

                if (guess == computerGuess) {
                    console.log("You guess it!");
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log("Too Low!");
                    recursiveAsyncRealdLine();
                } else if (guess > computerGuess) {
                    console.log("Too High!");
                    recursiveAsyncRealdLine();
                } else {
                    console.log("Invalid input! Try again...");
                    recursiveAsyncRealdLine();
                }
            }

        });

    }
    recursiveAsyncRealdLine();
}
guessANumber();


/* Add Difficulty

You can add logic for difficulty, so the player can have only a few tries to guess the number.

Restart the Game

You can automatically restart the game after it is finished (or ask the player to play again).

Additional Ideas

· You can add levels so whenever the player guesses the number, the range between the minimum and maximum number gets bigger, e. g. Level 1 (1 - 100), Level 2 (1-200), etc.

· Can you add anything else to your code based on your ideas? */

