/*
arrays
	list of words
	letters in word
	letters guessed


variables
	number of guesses





*/





(function () {

	const words = ['cat', 'dog', 'horse'];
	let lettersInWord, numGuesses, inputElements;
	let guessedLetters = [];

	let randomWord = arr => {
		const index = Math.floor(Math.random() * arr.length);
		return arr[index];
	};
	

	lettersInWord = randomWord(words).split("");
	// console.log(word);
	for (let i=0; i < lettersInWord.length; i++) {
		let el = document.createElement("INPUT");
		el.setAttribute("type", "text");
		el.setAttribute("answer", lettersInWord[i])
		document.body.appendChild(el);
	};

	

	inputElements = document.getElementsByTagName("INPUT");

	let alreadyGuessed = (letter) => {
		if (guessedLetters.indexOf(letter) > -1) {
			return true;
		} else {
			return false;
		};
	};

	let correctGuess = (letter) => {
		if (lettersInWord.indexOf(letter) > -1) {
			return true;
		} else {
			return false;
		};
	};

	let getKey = e => {
		let x = event.which;
		x = (String.fromCharCode(x));
		if (alreadyGuessed(x)) {
			alert("You already Guessed this letter");
		} else {
			if (lettersInWord.indexOf(x) > -1) {
				inputElements[lettersInWord.indexOf(x)].value = x;
				guessedLetters.push(x);
			} else {
				guessedLetters.push(x);
				numGuesses = document.getElementById("guesses").innerHTML
				if (parseInt(numGuesses) < 0) {
					alert("You Lose")
				} else {
					numGuesses -= 1
					document.getElementById("guesses").innerHTML = numGuesses.toString();
				};
			};
		};
	};

	window.addEventListener("keypress", getKey);




}());