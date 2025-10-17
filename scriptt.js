// Simple Velar-inspired interactivity
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("learnMoreBtn");

  btn.addEventListener("click", () => {
    alert("Velar: A DeFi protocol with Bitcoin finality — built for the decentralized future.");
  });

  // Smooth scroll for navigation links
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
