const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
const screen = document.documentElement;

const getScrollValue = () => {
  const pos = screen.scrollTop;
  const height = screen.scrollHeight - screen.clientHeight;
  const scrollValue = Math.round((pos * 100) / height);

  scrollToTopBtn.style.display = pos > 100 ? "block" : "none";
  scrollToTopBtn.addEventListener("click", () => {
    screen.scrollTop = 0;
  });

  scrollToTopBtn.style.background = `conic-gradient(#743DFF ${scrollValue}%, #d4b5ef ${scrollValue}%)`;
};

window.addEventListener("scroll", getScrollValue);
