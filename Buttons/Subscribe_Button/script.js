let subscribeBtn = document.getElementById("subscribeBtn");
let toggle = false;

subscribeBtn.addEventListener("click", (event) => {
  let parent = event.target.offsetParent;

  if (toggle) {
    subscribeBtn.classList.replace("clicked", "green-bg");
    parent.classList.remove("clicked");
    subscribeBtn.innerHTML = "Subscribed";
  } else {
    subscribeBtn.classList.add("clicked");
    parent.classList.add("clicked");
    subscribeBtn.innerHTML = "✓";

    toggle = true;
  }
});
