

const startButton = document.querySelector(".hero-copy .button-primary");
const floatingHearts = document.querySelector(".floating-hearts");
const reasonCards = document.querySelectorAll(".reason-card");
const yesButton = document.querySelector("#yesButton");
const thinkButton = document.querySelector("#thinkButton");
const answerMessage = document.querySelector("#answerMessage");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

// Smoothly guide the visitor into the story and release a few floating hearts.
startButton.addEventListener("click", () => {
  document.querySelector("#story").scrollIntoView({ behavior: "smooth" });
  for (let i = 0; i < 12; i++) {
    window.setTimeout(createHeart, i * 120);
  }
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty("--duration", `${4 + Math.random() * 3}s`);
  heart.style.fontSize = `${12 + Math.random() * 17}px`;
  floatingHearts.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}


reasonCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.toggle("is-open");
    card.setAttribute("aria-expanded", String(isOpen));
  });
});


yesButton.addEventListener("click", () => {
  answerMessage.textContent = "Mke bo njeriun ma tlumtur nbot, te dua";
  for (let i = 0; i < 24; i++) {
    window.setTimeout(createHeart, i * 90);
  }
});

thinkButton.addEventListener("click", () => {
  answerMessage.textContent = "Te dua shum Shejlla.";
   for (let i = 0; i < 24; i++) {
    window.setTimeout(createHeart, i * 90);
  }
});
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
