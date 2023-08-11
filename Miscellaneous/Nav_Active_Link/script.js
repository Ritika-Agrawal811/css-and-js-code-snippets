const menuLinks = document.getElementsByClassName("nav-link");
const menuList = document.getElementById("menuList");
let initialPosition = "75%";

function highlightLink(index, end) {
  const percentages = ["75%", "50%", "25%", "0"];
  let targetPosition = index !== -1 ? percentages[index] : end;

  // set CSS Variables
  menuList.style.setProperty("--initial-position", initialPosition);
  menuList.style.setProperty("--target-position", targetPosition);

  // remove "clicked" class
  menuList.classList.remove("clicked");

  // add "clicked" class
  setTimeout(() => {
    menuList.classList.add("clicked");
  }, 0);

  initialPosition = targetPosition;
}

Array.from(menuLinks).forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    highlightLink(index);
  });
});

// adding keyboard events
menuList.addEventListener("keydown", (event) => {
  let start = +initialPosition.slice(0, 2) || 0;
  let end;

  if (event.key === "ArrowRight") {
    end = start !== 0 ? start - 25 : 0;
  }
  if (event.key === "ArrowLeft") {
    end = start !== 75 ? start + 25 : 75;
  }

  highlightLink(-1, end + "%");
});
