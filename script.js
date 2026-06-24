const header = document.querySelector(".site-header");
const preloader = document.querySelector(".preloader");
const revealItems = document.querySelectorAll(
  "section, .hero-content, .hero-panel, .metrics-strip div, .feature-list article, .signal-grid article, .timeline article, .portal-shell, .portal-board article, .standard-grid article, .pricing-grid article, .fit-grid > div"
);

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.body.classList.add("preloader-complete");
    document.body.classList.remove("is-loading");
    preloader?.setAttribute("aria-hidden", "true");
  }, 520);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

window.setTimeout(() => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}, 1100);

document.querySelectorAll(".logo-card img").forEach((image) => {
  image.addEventListener("error", () => {
    image.closest(".logo-card")?.classList.add("is-fallback");
  });
});
