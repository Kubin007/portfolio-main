const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const about = document.querySelector('.about');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

gsap.from(".nadpis", { opacity: 0, duration: 2, ease: "power1.inOut" });

gsap.from(".podnadpis", { opacity: 0, duration:5, ease: "sine.in", });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".omne", {
  opacity: 0,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".omne", // Element, který spouští animaci
    start: "top 80%", // Kdy animace začne (pozice prvku a viewportu)
    toggleActions: "play none none none" // Akce při scrollování
  }
});

gsap.from(".ja1", {
  opacity: 0,
  duration: 2,
  ease: "sine.in",
  scrollTrigger: {
    trigger: ".ja1",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".ja2", {
  opacity: 0,
  duration: 2,
  ease: "sine.in",
  scrollTrigger: {
    trigger: ".ja2",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Zaregistruj ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animace pro nadpis "praxe"
gsap.from(".praxe", {
  opacity: 0,
  y: -50, // Vznik shora
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".praxe", // Spustí animaci, když se "praxe" objeví ve viewportu
    start: "top 80%",
  }
});

// Animace pro jednotlivé workboxy
gsap.from(".workbox:nth-child(1)", {
  x: -100, // Vyjede zleva
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".workbox:nth-child(1)",
    start: "top 80%",
  }
});

gsap.from(".workbox:nth-child(2)", {
  x: 100, // Vyjede zprava
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".workbox:nth-child(2)",
    start: "top 80%",
  }
});

gsap.from(".workbox:nth-child(3)", {
  x: -100, // Vyjede zleva
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".workbox:nth-child(3)",
    start: "top 80%",
  }
});

gsap.from(".workbox:nth-child(4)", {
  x: 100, // Vyjede zprava
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".workbox:nth-child(4)",
    start: "top 80%",
  }
});

gsap.from(".kontakt", {
  opacity: 0,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".kontakt", // Element, který spouští animaci
    start: "top 80%", // Kdy animace začne (pozice prvku a viewportu)
    toggleActions: "play none none none" // Akce při scrollování
  }
});

gsap.from(".socials a", {
  y: 50, 
  opacity: 0, 
  duration: 1,
  ease: "power1.out", 
  scrollTrigger: {
    trigger: ".socials", 
    start: "top 80%", 
  }
});



gsap.from(".pracebox", {
  y: 50, 
  opacity: 0, 
  duration: 1, 
  ease: "power1.out", 
  scrollTrigger: {
    trigger: ".prace", 
    start: "top 80%",
    toggleActions: "play none none none", 
  },
 
});











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

