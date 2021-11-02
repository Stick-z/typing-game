const p = document.getElementById("paragraph");
const input = document.getElementById("input");
var words = [" This", " is", " a", " test", " sentence."];
var score = 0;

p.innerHTML = words[score];
p.innerHTML += words[score + 1].fontcolor("green");

input.value = " "; // Change later to ensure the user doesn't click before the space...

input.addEventListener("keypress", (e) => {
  if (e.key == " ") {
    if (score == words.length - 1) {
      console.log("yes");
    } else {
      if (input.value == words[score]) {
        input.value = "";
        score++;
        p.innerHTML = words[score - 1].fontcolor("green");
        if (words[score] != undefined) {
          p.innerHTML += words[score];
        }
        if (words[score + 1] != undefined) {
          p.innerHTML += words[score + 1].fontcolor("green");
        }
      } else {
        input.value = "";
        p.innerHTML = words[score].fontcolor("red");
      }
    }
  }
});
