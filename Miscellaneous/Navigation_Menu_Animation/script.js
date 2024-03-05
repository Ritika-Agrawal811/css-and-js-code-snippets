const link = document.querySelector(".link");
const header = document.getElementById("header");

link.addEventListener("click", () => {
  header.classList.toggle("show");
});
