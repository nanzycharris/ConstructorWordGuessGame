// Start by requiring prior constructor and inquirer
var Word = require("./word.js");
var inquirer = require("inquirer");

// Create a variable that holds the alphabet letters
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to guess
var Simpsons = [
    "homer",
    "flanders",
    "marge",
    "maggie",
    "bart",
    "moe",
    "milhouse",
    "krusty",
    "barney",
    "burns",
    "patty",
    "selma",
    "smithers",
];

// random loop for word to guess
var randomIndex = Math.floor(Math.random() * Simpsons.length);
var randomWord = Simpsons[randomIndex];

var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

// variable that sets the number of guesses to 10
var guessesLeft = 10;

function theLogic() {
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * Simpsons.length);
        var randomWord = Simpsons[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }
    var wordComplete = [];
    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose any letter from A to Z",
                name: "userinput",
            }
        ]).then(function (input) {
            if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                console.log("Please try a different letter \n");
                theLogic();
            } else {
                if (
                    incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === ""
                ) {
                    console.log("\nAlready guessed or no letter was typed\n");
                    theLogic();
                } else {
                    var wordCheckArray = [];
                    computerWord.userGuess(input.userinput);
                    computerWord.obArray.forEach(wordCheck);
                    if (wordCheckArray.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect\n");

                        incorrectLetters.push(input.userinput);
                        guessesLeft--;
                    } else {
                        console.log("\nCorrect\n");
                        correctLetters.push(input.userinput);
                    }
                    computerWord();

                    console.log("Guesses left: " + guessesLeft + "\n");
                    console.log("Letters guessed: " + incorrectLetters.join(" ") + "\n");

                    if (guessesLeft > 0) {
                        theLogic();
                    } else {
                        console.log("You have lost\n");
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed);
                    }
                }
            }
        });
    } else {
        console.log("You got it!\n")
    }
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
}

// function to allow user to restart the game
function restartGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to restart the game?",
            choices: ["Play again", "Exit"],
            name: "restart",
        }
    ]).then(function (input) {
        if (input.restart === "Play again") {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            theLogic();
        } else {
            return;
        }
    });
}

// call the function for game logic

theLogic();
