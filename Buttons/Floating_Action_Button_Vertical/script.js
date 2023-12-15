const viewActionsBtn = document.querySelector(".plus-btn");
const floatingBtns = document.getElementsByClassName("small");

viewActionsBtn.addEventListener("click", () => {
  viewActionsBtn.classList.toggle("selected");

  Array.from(floatingBtns).forEach((btn) => btn.classList.toggle("hide"));
});
