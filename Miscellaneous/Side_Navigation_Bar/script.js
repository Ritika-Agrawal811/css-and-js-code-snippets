const bar = document.querySelector(".bar");

document.onscroll = () => {
  const y = Math.floor(
    (window.scrollY / document.documentElement.scrollHeight) * 100,
  );

  // const y = window.scrollY;
  bar.style.height = y * 1.08 + "%"; // 1.08 is the margin error in calculation

  const remainder = Math.floor(y / 16) + 1;
  const activeLink = document.getElementById("link-" + remainder);

  activateLink(activeLink);
};

let previous = document.getElementById("link-1");

function activateLink(link) {
  const current = link;
  previous.classList.remove("active");
  current.classList.add("active");
  previous = current;
}
