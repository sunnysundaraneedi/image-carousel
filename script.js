const buttons = document.querySelectorAll(".carousel-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.classList.contains("prev") ? -1 : 1;
    const slides = Array.from(
      button.closest(".carousel").querySelectorAll(".slide")
    );

    const activeSlide = Array.from(slides).filter((slide) =>
      slide.classList.contains("active")
    );

    const eleIndex = slides.indexOf(activeSlide[0]);
    let newIndex = slides.indexOf(activeSlide[0]) + offset;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    slides[eleIndex].classList.remove("active");
    slides[newIndex].classList.add("active");
  });
});
