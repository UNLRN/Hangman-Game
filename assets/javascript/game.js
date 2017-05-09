(function () {

	const words = ['cat', 'dog', 'horse']

	let word

	let randomWord = arr => {
		const index = Math.floor(Math.random() * arr.length);
		return arr[index];
	};
			
	word = randomWord(words).split("");
	// console.log(word);
	for (let i=0; i < word.length; i++) {
		let el = document.createElement("INPUT");
		el.setAttribute("type", "text");
		el.setAttribute("answer", word[i])
		document.body.appendChild(el);
	};

	let inputel = document.getElementsByTagName("INPUT");

	for (let i=0; i < inputel.length; i++) {
		console.log(inputel[i].getAttribute("answer"))	
	}
	
	function getKey(e) {
		var x = event.which;
		x = (String.fromCharCode(x));
		for (let i=0; i < inputel.length; i++) {
			if (x === inputel[i].getAttribute("answer")) {
				inputel[i].value = x
				break
			};
		};
	};

	window.addEventListener("keypress", getKey);




}());