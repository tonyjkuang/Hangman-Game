var computerChoices = ["warriors","cavaliers","lakers","spurs","knicks","celtics",
"thunder","bulls","rockets","raptors","heat","bucks",
"clippers","76ers","nets","pelicans","mavericks","wizards",
"blazers","kings","suns","pistons","pacers","hawks",
"timberwolves","nuggets","grizzlies","hornets","magic","jazz"];
var guesses = 5;
var wins = 0;
var guessesLeft = 5;
var guessedLetters = [];
var displayedAnswer = [];
var letterToGuess = null;

var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");

// Show letters user input

document.onkeyup = function(event) {
	var letters = document.querySelector('#usedGuesses');
	var userGuess = event.key;
	var char = userGuess;
		letters.innerHTML = letters.innerHTML + " " + userGuess + ", ";	

//Generate underscores depending on the length of the answer
		function generateUnderscore() {
			var numberOfUnderscores = answer.length;
			var storeUnderscore = "";
			for ( var i = 0; i < numberOfUnderscores; i++) {
				storeUnderscore = storeUnderscore + "_" + " ";
			}
			document.querySelector('#answer').innerHTML = storeUnderscore;
		}
		generateUnderscore();

//Replace the underscore with the letter and update guesses left
		function fillInWordWithLetter(char) {
			for ( var k = 0; k < answer.length; k++) {
				if ( answer.charAt(k) == char) {
					displayedAnswer[k] = char;
					document.querySelector('#answer').innerHTML = displayedAnswer[k];
				}
				else {
					guessesLeft--;
					document.querySelector('#guessesLeft').innerHTML = "Number of guesses remained: " + guessesLeft;
				}
				if ( guessesLeft == 0) {
					alert(Game Over!);
				}
			}
		}
		fillInWordWithLetter(char);
}

//Each attempt by the user will decrease the number of guessLeft. And then alert the "Game Over" message.
//After the user finish the answer, the wins will go up. And change to the answer image.
//If "Game Over", then reset the game to 0 win.
//If user wins the game, then reset the game to 1+ win and continue the game.



var reset = function() {
  totalGuesses = 5;
  guessesLeft = 5;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

