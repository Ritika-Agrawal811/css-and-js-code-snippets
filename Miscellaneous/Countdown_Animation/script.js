let countContainer = document.querySelector(".count");
let counter = +countContainer.innerHTML;
let upperPiece = document.querySelector(".upper-piece");

let interval = setInterval(() => {
  countContainer.classList.remove("zoomOut");
  upperPiece.classList.remove("roll");
  decrementCounter();
}, 1500);

function decrementCounter() {
  counter--;

  setTimeout(() => {
    countContainer.classList.add("zoomOut");
    upperPiece.classList.add("roll");
  }, 30);

  if (counter > 0) {
    countContainer.innerHTML = counter;
  } else {
    countContainer.innerHTML = 0;
    clearInterval(interval);
  }
}
