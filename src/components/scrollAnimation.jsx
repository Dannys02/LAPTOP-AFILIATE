export const ScrollAnimation = () => {
  const scrollAnimation = document.querySelector(".scroll-main")?.cloneNode(true);
  const scrollAnimationReverse = document.querySelector(".scroll-main-reverse")?.cloneNode(true);

  document.querySelectorAll('.scroll-main, .scroll-main-reverse').forEach(el => {
    if (el.parentElement) {
      el.parentElement.appendChild(el.cloneNode(true));
    }
  });

  const container1 = document.querySelector(".container-hero-2");
  const container2 = document.querySelector(".container-hero-2-2");

  if (container1 && scrollAnimation) {
    container1.appendChild(scrollAnimation);
  }

  if (container2 && scrollAnimationReverse) {
    container2.appendChild(scrollAnimationReverse);
  }
};

export default ScrollAnimation;