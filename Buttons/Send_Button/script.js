let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", () => {
  let planePath = sendBtn.querySelector(".circle");
  let planeIcon = sendBtn.querySelector(".plane-icon");

  planePath.classList.add("rotateCircle");
  planeIcon.classList.remove("hide");

  setTimeout(() => {
    planeIcon.classList.add("hide");
    planePath.classList.remove("rotateCircle");
  }, 2750);

  setTimeout(() => {
    sendBtn.classList.add("checked");
    sendBtn.innerHTML = "Sent";
  }, 3000);
});
