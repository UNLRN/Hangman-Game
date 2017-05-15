(function() {

    const words = ['cat', 'dog', 'horse'];
    let lettersInWord, numGuesses, inputElements;
    let guessedLetters = [];
    let correctGuesses = [];

    let randomWord = arr => {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };


    lettersInWord = randomWord(words).split("");
    let elGameWord = document.getElementById("game-word")
    for (let i = 0; i < lettersInWord.length; i++) {
        let el = document.createElement("INPUT");
        el.setAttribute("type", "text");
        el.setAttribute("class", "form-control");
        el.setAttribute("answer", lettersInWord[i])
        elGameWord.appendChild(el);
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
            if (correctGuess(x)) {
                inputElements[lettersInWord.indexOf(x)].value = x;
                let el = document.getElementById(x)
                el.setAttribute("style", "background-color: green; color: white;")
                guessedLetters.push(x);
                correctGuesses.push(x);
                if (lettersInWord.length === correctGuesses.length) {
                    alert("You Win");
                }
            } else {
                guessedLetters.push(x);
                numGuesses = document.getElementById("guesses").innerHTML;
                if (parseInt(numGuesses) === 0) {
                    alert("You Lose")
                } else {
                    numGuesses -= 1
                    document.getElementById("guesses").innerHTML = numGuesses.toString();
                    let el = document.getElementById(x);
                    el.setAttribute("style", "background-color: red; color: white")
                };
            };
        };
    };

    window.addEventListener("keypress", getKey);
}());
