const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navigationLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + entry.target.id) {
        link.style.opacity = "1";
      } else {
        link.style.opacity = "0.6";
      }
    });
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));
