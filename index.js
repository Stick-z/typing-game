const p = document.getElementById("paragraph");
const past = document.getElementById("pastWord");
const word = document.getElementById("word");
const next = document.getElementById("nextWord");
const input = document.getElementById("input");

var words = ["This", "is", "a", "test", "sentence."];
var score = 0;
var mistakes = 0;
word.innerHTML = words[0];
next.innerHTML = words[1];

function checkUndefined(value) {
	if (value == undefined) {
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

input.addEventListener("keypress", (e) => {
	if (e.key == " ") {
		if (score != words.length - 1) {
			console.log("checking...");
			check();
		} else {
			console.log("complete!");
			input.value = "";
			input.readOnly = true;
			p.innerHTML = "Nice";
		}
	}
});
