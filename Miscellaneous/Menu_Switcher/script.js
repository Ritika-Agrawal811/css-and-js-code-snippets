const menuSwitcher = document.getElementById("menuSwitcher");
const menu = document.getElementById("menu");
let rotation = 0;
menuSwitcher.addEventListener("click", () => {
  rotation += 90;
  menu.style.transform = `rotate(${rotation}deg)`;
});
