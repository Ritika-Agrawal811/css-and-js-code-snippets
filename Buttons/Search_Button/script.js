let searchBtn = document.querySelector(".search-btn");
let closeBtn = document.querySelector(".close-btn");
let searchInputContainer = document.getElementById("search-input-container");

searchBtn.addEventListener("click", () => {
  searchInputContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  searchInputContainer.classList.remove("show");
  searchInputContainer.querySelector("input").value = "";
});
