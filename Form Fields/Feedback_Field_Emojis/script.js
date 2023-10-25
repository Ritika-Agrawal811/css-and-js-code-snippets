const emojis = document.getElementsByClassName("emoji");

for (let i = 0; i < emojis.length; i++) {
  const emoji = emojis[i];
  emoji.addEventListener("click", selectCircle);
}

let previousCircle;
function selectCircle(event) {
  const currentCircle = event.currentTarget;

  if (previousCircle) {
    previousCircle.classList.remove("selected");
  }

  currentCircle.classList.add("selected");
  previousCircle = currentCircle;
}
