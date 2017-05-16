/* jshint esversion: 6 */
let reset;
(function() {

	const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const words = ['nyancat', 'longcat', 'keyboardcat', 'limecat', 'seriouscat', 'ceilingcat', 'grumpycat'];
    // const words = ['nyancat'];
    let lettersInWord, numGuesses, inputElements;
    let guessedLetters = [];
    let correctGuesses = [];


    let randomWord = arr => {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };

    reset = () => {
        try {
            inputElements = document.getElementsByTagName("INPUT");
            for (var i = inputElements.length - 1; i >= 0; i--) {
                inputElements[i].remove();
            }
        }
        catch(err){
            console.log(err);
        }

        randomWord(words);

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

        let letters = document.getElementsByClassName("guessed-letter");
        for (var i = 0; i < letters.length; i++) {
            letters[i].style.backgroundColor = "#ccc";
            letters[i].style.color = "rgba(0, 0, 0, 0.87)";
        }

        guessedLetters = [];
        correctGuesses = [];

        let numGuesses = document.getElementById("guesses").innerHTML = 10;

    };

    reset();

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
                        reset();
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
