let numbersBar = document.querySelector(".numbers-bar");
let leftIcon = document.getElementById("leftIcon");
let rightIcon = document.getElementById("rightIcon");
let circle = numbersBar.querySelector(".circle");

function generatePageNumbers() {
  for (let i = 1; i <= 10; i++) {
    let numSpan = document.createElement("span");
    numSpan.innerHTML = i;
    numbersBar.appendChild(numSpan);
  }
}

generatePageNumbers();

let numbersBarMargin = Number(numbersBar.style.marginLeft);
let circleMargin = Number(circle.style.marginLeft);

leftIcon.addEventListener("click", () => {
  numbersBarMargin -= 50;
  circleMargin -= 50;

  if (numbersBarMargin >= 0) {
    numbersBar.style.marginLeft = `-${numbersBarMargin}px`;
  } else {
    numbersBarMargin = 0;
  }

  if (circleMargin >= 0) {
    circle.style.marginLeft = `${circleMargin}px`;
  } else {
    circleMargin = 0;
  }
});

rightIcon.addEventListener("click", () => {
  numbersBarMargin += 50;
  circleMargin += 50;

  if (numbersBarMargin <= 250) {
    numbersBar.style.marginLeft = `-${numbersBarMargin}px`;
  } else {
    numbersBarMargin = 250;
  }

  if (circleMargin <= 450) {
    circle.style.marginLeft = `${circleMargin}px`;
  } else {
    circleMargin = 450;
  }
});
