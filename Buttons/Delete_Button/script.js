let deleteBtn = document.querySelector(".delete-btn");
let confirmBox = document.querySelector(".confirm-box");
let btn = document.querySelectorAll(".btn");

deleteBtn.addEventListener("click", () => {
  deleteBtn.classList.add("clicked");
  confirmBox.classList.add("show");
});

btn.forEach((element) => {
  element.addEventListener("click", () => {
    deleteBtn.classList.remove("clicked");
    confirmBox.classList.remove("show");
  });
});
