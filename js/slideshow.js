let slideIndex = 0;
const time = 6000;
carousel();

function carousel() {
  const slide = document.querySelectorAll(".slide");
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1} 
  slide[slideIndex-1].style.display = "block";
  setTimeout(carousel, time); 
}