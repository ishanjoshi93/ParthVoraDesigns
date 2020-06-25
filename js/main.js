const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-container');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
  })
}

navSlide();