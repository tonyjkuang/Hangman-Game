var computerChoices = ["warriors","cavaliers","lakers","spurs","knicks","celtics",
"thunder","bulls","rockets","raptors","heat","bucks",
"clippers","76ers","nets","pelicans","mavericks","wizards",
"blazers","kings","suns","pistons","pacers","hawks",
"timberwolves","nuggets","grizzlies","hornets","magic","jazz"];
var guesses = 5;
var wins = 0;
var guessesLeft = 5;
var guessedLetters = [];
var letterToGuess = null;

var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");

document.onkeyup = function(event) {
	var userGuess = event.key;
	var numberOfGuesses = userGuess.length;
	var storeGuesses = "";
	for ( var j = 0; j < userGuess.length; j++) {
		storeGuesses = storeGuesses + ", ";
	}
	document.querySelector('#usedGuesses').innerHTML = "Letters typed: " + storeGuesses;
}


function generateUnderscore() {
	var numberOfUnderscores = answer.length;
	var storeUnderscore = "";
	for ( var i = 0; i < numberOfUnderscores; i++) {
		storeUnderscore = storeUnderscore + "_" + " ";
	}
	document.querySelector('#answer').innerHTML = "Current Word: " + storeUnderscore;

}
generateUnderscore();



var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Number of guesses remained: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
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

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
	guessesLeft--;
  var userGuess = event.key;

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

	 for (var i =0; i < computerChoices.length; i++) {
	 	if (guessLeft > 0) {
	 		if (userGuess == computerChoices.charAt(0)) {
	 			document.querySelector('#answer').innerHTML = "Current Word: " + 
	 		}
	 		else if (userGuess == computerChoices.charAt(2)) {
	 			 
	 		}
	 	}
	 	if (guessedLetters.charAt(i) == computerChoices) {
	 		wins++;
	 		document.querySelector('#wins').innerHTML = "Wins: " + wins;
	 	}
	 	if (guessesLeft > 0){
	            if (userGuess == letterToGuess){
	                wins++;
	                
	                reset();
	            }
	        }else if(guessesLeft == 0){
	            // Then we will loss and we'll update the html to display the loss 
	            losses++;
	            document.querySelector('#losses').innerHTML = "Losses: " + losses;
	            alert("Sorry, you're not psychic, maybe try again?");
	            // Then we'll call the reset. 
	            reset();
	        }
	}