var computerChoices = ["warriors","cavaliers","lakers","spurs","knicks","celtics",
"thunder","bulls","rockets","raptors","heat","bucks",
"clippers","76ers","nets","pelicans","mavericks","wizards",
"blazers","kings","suns","pistons","pacers","hawks",
"timberwolves","nuggets","grizzlies","hornets","magic","jazz"];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
'v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
var useGuess = [];
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
		for ( var a = 0; a < letters.length; a++) {
			if ( userGuess == letters[a] ) {
			letters.innerHTML = letters.innerHTML + " " + userGuess + ", ";	    
		}
	}
}

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

//Replace the underscore with the letter

var char = userGuess;
function fillInWordWithLetter(char) {
	for ( var k = 0; k < answer.length; k++) {
		if ( answer.charAt(k) == char) {
			displayedAnswer[k] = char;
		}
		document.querySelector('#answer').innerHTML = displayedAnswer[k];
	}
}



var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Number of guesses remained: " + guessesLeft;
};


var updateGuessesSoFar = function() {
  document.querySelector('#usedGuesses').innerHTML = "Letters typed: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 5;
  guessesLeft = 5;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

