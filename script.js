/**
 * Theme: localStorage + system preference
 */
(function initTheme() {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;

  function applyTheme(mode) {
    if (mode === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(mode) {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }

  const stored = getStoredTheme();
  if (stored === "light" || stored === "dark") {
    applyTheme(stored);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isLight = root.classList.toggle("light");
      setStoredTheme(isLight ? "light" : "dark");
    });
  }

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (getStoredTheme()) return;
    applyTheme(e.matches ? "light" : "dark");
  });
})();

/**
 * Project image fallbacks when .jpg assets are missing
 */
(function initImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", function onError() {
      const fallback = img.getAttribute("data-fallback");
      if (fallback && img.src.indexOf(fallback) === -1) {
        img.src = fallback;
      }
      img.removeEventListener("error", onError);
    });
  });
})();

/**
 * Subtle scroll reveal
 */
(function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sections = document.querySelectorAll(
    ".hero__portrait-wrap, .hero__content, .tech-marquee, .tech-grid, .about__main, .about__side, .projects-grid, .contact__main, .contact__side"
  );

  sections.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach((el) => observer.observe(el));
})();

/**
 * Dynamic copyright year
 */
(function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

