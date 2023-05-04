let dropdown = document.querySelector(".multiselect-dropdown");
let menu = document.querySelector(".menu");
let listContainer = document.querySelector(".selectedList-container");
let selectedItems = [];

dropdown.onclick = (event) => {
  event.currentTarget.classList.toggle("show");
};

menu.addEventListener("click", (event) => {
  event.stopPropagation();

  let item = event.target.innerHTML;

  if (!selectedItems.includes(item)) {
    selectedItems.push(item);
    showSelectedItems(item);
  }
});

function showSelectedItems(item) {
  let itemSpan = document.createElement("span");
  let crossIcon = document.createElement("i");

  itemSpan.innerHTML = item;
  itemSpan.classList.add("selectedItem");

  crossIcon.classList.add("fa-solid", "fa-xmark");
  itemSpan.append(crossIcon);

  itemSpan.addEventListener("click", deleteItem);
  listContainer.append(itemSpan);
}

function deleteItem(event) {
  event.stopPropagation();
  let item = event.currentTarget;

  selectedItems = selectedItems.filter((value) => value !== item.textContent);

  item.classList.add("zoomOut");

  setTimeout(() => {
    item.remove();
    item.classList.remove("zoomOut");
  }, 390);
}
