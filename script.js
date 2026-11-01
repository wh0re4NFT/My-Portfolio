const siteConfig = {
  availability: {
    enabled: true,
    label: "Open to opportunities"
  },
  formEndpoint: "https://formspree.io/f/mdeewvov",
  skills: [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { title: "Data", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code", "npm"] }
  ],
  projects: [
    {
      title: "Vaulx Finance",
      description: "A public-facing DeFi platform presenting Vaulx Finance’s AI-powered yield concept, staking vaults, token details, and roadmap.",
      technologies: [],
      github: "",
      live: "https://vaulxfinance.com",
      placeholder: false
    },
    {
      title: "Project details coming soon",
      description: "A space for a real project, its purpose, and the decisions behind how it was built.",
      technologies: [],
      github: "",
      live: "",
      placeholder: true
    }
  ],
  journey: [
    { title: "Building a strong foundation", description: "Practising the fundamentals of web development and learning how to turn ideas into clear, usable interfaces.", label: "Learning" },
    { title: "Connecting the pieces", description: "Exploring how frontend experiences, APIs, server-side logic, and databases work together.", label: "Growing" },
    { title: "Current focus", description: "Creating thoughtful full-stack projects, improving engineering habits, and learning through hands-on work.", label: "Now", current: true }
  ],
  services: [
    { title: "Full-Stack Development", description: "Bringing together a responsive interface, backend functionality, and data into one coherent application." },
    { title: "Frontend Development", description: "Building accessible, responsive interfaces that feel clear and natural to use." },
    { title: "Backend Development", description: "Creating the APIs and server-side foundations that help applications work reliably." },
    { title: "Website Development", description: "Making fast, responsive websites for people, ideas, and small businesses." },
    { title: "Website Improvement", description: "Improving an existing site’s usability, responsiveness, accessibility, and presentation." },
    { title: "AI & Automation", description: "Exploring practical ways to simplify repetitive workflows with thoughtful automation." }
  ],
  links: {
    email: "shulamuzoma1@gmail.com",
    github: "https://github.com/wh0re4NFT",
    linkedin: "",
    resume: "",
    x: "https://x.com/whore4nfts?s=11",
    discord: "https://discord.gg/ybQ5T6Qg",
    telegram: "https://t.me/iamHIM_8"
  }
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function renderSkills() {
  document.querySelector("#skill-groups").innerHTML = siteConfig.skills.map((group, index) => `
    <article class="skill-group reveal">
      <span class="skill-number">0${index + 1} /</span>
      <h3>${escapeHTML(group.title)}</h3>
      <div class="skill-tags">${group.items.map((skill) => `<span class="skill-tag">${escapeHTML(skill)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  grid.innerHTML = siteConfig.projects.map((project, index) => {
    const isPlaceholder = project.placeholder === true;
    const validLink = (url) => /^https?:\/\//i.test(url);
    const links = [
      validLink(project.github) ? `<a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : "",
      validLink(project.live) ? `<a href="${escapeHTML(project.live)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""
    ].filter(Boolean).join(" · ");
    const technologies = project.technologies?.length
      ? `<div class="skill-tags project-tags">${project.technologies.map((item) => `<span class="skill-tag">${escapeHTML(item)}</span>`).join("")}</div>`
      : "";
    return `
      <article class="project-card ${isPlaceholder ? "placeholder" : ""} reveal">
        <div class="project-preview" aria-label="${isPlaceholder ? "Placeholder project preview" : `${escapeHTML(project.title)} project preview`}">
          <div class="preview-grid" aria-hidden="true"></div>
          <span class="preview-label">${isPlaceholder ? "WORK / TO BE ADDED" : "FEATURED WORK"}</span>
          <div class="preview-center">
            <span class="preview-symbol" aria-hidden="true"><span>${isPlaceholder ? "+" : "↗"}</span></span>
            <strong>${isPlaceholder ? "Your work goes here" : escapeHTML(project.title)}</strong>
            <small>${isPlaceholder ? "Replace this preview with a real project" : "Project preview"}</small>
          </div>
          <span class="preview-index">0${index + 1}</span>
        </div>
        <div class="project-info">
          <div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            ${technologies}
            ${links ? `<p class="project-links">${links}</p>` : ""}
          </div>
          <span class="project-status">${isPlaceholder ? "Placeholder" : "Project"}</span>
        </div>
      </article>
    `;
  }).join("");
  const placeholders = siteConfig.projects.filter((project) => project.placeholder === true).length;
  if (placeholders) {
    const note = placeholders === 1
      ? "One project entry is still a placeholder."
      : `${placeholders} project entries are still placeholders.`;
    grid.insertAdjacentHTML("afterend", `<p class="projects-empty-note">${note}</p>`);
  }
}

function renderJourney() {
  document.querySelector("#journey-list").innerHTML = siteConfig.journey.map((item) => `
    <article class="journey-item ${item.current ? "current" : ""}">
      <span class="journey-marker" aria-hidden="true"></span>
      <div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <time>${escapeHTML(item.label)}</time>
      </div>
    </article>
  `).join("");
}

function renderServices() {
  document.querySelector("#services-grid").innerHTML = siteConfig.services.map((service, index) => `
    <article class="service-item reveal">
      <span class="service-index">0${index + 1}</span>
      <h3>${escapeHTML(service.title)}</h3>
      <p>${escapeHTML(service.description)}</p>
    </article>
  `).join("");
}

function renderLinks() {
  const linkConfig = [
    ["Email", siteConfig.links.email, true],
    ["GitHub", siteConfig.links.github, false],
    ["LinkedIn", siteConfig.links.linkedin, false],
    ["Resume", siteConfig.links.resume, false],
    ["X", siteConfig.links.x, false],
    ["Discord", siteConfig.links.discord, false],
    ["Telegram", siteConfig.links.telegram, false]
  ];
  const links = linkConfig.filter(([, value]) => value && value.trim());
  const renderLink = ([label, url, isEmail]) => {
    const href = isEmail ? `mailto:${encodeURIComponent(url.trim())}` : url.trim();
    const safeHref = escapeHTML(href);
    const external = !isEmail;
    if (external && !/^https?:\/\//i.test(url.trim())) return "";
    return `<a href="${safeHref}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}<span aria-hidden="true">↗</span></a>`;
  };
  document.querySelector("#contact-links").innerHTML = links.map(renderLink).join("");
  document.querySelector("#footer-social-links").innerHTML = linkConfig
    .filter(([label, url]) => ["GitHub", "X", "Discord", "Telegram"].includes(label) && url && url.trim())
    .map(renderLink)
    .join("");
}

renderSkills();
renderProjects();
renderJourney();
renderServices();
renderLinks();
const availability = document.querySelector("#availability");
availability.hidden = !siteConfig.availability.enabled;
availability.lastChild.textContent = ` ${siteConfig.availability.label}`;
document.querySelector("#current-year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const themeButton = document.querySelector(".theme-toggle");
const navContent = document.querySelector("#primary-nav");
const navLinks = [...document.querySelectorAll(".nav-links a")];

function setTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeButton.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
}

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  setTheme(savedTheme === "light" ? "light" : "dark");
} catch (error) {
  console.warn("Unable to read the saved theme preference.", error);
  setTheme("dark");
}

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    console.warn("Unable to save the theme preference.", error);
  }
});

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open navigation menu";
  navContent.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Open navigation menu" : "Close navigation menu";
  navContent.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navContent.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (menuButton.getAttribute("aria-expanded") === "true" && !navContent.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
document.querySelectorAll("#about, #skills, #projects, #journey, #contact").forEach((section) => sectionObserver.observe(section));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const formFields = [...form.querySelectorAll("input, textarea")];

formFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.checkValidity()) field.removeAttribute("aria-invalid");
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (form.getAttribute("aria-busy") === "true") return;

  formStatus.className = "form-status";
  const invalidFields = formFields.filter((field) => !field.checkValidity());
  formFields.forEach((field) => field.setAttribute("aria-invalid", String(!field.checkValidity())));
  if (invalidFields.length) {
    formStatus.textContent = "Please check the highlighted fields and try again.";
    formStatus.classList.add("error");
    invalidFields[0].focus();
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  submitButton.textContent = "Sending…";
  formStatus.textContent = "Sending your message…";

  try {
    const response = await fetch(siteConfig.formEndpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      formStatus.textContent = "Your message couldn’t be sent. Please try again or email me directly.";
      formStatus.classList.add("error");
      return;
    }

    form.reset();
    formFields.forEach((field) => field.removeAttribute("aria-invalid"));
    formStatus.textContent = "Thanks for reaching out. Your message has been sent.";
    formStatus.classList.add("success");
  } catch {
    formStatus.textContent = "We couldn’t connect to the email service. Please check your connection and try again, or email me directly.";
    formStatus.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send message <span aria-hidden="true">↗</span>';
    form.removeAttribute("aria-busy");
  }
});
