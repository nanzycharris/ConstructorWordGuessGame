# ConstructorWordGuessGame
Javascript - Constructor Word Guess Game - CLI app

This is a comand-line input application that uses constructor functions.
This game is similar to other word guess games, with the exception that this one is run on the node terminal.
This application is able to receive input using the inquirer or prompt packages.
Please feel free to review the files in this repository. Inside you will find:
Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.  
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 
index.js: The file containing the logic for the course of the game, which depends on Word.js and it randomly selects a word and uses the Word constructor to store it, and it prompts the user for each guess and keeps track of the user's remaining guesses.

You can watch a demo of the finished application on the following link:
