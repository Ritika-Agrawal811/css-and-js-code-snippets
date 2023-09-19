const counter = document.getElementById("counter");
const itemQuantityDiv = document.getElementById("itemQuantity");
const plusIcon = document.getElementById("plusIcon");
const minusIcon = document.getElementById("minusIcon");

counter.addEventListener("click", () => {
  counter.classList.add("expand");
  plusIcon.addEventListener("click", incrementQuantity);
  minusIcon.addEventListener("click", decrementQuantity);
});

function incrementQuantity() {
  const quantity = +itemQuantityDiv.innerHTML;
  itemQuantityDiv.innerHTML = quantity + 1;
  animateCount("showDown", "hideDown");
}

function decrementQuantity(event) {
  const quantity = +itemQuantityDiv.innerHTML;
  if (quantity <= 1) {
    itemQuantityDiv.innerHTML = 0;
    event.stopPropagation();
    counter.classList.remove("expand");
  } else {
    itemQuantityDiv.innerHTML = quantity - 1;
  }
  animateCount("showUp", "hideUp");
}

function animateCount(showClass, hideClass) {
  itemQuantityDiv.classList = "itemCount";
  itemQuantityDiv.classList.add(showClass);
  setTimeout(() => {
    itemQuantityDiv.classList.replace(showClass, hideClass);
  }, 450);
}
