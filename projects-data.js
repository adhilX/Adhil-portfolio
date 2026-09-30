/**
 * Projects Data & Dynamic Renderer
 * Dynamically generated in a loop to avoid repeated markup in HTML
 */

const PROJECTS_DATA = [
  {
    title: "RYDIO",
    link: "https://github.com/adhilX/RYDIO",
    image: "assets/projects/RYDIO.png",
    alt: "RYDIO vehicle rental platform preview",
    desc: "Vehicle rental platform with ID verification, geospatial search, live chat, notifications, and admin controls—built with Clean Architecture and CI/CD on Vercel and AWS.",
    tags: ["React", "Node.js", "MongoDB", "Redis"]
  },
  {
    title: "ShutterCart",
    link: "https://github.com/adhilX/ShutterCart",
    image: "assets/projects/Shuttercart.png",
    alt: "ShutterCart e-commerce platform preview",
    desc: "E-commerce platform for photographers with smart discount logic, multi-criteria filters, pagination, and optimized MongoDB queries.",
    tags: ["React", "Express", "MongoDB"]
  },
  {
    title: "Film Production Management",
    link: "https://github.com/adhilX/Film-Production-Management",
    image: "assets/projects/film.png",
    alt: "Film Production Management System preview",
    desc: "Production workflows for cast and crew, budgets, locations, costume inventory, RBAC, onboarding approvals, and audit logs—with 203/203 E2E tests passing.",
    tags: ["Next.js", "NestJS", "TypeScript"]
  },
  {
    title: "URL Shortener",
    link: "https://github.com/adhilX/URL-Shortener",
    image: "assets/projects/URL.png",
    alt: "URL Shortener application preview",
    desc: "Secure link management with JWT auth, click analytics, duplicate URL detection, and a responsive dark UI using React 19, Vite, and Express.",
    tags: ["React", "TypeScript", "Express"]
  },
  {
    title: "TaskFlow",
    link: "https://github.com/adhilX/task-management-system",
    image: "assets/projects/Taskmanager.png",
    alt: "TaskFlow Enterprise Agile Task & Project Management System preview",
    desc: "Enterprise-grade Agile project and task management system with visual Kanban boards, RBAC, workspace planning, team rosters, and real-time metrics built on Clean Architecture.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"]
  },
  {
    title: "Lead Management CRM",
    link: "https://github.com/adhilX/Lead-Management-System-LMS-",
    image: "assets/projects/Leads.png",
    alt: "Lead Management System CRM preview",
    desc: "Sales lead management CRM with JWT authentication, full CRUD operations, advanced multi-criteria filtering, date range sorting, and MongoDB aggregation analytics.",
    tags: ["React", "Node.js", "Express", "MongoDB"]
  }
];

(function initProjects() {
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    PROJECTS_DATA.forEach((project) => {
      const article = document.createElement("article");
      article.className = "project-card";

      const tagsHtml = project.tags.map((tag) => `<li>${tag}</li>`).join("");

      article.innerHTML = `
        <a class="project-card__link" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} project">
          <div class="project-card__media">
            <img src="${project.image}" alt="${project.alt}" loading="lazy" data-fallback="assets/projects/placeholder.svg" />
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">
              ${project.title}
              <span class="project-card__arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </span>
            </h3>
            <p class="project-card__desc">${project.desc}</p>
            <ul class="project-card__tags">
              ${tagsHtml}
            </ul>
          </div>
        </a>
      `;

      grid.appendChild(article);
    });

    // Re-bind image fallbacks for dynamically created project images
    grid.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", function onError() {
        const fallback = img.getAttribute("data-fallback");
        if (fallback && img.src.indexOf(fallback) === -1) {
          img.src = fallback;
        }
        img.removeEventListener("error", onError);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProjects);
  } else {
    renderProjects();
  }
})();
