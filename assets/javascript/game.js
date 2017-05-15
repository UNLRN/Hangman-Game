/* jshint esversion: 6 */

(function() {

	const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // const words = ['nyancat', 'longcat', 'keyboardcat', 'limecat', 'seriouscat', 'ceilingcat', 'grumpycat'];
    const words = ['nyancat'];
    let lettersInWord, numGuesses, inputElements;
    let guessedLetters = [];
    let correctGuesses = [];

    let randomWord = arr => {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };


    lettersInWord = randomWord(words).split("");
    let elGameWord = document.getElementById("game-word");
    for (let i = 0; i < lettersInWord.length; i++) {
        let el = document.createElement("INPUT");
        el.setAttribute("type", "text");
        el.setAttribute("class", "form-control");
        el.setAttribute("answer", lettersInWord[i]);
        el.readOnly = true;
        elGameWord.appendChild(el);
    }

    inputElements = document.getElementsByTagName("INPUT");

    let alreadyGuessed = (letter) => {
        if (guessedLetters.indexOf(letter) > -1) {
            return true;
        } else {
            return false;
        }
    };

    let correctGuess = (letter) => {
        if (lettersInWord.indexOf(letter) > -1) {
            return true;
        } else {
            return false;
        }
    };

    let getKey = e => {
        let x = event.which;
        x = (String.fromCharCode(x));
        if (keys.includes(x)) {
	        if (alreadyGuessed(x)) {
	            alert("You already Guessed this letter");
	        } else {
	            if (correctGuess(x)) {
            		for (let i = 0; i < inputElements.length; i++) {
            			if (inputElements[i].getAttribute("answer") === x)
            			{
            				inputElements[i].value = x;
            				correctGuesses.push(x);
            			}
            		}
                	let el = document.getElementById(x);
                	el.setAttribute("style", "background-color: green; color: white;");
                	guessedLetters.push(x);
                	console.log(correctGuesses.length, lettersInWord.length)
                	if (correctGuesses.length === lettersInWord.length) {
                    	alert("You Win");
                	}
	            } else {
	                guessedLetters.push(x);
	                numGuesses = document.getElementById("guesses").innerHTML;
	                if (parseInt(numGuesses) === 0) {
	                    alert("You Lose");
	                } else {
	                    numGuesses -= 1;
	                    document.getElementById("guesses").innerHTML = numGuesses.toString();
	                    let el = document.getElementById(x);
	                    el.setAttribute("style", "background-color: red; color: white");
	                }
	            }
	        }
	    } else {
	    	alert("You can only choose letters!");
	    }
    };

    window.addEventListener("keypress", getKey);
}());
