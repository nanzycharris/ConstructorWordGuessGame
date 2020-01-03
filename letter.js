// This is our first file. We start by creating constructor for the function called "letter"
function Letter(value) {
    this.letter = value;
    this.guessed = false;
    this.toString = function () {
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}
// remember to export constructor 
module.exports = Letter;
