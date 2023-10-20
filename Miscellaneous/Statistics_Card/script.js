const counter = document.getElementById("counter");
const speed = 350;

const incrementCount = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerHTML;
  const increment = Math.floor(target / speed);

  if (count < target) {
    counter.innerHTML = count + increment;
    setTimeout(incrementCount, 1);
  } else {
    counter.innerText = target;
  }
};

incrementCount();
