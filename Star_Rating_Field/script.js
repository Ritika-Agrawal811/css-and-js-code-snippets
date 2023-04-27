let starsArray = document.getElementsByClassName("star");
starsArray = [...starsArray];

starsArray.forEach((star) => {
  star.addEventListener("click", setRating);
});

function setRating(event) {
  let rate = event.target.dataset.rate;

  for (let i = starsArray.length - 1; i >= rate; i--) {
    starsArray[i].classList.remove("rated");
  }

  for (let i = 0; i < rate; i++) {
    starsArray[i].classList.add("rated");
  }
}
