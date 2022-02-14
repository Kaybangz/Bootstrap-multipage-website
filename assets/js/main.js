//NAVBAR TOGGLE ON MOBILE DEVICES
const navToggle = () => {
  const hamburger = document.querySelector(".hamburger");

  const closeBtn = document.querySelector(".close");

  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};

// NAVBAR BACKGROUND ON SCROLL DOWN
const navScrollBehaviour = () => {
    const menu = document.querySelector(".menu");

    window.onscroll = () => {
        const topPosition = window.scrollY;

        if(topPosition >= 70){
            menu.classList.add("menu__active");
        }else{
            menu.classList.remove("menu__active");
        }
    }
}


//ACTION BUTTON ON HERO SECTION
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 50,
    speedAsDuration: true,
});

navToggle();
navScrollBehaviour();


