const p = document.getElementById("paragraph");
const past = document.getElementById("pastWord");
const word = document.getElementById("word");
const next = document.getElementById("nextWord");
const input = document.getElementById("input");

/*

            Variable and list declaration

*/

var words = ["This", "is", "a", "test", "sentence."];
var score = 0;
var mistakes = 0;
var startTime = 0;
word.innerHTML = words[0];
next.innerHTML = words[1];

/*

            Custom Functions

*/

function complete() {
	console.log("complete!");
	input.value = "";
	input.readOnly = true;
	p.innerHTML = "Nice";
	console.log(words.length / ((Date.now() - startTime) / 60000));
}

function checkUndefined(value) {
	if (value == undefined) {
		console.log("yes");
		return "";
	} else {
		return value;
	}
}

function correctUpdate() {
	input.value = "";
	score++;
	past.innerHTML = words[score - 1].fontcolor("green");
	word.innerHTML = words[score];
	next.innerHTML = checkUndefined(words[score + 1]);
	if (score == words.length) {
		complete();
	}
}

function check() {
	if (input.value.replace(/\s+/g, "") == words[score]) {
		console.log("Correct.");
		correctUpdate();
	} else {
		console.log("wrong");
		input.value = "";
		word.innerHTML = words[score].fontcolor("red");
	}
}

/*

         Main

*/

input.addEventListener("keypress", (e) => {
	if (startTime == 0) {
		startTime = Date.now();
	}
	if (e.key == " ") {
		check();
	}
});
