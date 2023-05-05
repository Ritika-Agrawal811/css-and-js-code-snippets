let bar = document.querySelector(".bar");

document.onscroll = () => {
  let y = Math.floor(
    (window.pageYOffset / document.documentElement.scrollHeight) * 100
  );

  bar.style.height = y * 1.08 + "%"; // 1.08 is the margin error in calculation

  let remainder = Math.floor(y / 16) + 1;
  let activeLink = document.getElementById("link-" + remainder);

  activateLink(activeLink);
};

let previous = document.getElementById("link-1");

function activateLink(link) {
  let current = link;
  previous.classList.remove("active");
  current.classList.add("active");
  previous = current;
}
