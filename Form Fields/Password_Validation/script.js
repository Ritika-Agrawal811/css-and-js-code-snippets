let validationBox = document.querySelector(".validation-checks");
let passwordField = document.getElementById("password-field");
let checklist = document.querySelector(".checklist").getElementsByTagName("li");

let lowerCount = 0,
  numberCount = 0,
  upperCount = 0;

let icon = document.querySelector(".icon");

let show = true;
icon.addEventListener("click", () => {
  if (show) {
    passwordField.type = "text";
    show = false;
  } else {
    passwordField.type = "password";
    show = true;
  }
  icon.querySelector(".fa-eye").classList.toggle("hide");
  icon.querySelector(".fa-eye-slash").classList.toggle("hide");
});

//   focus and focusout events
passwordField.addEventListener("focus", () => {
  validationBox.classList.remove("hide");
});

passwordField.addEventListener("focusout", () => {
  validationBox.classList.add("hide");
});

//   checking conditions
passwordField.addEventListener("input", () => {
  let value = passwordField.value.trim();
  let lastCharacter = value.slice(value.length - 1);
  let index = checkLastCharacter(lastCharacter);

  if (value.length != 0) {
    checklist[index].classList.add("checked");
    passwordField.addEventListener("keydown", uncheckConditions);
  } else {
    passwordField.removeEventListener("keydown", uncheckConditions);
    resetValues();
  }

  // checking for minimum 8 letters
  if (value.length >= 8) {
    checklist[3].classList.add("checked");
  } else {
    checklist[3].classList.remove("checked");
  }
});

function uncheckConditions(event) {
  let value = passwordField.value.trim();
  let index = checkLastCharacter(value.slice(value.length - 1));

  if (event.key == "Backspace") {
    decrementCount(index);
    checkCount();
  } else {
    incrementCount(index);
  }
}

function checkLastCharacter(lastCharacter) {
  // checking for number
  if (!Number.isNaN(Number(lastCharacter))) {
    return 2;

    // checking for upper case letters
  } else if (lastCharacter === lastCharacter.toUpperCase()) {
    return 1;

    // checking for lower case letter
  } else if (lastCharacter === lastCharacter.toLowerCase()) {
    return 0;
  }
}

function incrementCount(index) {
  switch (index) {
    case 0:
      lowerCount++;
      console.log("lower Count is ", lowerCount);
      break;
    case 1:
      upperCount++;
      console.log("upper Count is ", upperCount);
      break;
    case 2:
      numberCount++;
      console.log("number Count is ", numberCount);
      break;
  }
}

function decrementCount(index) {
  switch (index) {
    case 0:
      lowerCount--;
      console.log("lower Count is ", lowerCount);
      break;
    case 1:
      upperCount--;
      console.log("upper Count is ", upperCount);
      break;
    case 2:
      numberCount--;
      console.log("number Count is ", numberCount);
      break;
  }
}

function checkCount() {
  if (lowerCount <= 1) {
    checklist[0].classList.remove("checked");
    lowerCount = 0;
  }

  if (upperCount <= 1) {
    checklist[1].classList.remove("checked");
    upperCount = 0;
  }

  if (numberCount <= 1) {
    checklist[2].classList.remove("checked");
    numberCount = 0;
  }
}

function resetValues() {
  lowerCount = 0;
  upperCount = 0;
  numberCount = 0;

  for (let i = 0; i < checklist.length; i++) {
    checklist[i].classList.remove("checked");
  }
}
