const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");
const searchInputContainer = document.getElementById("search-input-container");

searchBtn.addEventListener("click", () => {
  searchInputContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  searchInputContainer.classList.remove("show");
  searchInputContainer.querySelector("input").value = "";
});
