const rotateText = document.querySelector(".rotate-text");
const headings = ["Hey", "Hola", "Yo", "Hello"];
let index = 0;

function changeRotateText() {
  rotateText.classList.remove("flip");

  setTimeout(() => {
    rotateText.innerHTML = headings[index];
    rotateText.classList.add("flip");
  }, 850);

  index = (index + 1) % headings.length;
}

setInterval(changeRotateText, 1700);
