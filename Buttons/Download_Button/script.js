let downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", (event) => {
  let btn = event.target;
  btn.classList.add("clicked");
  btn.textContent = "";

  setTimeout(() => {
    btn.classList.remove("clicked");
    btn.textContent = "Download";
  }, 3000);
});
