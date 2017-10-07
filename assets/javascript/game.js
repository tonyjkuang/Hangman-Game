var computerChoices = ["warriors","cavaliers","lakers","spurs","knicks","celtics",
"thunder","bulls","rockets","raptors","heat","bucks",
"clippers","76ers","nets","pelicans","mavericks","wizards",
"blazers","kings","suns","pistons","pacers","hawks",
"timberwolves","nuggets","grizzlies","hornets","magic","jazz"];
var key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"1","2","3","4","5","6","7","8","9","0"];
var guesses = 7;
var wins = 0;
var chosenLetters =[];
var misses = [];
var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var answerTokens = answer.split("");
var storeUnderscore = generateUnderscore(answer);
var guessMatches = [];

//Generate underscores depending on the length of the answer//Initialize the match with underscore
		function generateUnderscore(answer) {
			var numberOfUnderscores = answerTokens.length;
			var storeUnderscore = [];
			for ( var i = 0; i < numberOfUnderscores; i++) {
				storeUnderscore.push("_"); 	
			}
			document.querySelector('#answer').innerHTML = storeUnderscore.join(" ");
			return storeUnderscore;
		}

//Replace the underscore with the letter and update guesses left and log in unmatched guesses
document.onkeyup = function(event) {
	var userGuess = event.key;
	var found = false;
		for ( var h = 0; h < answerTokens.length; h++ ) {
			if ( userGuess == answerTokens[h] ) {
				var found = true;
				guessMatches[h] = answerTokens[h];
				document.querySelector('#answer').innerHTML = guessMatches.join(" "); //replace the underscore with the right guesses
				document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
			}
		}

        if (!found) {
            misses.push(userGuess);
            guesses = guesses - 1;
            document.querySelector('#usedGuesses').innerHTML = misses + ", "; //log in incorrect guesses
            document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
        }
			
	
		if ( guesses == 0 ) {
			document.querySelector('#answer').innerHTML = answerTokens.join(" ");
			alert("Game Over!");
		}

		if ( numberOfUnderscores == 0 ) {
			document.querySelector('#wins').innerHTML = wins++;
			//change the answer image
			alert("You win!");
		}
		return;
	}

function reset() {
    document.getElementById('#btn').innerHTML = window.location.reload();
}




