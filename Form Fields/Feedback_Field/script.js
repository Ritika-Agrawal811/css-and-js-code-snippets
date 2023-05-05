let circles = document.getElementsByClassName("circle");

for (let i = 0; i < circles.length; i++) {
  let emoji = circles[i];

  emoji.addEventListener("click", selectCircle);
}

let previousCircle, currentCircle;
function selectCircle(event) {
  let currentCircle = event.currentTarget;

  if (previousCircle) {
    previousCircle.classList.remove("grow");
  }

  currentCircle.classList.add("grow");
  previousCircle = currentCircle;
}
