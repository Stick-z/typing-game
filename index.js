const p = document.getElementById("paragraph");
const input = document.getElementById("input");
var words = [" This", " is", " a", " test", " sentence."];
var score = 0;

function update() {
	p.innerHTML = words[score];
}

update();
input.value = " "; // Change later to ensure the user doesn't click before the space...

input.addEventListener("keypress", (e) => {
	if (e.key == " ") {
		if (input.value == words[score]) {
			input.value = "";
			score++;
			update();
		} else {
			input.value = "";
			p.innerHTML = words[score].fontcolor("red");
		}
	}
});
