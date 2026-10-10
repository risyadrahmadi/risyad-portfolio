
"use client";

import { useEffect, useState } from "react";
import LabWorkbench from "@/components/LabWorkbench";
import ChatBot from "@/components/ChatBot";

const CV_URL = "/api/cv";

const articles = [
  {
    number: "01",
    title:
      "Turning the STB HG680P into a Linux Mini Server: Install Armbian and Enable RTL8189FS WiFi",
    description:
      "Armbian installation guide and RTL8189FS Wi-Fi configuration on the STB HG680P.",
    tags: "Armbian · Linux · Wi-Fi",
    url: "https://garapmedia.com/install-armbian-stb-hg680p-wifi-rtl8189fs/",
    github: "https://github.com/risyadrahmadi/stb-hg680p-armbian",
  },
  {
    number: "02",
    title: "Docker CasaOS on STB HG680P: Home Server Installation Guide",
    description:
      "Building a home server with Docker and CasaOS on an STB device.",
    tags: "Docker · CasaOS · Linux",
    url: "https://garapmedia.com/install-docker-casaos-stb-hg680p/",
    github: "https://github.com/risyadrahmadi/stb-hg680p-docker-casaos",
  },
  {
    number: "03",
    title: "Monitoring the STB HG680P Server with Grafana & Prometheus",
    description:
      "Monitoring server and container resources with an observability stack.",
    tags: "Grafana · Prometheus · cAdvisor",
    url: "https://garapmedia.com/monitoring-server-stb-hg680p/",
    github: "https://github.com/risyadrahmadi/stb-hg680p-monitoring",
  },
  {
    number: "04",
    title: "Ansible on STB HG680-P for Linux Mini Server Automation",
    description:
      "Automating mini server configuration and management with Ansible.",
    tags: "Ansible · YAML · Automation",
    url: "https://garapmedia.com/otomatisasi-stb-hg680-p-menjadi-mini-server-linux-dengan-ansible/",
    github: "https://github.com/risyadrahmadi/stb-hg680p-ansible",
  },
  {
    number: "05",
    title: "Bash Scripts for the STB HG680-P Linux Mini Server",
    description:
      "Bash scripting to help with server installation and management.",
    tags: "Bash · Shell · Linux",
    url: "https://garapmedia.com/bash-script-stb-hg680-p-mini-server-linux/",
    github: "https://github.com/risyadrahmadi/stb-hg680p-bash-automation",
  },
  {
    number: "06",
    title: "K3s Image Versioning with Kubectl",
    description:
      "Managing container image versions for Kubernetes workloads using kubectl.",
    tags: "K3s · Kubectl · Kubernetes",
    url: "https://garapmedia.com/k3s-container-image-versioning-kubectl/",
    github: "https://github.com/risyadrahmadi/k3s-container-image-versioning-kubectl",
  },
  {
    number: "07",
    title: "Docker Compose Container Image Versioning for CI/CD",
    description:
      "Applying image versioning to Docker Compose-based deployments.",
    tags: "Docker Compose · CI/CD · GitLab",
    url: "https://garapmedia.com/docker-compose-container-image-versioning/",
    github: "https://github.com/risyadrahmadi/docker-compose-container-image-versioning",
  },
  {
    number: "08",
    title: "K3s: Container Image Versioning with ArgoCD (GitOps)",
    description:
      "Managing image versions and Kubernetes deployments with a GitOps approach.",
    tags: "K3s · ArgoCD · GitOps",
    url: "https://garapmedia.com/k3s-argocd-container-image-versioning-gitops/",
    github: "https://github.com/risyadrahmadi/k3s-container-image-versioning-argocd-gitops",
  },
];

const articleCount = String(articles.length).padStart(2, "0");

const certificates = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia",
    date: "Oct 2022",
    credential: "JLX1L1G6GX72",
    url: "https://www.dicoding.com/certificates/JLX1L1G6GX72",
  },
  {
    title: "Baseline: Infrastructure",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2888464",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2888464?locale=en",
  },
  {
    title: "Understanding Google Cloud Security and Operations",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2903944",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2903944",
  },
  {
    title: "Set Up and Configure a Cloud Environment in Google Cloud",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2903702",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2903702",
  },
  {
    title: "Cloud Engineering",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2903457",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2903457",
  },
  {
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2897352",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2897352",
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2888155",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2888155",
  },
  {
    title: "Perform Foundational Infrastructure Tasks in Google Cloud",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2887689",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2887689",
  },
  {
    title: "Site Reliability Engineering: Measuring and Managing Reliability",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2022",
    credential: "2908793",
    url: "https://www.cloudskillsboost.google/public_profiles/69204784-d500-4c72-9d79-1f28842175fe/badges/2908793",
  },
];

const projectItems = [
  {
    number: "01",
    period: "Jan 2026 – Present",
    org: "Klikto ID",
    linkedin:
      "https://www.linkedin.com/in/muhammad-risyad-rahmadi/details/projects/",
    title:
      "Transforming the STB HG680P into a DevOps Mini Server — Docker, CI/CD, K3s & GitOps",
    description:
      "Developing the STB HG680P (Amlogic S905X) into a Linux mini server and infrastructure environment for application deployment, containerization, monitoring, automation, CI/CD, Kubernetes, and GitOps. Built step by step from a mini server into a complete DevOps environment.",
    details: [
      "Armbian installation, Linux, networking, storage, Wi-Fi, and user configuration",
      "Docker and Docker Compose for microservices applications using FrankenPHP, Golang, MySQL, and PostgreSQL",
      "Monitoring with Grafana, Prometheus, Node Exporter, and cAdvisor",
      "Automation with Bash and Ansible, with HTTPS access through Cloudflare Tunnel",
      "GitLab CI/CD and Runner for image builds, v0.1.x version tagging, and Container Registry publishing",
      "K3s and kubectl on a Debian VM running on Proxmox, followed by GitOps with ArgoCD and Helm, including auto-sync, pruning, and self-healing",
    ],
    tags:
      "Linux · Docker · GitLab CI/CD · K3s · ArgoCD · Helm · Ansible · Grafana · Prometheus · Proxmox",
  },
  {
    number: "02",
    period: "Sep 2025 – Jan 2026",
    org: "UIN Ar-Raniry",
    linkedin:
      "https://www.linkedin.com/in/muhammad-risyad-rahmadi/details/projects/",
    title: "E-Commerce Sales Data ETL & Analysis",
    description:
      "Extracted and managed data from a multi-table e-commerce database containing customers, orders, products, and product details using Google BigQuery.",
    details: [
      "End-to-end ETL with SQL, from raw data to analysis-ready datasets",
      "E-commerce sales data analysis",
      "Results presented through interactive Power BI dashboards",
    ],
    tags: "Data Analysis · SQL · Google BigQuery · ETL · Power BI",
  },
];

const skillGroups = [
  {
    title: "Linux & Infrastructure",
    items: ["Linux", "Debian", "Armbian", "Proxmox"],
  },
  {
    title: "Containers",
    items: ["Docker", "Docker Compose", "Container Registry"],
  },
  {
    title: "Kubernetes & GitOps",
    items: ["K3s", "Kubectl", "Helm", "ArgoCD"],
  },
  {
    title: "Automation & CI/CD",
    items: ["Bash", "Ansible", "GitLab CI/CD"],
  },
  {
    title: "Monitoring",
    items: ["Grafana", "Prometheus", "Node Exporter", "cAdvisor"],
  },
  {
    title: "Networking",
    items: ["Cloudflare Tunnel", "DNS", "Ingress"],
  },
];

const terminalLines = [
  { text: "$ whoami", type: "p" },
  { text: "risyad", type: "o" },
  { text: "", type: "" },
  { text: "$ ls skills/", type: "p" },
  { text: "linux/ docker/ kubernetes/", type: "" },
  { text: "automation/ monitoring/", type: "" },
  { text: "", type: "" },
  { text: "$ cat current-focus.txt", type: "p" },
  { text: "CI/CD, GitOps, infrastructure", type: "d" },
  { text: "", type: "" },
  { text: "$", type: "p" },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    let terminalTimer: ReturnType<typeof setTimeout> | undefined;
    let roleTimer: ReturnType<typeof setTimeout> | undefined;

    let terminalLineIndex = 0;
    let terminalCharIndex = 0;
    let terminalCurrentSpan: HTMLSpanElement | null = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements =
      document.querySelectorAll<HTMLElement>(".rv");

    let revealObserver: IntersectionObserver | undefined;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) =>
        element.classList.add("in"),
      );
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 40px 0px",
        },
      );

      revealElements.forEach((element) =>
        revealObserver?.observe(element),
      );
    }

    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollable > 0
          ? Math.min(
              1,
              Math.max(0, window.scrollY / scrollable),
            )
          : 0;

      const bar = document.getElementById("bar");

      if (bar) {
        bar.style.transform = `scaleX(${progress})`;
      }

      root.style.setProperty("--p", String(progress));
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    const roleElement = document.getElementById("role-text");

    const roles = [
      "DevOps Engineer",
      "Linux & Infrastructure",
      "CI/CD & GitOps",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeRole = () => {
      if (!roleElement) return;

      const currentRole = roles[roleIndex];

      charIndex += deleting ? -1 : 1;
      roleElement.textContent = currentRole.slice(0, charIndex);

      let delay = deleting ? 35 : 75;

      if (!deleting && charIndex >= currentRole.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
      }

      roleTimer = setTimeout(typeRole, delay);
    };

    if (roleElement && !reducedMotion) {
      roleElement.textContent = "";
      roleTimer = setTimeout(typeRole, 500);
    }

    const tty = document.getElementById("tty");

    const resetTerminal = () => {
      if (!tty) return;

      tty.replaceChildren();
      terminalLineIndex = 0;
      terminalCharIndex = 0;
      terminalCurrentSpan = null;
    };

    const renderTerminal = () => {
      if (!tty) return;

      if (terminalLineIndex >= terminalLines.length) {
        terminalTimer = setTimeout(() => {
          resetTerminal();
          terminalTimer = setTimeout(renderTerminal, 350);
        }, 2500);

        return;
      }

      const line = terminalLines[terminalLineIndex];

      if (terminalCharIndex === 0) {
        if (terminalLineIndex > 0) {
          tty.appendChild(document.createTextNode("\n"));
        }

        terminalCurrentSpan = document.createElement("span");

        if (line.type) {
          terminalCurrentSpan.className = line.type;
        }

        tty.appendChild(terminalCurrentSpan);
      }

      if (
        terminalCharIndex < line.text.length &&
        terminalCurrentSpan
      ) {
        terminalCurrentSpan.appendChild(
          document.createTextNode(
            line.text.charAt(terminalCharIndex),
          ),
        );

        terminalCharIndex += 1;
        terminalTimer = setTimeout(renderTerminal, 32);

        return;
      }

      terminalLineIndex += 1;
      terminalCharIndex = 0;
      terminalCurrentSpan = null;

      terminalTimer = setTimeout(renderTerminal, 240);
    };

    if (tty) {
      resetTerminal();

      if (reducedMotion) {
        terminalLines.forEach((line, index) => {
          if (index > 0) {
            tty.appendChild(document.createTextNode("\n"));
          }

          const span = document.createElement("span");

          if (line.type) {
            span.className = line.type;
          }

          span.textContent = line.text;
          tty.appendChild(span);
        });
      } else {
        terminalTimer = setTimeout(renderTerminal, 700);
      }
    }

    const projectCards =
      document.querySelectorAll<HTMLElement>(".proj");

    const moveGlow = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();

      card.style.setProperty(
        "--mx",
        `${event.clientX - rect.left}px`,
      );

      card.style.setProperty(
        "--my",
        `${event.clientY - rect.top}px`,
      );
    };

    projectCards.forEach((card) => {
      card.addEventListener("mousemove", moveGlow);
    });

    return () => {
      revealObserver?.disconnect();

      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);

      if (roleTimer) clearTimeout(roleTimer);
      if (terminalTimer) clearTimeout(terminalTimer);

      projectCards.forEach((card) => {
        card.removeEventListener("mousemove", moveGlow);
      });

      root.classList.remove("js");
    };
  }, []);

  return (
    <>
      <div id="bar" />

      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#home">
            risyadrahmadi.
          </a>

          <div className="nav-right">
            <nav aria-label="Main navigation">
              <a href="#lab">Lab</a>
              <a href="#proyek">Projects</a>
              <a href="#skill">Skills</a>
              <a href="#artikel">Articles</a>
              <a href="#sertifikat">Certificates</a>
              <a href="#kontak">Contact</a>
            </nav>

            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label="Switch color theme"
              title="Switch color theme"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="grid-bg" />
          <div className="orb a" />
          <div className="orb b" />

          <div className="wrap">
            <div className="hero-layout">
              <div className="hero-left">
                <div className="hero-intro rv">
                  <div className="status">
                    <i />
                    DevOps Engineer · Linux · Automation
                  </div>

                  <h1>
                    Muhammad Risyad
                    <br />
                    <span>Rahmadi.</span>
                  </h1>

                  <p className="role">
                    <em id="role-text">DevOps Engineer</em>
                  </p>

                  <p className="lead">
                    I build and grow infrastructure through real
                    projects, from Linux, Docker, and CI/CD to
                    Kubernetes, automation, monitoring, and GitOps.
                    Every project is part of learning, experimenting,
                    and applying engineering practices hands-on.
                  </p>

                  <div className="btns">
                    <a className="btn main" href="#proyek">
                      View Projects ↗
                    </a>

                    <a className="btn" href="#kontak">
                      Contact Me
                    </a>

                    <a
                      className="btn"
                      href={CV_URL}
                      target="_self"
                    >
                      Download CV ↓
                    </a>
                  </div>
                </div>

                <div className="term rv">
                  <div className="term-top">
                    <b />
                    <b />
                    <b />
                    <span>risyad@homelab: ~</span>
                  </div>

                  <pre id="tty" aria-label="Animated terminal">
                    $ whoami
                  </pre>
                </div>
              </div>

              <div className="hero-visual rv">
                <div className="profile-card">
                  <img
                    className="profile-photo"
                    src="/image/g.png "
                    alt="Profile photo of Muhammad Risyad Rahmadi"
                  />

                  <div className="profile-caption">
                    <span className="profile-indicator" />
                    <div>
                      <strong>Muhammad Risyad Rahmadi</strong>
                      <p>Linux · Infrastructure · DevOps</p>
                    </div>
                  </div>
                </div>

                <div className="hero-metrics">
                  <div className="hero-metric">
                    <span>TECHNICAL ARTICLES</span>
                    <strong>{articleCount}</strong>
                    <span>Technical guides and documentation</span>
                  </div>

                  <div className="hero-metric">
                    <span>DEVOPS HOMELAB</span>
                    <strong>Ongoing</strong>
                    <span>Linux · Docker · Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="marq">
          <div className="track">
            {[
              "LINUX",
              "DOCKER",
              "KUBERNETES",
              "GITLAB CI/CD",
              "ANSIBLE",
              "ARGOCD",
              "GRAFANA",
              "PROMETHEUS",
              "LINUX",
              "DOCKER",
              "KUBERNETES",
              "GITLAB CI/CD",
              "ANSIBLE",
              "ARGOCD",
              "GRAFANA",
              "PROMETHEUS",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="pipeline">
          <div className="wrap">
            <div className="rv">
              <h2>CI/CD and Deployment Pipeline.</h2>
              <p className="sub">
                From code changes through building and testing to
                container images ready for deployment.
              </p>
            </div>

            <div className="pipe rv">
              <div className="pr">
                <div className="st">
                  <b />
                  <span>Code</span>
                </div>
                <div className="lk" />
                <div className="st">
                  <b />
                  <span>Build</span>
                </div>
                <div className="lk" />
                <div className="st">
                  <b />
                  <span>Test</span>
                </div>
                <div className="lk" />
                <div className="st">
                  <b />
                  <span>Registry</span>
                </div>
                <div className="lk" />
                <div className="st">
                  <b />
                  <span>Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lab" className="lab-section">
          <div className="wrap">
            <div className="lab-heading rv">
              <div className="lab-kicker">INTERACTIVE LAB</div>
              <h2>DevOps Labs and Simulations.</h2>
              <p>
                Explore CI/CD, GitOps, Kubernetes, and monitoring
                workflows through interactive lab simulations.
              </p>
            </div>

            <div className="lab-workbench-wrap rv">
              <LabWorkbench />
            </div>
          </div>
        </section>

        <section id="proyek">
          <div className="wrap">
            <div className="rv">
              <h2>Selected Projects.</h2>
              <p className="sub">
                Infrastructure and data projects, from building a
                DevOps mini server to analyzing sales data.
              </p>
            </div>

            <div className="projects">
              {projectItems.map((project) => (
                <article
                  className="proj rv"
                  key={project.number}
                >
                  <div>
                    <p className="pmeta">
                      PROJECT {project.number} ·{" "}
                      {project.period.toUpperCase()}
                    </p>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <p className="pmeta" style={{ marginTop: 12 }}>
                      {project.org}
                    </p>
                  </div>

                  <div>
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="tags">{project.tags}</div>

                    <a
                      className="article-link project-more"
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on LinkedIn{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skill">
          <div className="wrap">
            <div className="rv">
              <h2>Technical Toolkit.</h2>
              <p className="sub">
                Technologies I use and continue to learn through
                professional work and homelab projects.
              </p>
            </div>

            <div className="skills">
              {skillGroups.map((group) => (
                <div className="rv" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="artikel">
          <div className="wrap">
            <div className="article-heading rv">
              <div>
                <p className="lab-kicker">
                  ARTICLES & DOCUMENTATION
                </p>

                <h2>Articles and Documentation.</h2>
                <p className="sub">
                  Technical guides covering mini server setup,
                  automation, CI/CD, Kubernetes, and GitOps.
                </p>
              </div>

              <span className="article-count">
                {articleCount} ARTICLES
              </span>
            </div>

            <div className="article-grid">
              {articles.map((article) => (
                <article
                  className="article-card rv"
                  key={article.number}
                >
                  <div className="article-card-top">
                    <p className="pmeta">
                      ARTICLE {article.number} · GARAP MEDIA
                    </p>
                    <span className="article-number">
                      {article.number}
                    </span>
                  </div>

                  <h3>{article.title}</h3>

                  <p className="article-description">
                    {article.description}
                  </p>

                  <div className="article-tags">
                    {article.tags}
                  </div>

                  <div className="article-actions">
                    <a
                      className="article-link article-link-primary"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article{" "}
                      <span aria-hidden="true">↗</span>
                    </a>

                    <a
                      className="article-link"
                      href={article.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sertifikat">
          <div className="wrap">
            <div className="rv">
              <p className="lab-kicker">CERTIFICATIONS</p>
              <h2>Certificates and Training.</h2>
              <p className="sub">
                Certifications and training that support my
                technical knowledge and skills.
              </p>
            </div>

            <div className="cert-grid">
              {certificates.map((cert) => (
                <article
                  className="cert-card rv"
                  key={cert.title}
                >
                  <p className="pmeta">{cert.issuer}</p>
                  <h3>{cert.title}</h3>

                  <div className="cert-meta">
                    <span>{cert.date}</span>

                    {cert.credential && (
                      <span>
                        Credential ID: {cert.credential}
                      </span>
                    )}
                  </div>

                  {cert.url && (
                    <a
                      className="article-link"
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak">
          <div className="wrap rv">
            <h2>Let's Connect.</h2>
            <p className="sub">
              Open to discussions and opportunities involving DevOps,
              Linux, containers, CI/CD, Kubernetes, and infrastructure.
            </p>

            <div className="contact">
              <a
                className="btn main"
                href="https://github.com/risyadrahmadi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/muhammad-risyad-rahmadi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <a className="brand" href="#home">
            risyadrahmadi.
          </a>

          <p>
            Muhammad Risyad Rahmadi · DevOps Engineer
          </p>
        </div>
      </footer>

      <ChatBot />
    </>
  );
}
