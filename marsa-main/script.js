const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

gsap.from(".nadpis", { opacity: 0, duration: 2, ease: "power1.inOut" });

gsap.from(".podnadpis", { opacity: 0, duration:5, ease: "sine.in", });

console.clear();

const rightColumn = document.querySelector(".right-container");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".center",
    markers:false,
    start: "0 0",
    end: "+=2000",
    pin: true,
    scrub: true
  }
});

tl.to(rightColumn, {
  y: window.innerHeight - rightColumn.scrollHeight,
  ease: "none"
});

gsap.from(".title-trips", {
  opacity: 0,
  x: -100,
  duration: 20,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".title-trips",
      start: "left 50%",
      end: "top 30%",
      scrub: 1,
      markers: false
  }
});
gsap.from(".trips-box", {
  scrollTrigger: {
    trigger: ".trips-box",
    start: "top 90%",
    toggleActions: "play none none reverse"
  },
  x: -100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.in"
});

