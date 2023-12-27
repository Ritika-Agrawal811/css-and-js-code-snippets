const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

let carouselItems = document.getElementsByClassName("carousel-item");

carouselItems[0].classList.replace("hide", "prev");

function displayCarouselItem() {
  let previousIndex = 0,
    currentIndex = 0;
  let prevAnimationClass = "prev",
    currentAnimationClass;

  return function showItem(operation) {
    if (operation == "next") {
      currentIndex =
        currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;

      currentAnimationClass = "next";
    }

    if (operation == "prev") {
      currentIndex =
        currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;

      currentAnimationClass = "prev";
    }

    carouselItems[previousIndex].classList.replace(prevAnimationClass, "hide");
    carouselItems[currentIndex].classList.replace(
      "hide",
      currentAnimationClass,
    );

    previousIndex = currentIndex;
    prevAnimationClass = currentAnimationClass;
  };
}

let showImage = displayCarouselItem();

arrowLeft.addEventListener("click", () => {
  showImage("prev");
});

arrowRight.addEventListener("click", () => {
  showImage("next");
});
