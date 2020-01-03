// Start by requiring letter.js 
var Letter = require("./letter.js");

function Word(answer) {
    this.obArray = [];
    // create a for loop for the letter variable from our letter constructor and which will push the letter to the object array
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.obArray.push(letter);
    }
    // log function which displays the data on the terminal
    this.log = function () {
        var answerLog = "";
        for (var i = 0; i < this.obArray.length; i++) {
            answerLog += this.obArray[i] + " ";
        }
        // console log with a line break
        console.log(answerLog + "\n =================================\n")
    }
    this.userGuess = function (input) {
        for (var i = 0; i < this.obArray.length; i++) {
            this.obArray[i].guess(input);
        }
    }
}

// remember to export Constructor
module.exports = Word;
