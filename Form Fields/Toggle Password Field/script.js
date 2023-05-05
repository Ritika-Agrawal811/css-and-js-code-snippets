let passwordField = document.getElementById("password");
let eyeOpen = document.querySelector(".eye-open");
let eyeClosed = document.querySelector(".eye-closed");

function showPassword() {
  passwordField.classList.toggle("show");

  changeIcon();

  if (passwordField.type == "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function changeIcon() {
  if (eyeClosed.classList.contains("none")) {
    eyeClosed.classList.remove("none");
  } else {
    eyeClosed.classList.add("none");
  }
}

eyeClosed.addEventListener("click", showPassword);
eyeOpen.addEventListener("click", showPassword);
