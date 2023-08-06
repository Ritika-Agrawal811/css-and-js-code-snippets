const starBtn = document.getElementById("starBtn");

starBtn.addEventListener("click", () => {
  const starText = starBtn.querySelector(".star__text");
  const starCount = starBtn.querySelector(".star__count");

  starBtn.classList.toggle("selected");

  const isSelected = starBtn.classList.contains("selected");
  const count = parseInt(starCount.textContent);

  starText.textContent = isSelected ? "Starred" : "Star";

  setTimeout(() => {
    starCount.textContent = isSelected ? count + 1 : count - 1;
  }, 450);
});
