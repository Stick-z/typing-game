/*
	document.getElementById('screen').style.display = "none"
*/

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

/*
			Custom Methods
*/

function split(str) {
	tempArr = new Array();
	if (str.search(" ") != -1) {
		tempArr = str.split(" ");
		if (str.search("\n") != -1) {
			str = tempArr;
			tempArr = [];
			for (i of str) {
				i = i.split("\n");
				console.log(i);
				tempArr.push(...i);
			}
		}
	} else if (str.search("\n")) {
		tempArr = str.split("\n");
	}
	return tempArr;
}

function mainMenu() {
	document.getElementById("screen").style.display = "none";
	document.getElementById("gamearea").style.display = "none";
	document.getElementById("endScreen").style.display = "none";
	document.getElementById("menu").style.display = "";
	words = ["This", "is", "a", "test", "sentence."];
	score = 0;
	mistakes = 0;
	startTime = 0;
	past.innerHTML = "";
}

function game() {
	document.getElementById("screen").style.display = "";
	document.getElementById("gamearea").style.display = "";
	document.getElementById("endScreen").style.display = "none";
	document.getElementById("menu").style.display = "none";
	textAreaValue = document.querySelector("textarea").value;
	if (textAreaValue != "") {
		words = split(textAreaValue);
	}
	word.innerHTML = words[0];
	next.innerHTML = checkUndefined(words[1]);
	input.focus();
}

function chars(arr) {
	let temp = 0;
	for (i of arr) {
		temp += i.length;
	}
	return temp;
}

function complete() {
	document.getElementById("screen").style.display = "none";
	document.getElementById("gamearea").style.display = "none";
	document.getElementById("endScreen").style.display = "";
	console.log("complete!");
	input.value = "";
	// .prettier-ignore
	document.getElementById("wpm").innerHTML =
		"You were able to type " +
		Math.round(chars(words) / 5 / ((Date.now() - startTime) / 60000)) +
		" words per minute!";
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
	if (input.value.replace(" ", "") == words[score]) {
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

mainMenu();

input.addEventListener("keypress", (e) => {
	if (startTime == 0) {
		startTime = Date.now();
	}
	if (e.key == " ") {
		check();
	}
});
