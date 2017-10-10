//Global scope
var computerChoices = ["warriors","cavaliers","lakers","spurs","knicks","celtics",
"thunder","bulls","rockets","raptors","heat","bucks",
"clippers","76ers","nets","pelicans","mavericks","wizards",
"blazers","kings","suns","pistons","pacers","hawks",
"timberwolves","nuggets","grizzlies","hornets","magic","jazz"];
var key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"1","2","3","4","5","6","7","8","9","0"];
var wins = 0;
var guesses = 7;
var allGuesses =[]; //this is all the guesses user inputs.
var misses = []; //wrong guesses user makes.
var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var answerTokens = answer.split("");
document.querySelector('#answer').innerHTML = generateUnderscore(answerTokens,allGuesses).join(" ");
document.querySelector('#wins').innerHTML = "Wins: " + wins;


//Generate underscores depending on the length of the answer//Initialize the match with underscore
function generateUnderscore(answerTokens, allGuesses) {
	var partialGuess = [];
	var isCorrect = false;
	for ( var i = 0; i < answerTokens.length; i++) {
		for ( var j = 0; j < allGuesses.length; j++) {
			if ( allGuesses[j] == answerTokens[i] ) {
				partialGuess.push(allGuesses[j]);
				isCorrect = true;
				break;
			}
		}
		if ( isCorrect ) {
			isCorrect = false;
		}
		else {
			partialGuess.push("_");
		}
	}
	return partialGuess;
}

//Replace the underscore with the letter and update guesses left and log in unmatched guesses
document.onkeyup = function(event) {
	var userGuess = event.key;
	var found = false;
		for ( var h = 0; h < allGuesses.length; h++ ) {
			if ( userGuess == allGuesses[h] ) {
				var found = true;
				alert("You have already guessed " + userGuess + "!");
			}
		}

		if (!found) {
			allGuesses.push(userGuess);
			document.querySelector('#usedGuesses').innerHTML = misses.join(", "); //log in incorrect guesses
			var isCorrect = false;
			for ( var k = 0; k < answerTokens.length; k++ ) {
				if ( userGuess == answerTokens[k] ) {
					isCorrect = true;
					break;
				}
			}
			if (!isCorrect) {
				misses.push(userGuess);
				guesses = guesses - 1;
				document.querySelector('#usedGuesses').innerHTML = misses.join(", "); //log in incorrect guesses
				document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
				if ( guesses == 0  ) {
					alert("The answer is " + answer + "!" + " Game Over!");
					guesses = 7;
					allGuesses =[]; //this is all the guesses user inputs.
					misses = []; //wrong guesses user makes.
					answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
					answerTokens = answer.split("");
					document.querySelector('#usedGuesses').innerHTML = misses;
					document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
					document.querySelector('#answer').innerHTML = generateUnderscore(answerTokens,allGuesses).join(" ");		
				}
			}
		else {
			document.querySelector('#answer').innerHTML = generateUnderscore(answerTokens,allGuesses).join(" ");
						//this block has to be executed no matter what so that you display the correct data on the user-interface

		}
			countUnderscores = 0;
			partialAnswer = generateUnderscore(answerTokens, allGuesses)
			for ( var z = 0; z < partialAnswer.length; z++) {
                if ( partialAnswer[z] == "_" ) {
                    countUnderscores = countUnderscores + 1;
				}
				if ( generateUnderscore(answerTokens, allGuesses)[z] == "_" ) {
                    countUnderscores = countUnderscores;
                
              		if ( countUnderscores == 0 ) {
                        alert("jjj");
                        
                        wins = wins + 1;
                        //guesses = 7;
                        //allGuesses = [];
                        //misses = [];
                        //answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                        //answerTokens = answer.split("");
                        //document.querySelector('#usedGuesses').innerHTML = misses;
                        //document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
                        //document.querySelector('#answer').innerHTML = generateUnderscore(answerTokens,allGuesses).join(" ");  
                        //document.querySelector('#wins').innerHTML = wins;	
                        
					
                    }
				}

			}
	}
}
	

		/*
		var countUnderscores = 0;
			for ( var z = 0; z < generateUnderscore(answerTokens, allGuesses).length; z++) {
				if ( generateUnderscore(answerTokens, allGuesses)[z] == "_" ) {
					countUnderscores = countUnderscores + 1;
					}
				else if ( countUnderscores == 0 ) {
					alert("You won! Congratulations!");
					wins++;
					guesses = 7;
					allGuesses = [];
					misses = [];
					answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
					answerTokens = answer.split("");
					document.querySelector('#usedGuesses').innerHTML = misses;
					document.querySelector('#guessesLeft').innerHTML = guesses; //update guesses remaining
					document.querySelector('#answer').innerHTML = generateUnderscore(answerTokens,allGuesses).join(" ");	
					document.querySelector('#wins').innerHTML = wins;
				}
			}
	}

}

			
	
/*
function reset(didWin) {
	if ( didWin == true ) {
		wins++;
	}   
}
*/