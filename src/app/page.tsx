import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    title: "STB HG680P — Armbian & WiFi",
    description:
      "Transforming the HG680P STB into a Linux mini server using Armbian and configuring the RTL8189FS WiFi driver.",
    technologies: ["Linux", "Armbian", "Bash"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-armbian",
    article:
      "https://garapmedia.com/transformasi-stb-hg680p-menjadi-mini-server-linux-install-armbian-dan-aktifkan-wifi-rtl8189fs/",
  },
  {
    number: "02",
    title: "STB HG680P — Docker & CasaOS",
    description:
      "Building a home server platform on the HG680P STB using Docker, CasaOS, and Portainer.",
    technologies: ["Docker", "CasaOS", "Portainer"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-docker-casaos",
    article: "https://garapmedia.com/install-docker-casaos-stb-hg680p/",
  },
  {
    number: "03",
    title: "STB HG680P — Monitoring",
    description:
      "Building a monitoring stack for server and container metrics using Prometheus, Grafana, Node Exporter, and cAdvisor.",
    technologies: ["Prometheus", "Grafana", "cAdvisor"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-monitoring",
    article:
      "https://garapmedia.com/monitoring-server-stb-hg680p-grafana-prometheus/",
  },
  {
    number: "04",
    title: "STB HG680P — Bash Automation",
    description:
      "Automating Linux mini server installation and configuration using Bash scripting.",
    technologies: ["Linux", "Bash", "Automation"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-bash-automation",
    article:
      "https://garapmedia.com/bash-script-stb-hg680-p-mini-server-linux/",
  },
  {
    number: "05",
    title: "STB HG680P — Ansible",
    description:
      "Automating server deployment and configuration using Ansible.",
    technologies: ["Ansible", "Linux", "Automation"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-ansible",
    article:
      "https://garapmedia.com/otomatisasi-stb-hg680-p-menjadi-mini-server-linux-dengan-ansible/",
  },
  {
    number: "06",
    title: "Docker Compose — Image Versioning",
    description:
      "Implementing container image versioning and automated deployment using Docker Compose and GitLab CI/CD.",
    technologies: ["Docker", "Compose", "GitLab CI/CD"],
    github:
      "https://github.com/risyadrahmadi/docker-compose-container-image-versioning",
    article: "https://garapmedia.com/",
  },
  {
    number: "07",
    title: "K3s — Image Versioning with kubectl",
    description:
      "Implementing container image versioning on Kubernetes K3s using Kubernetes manifests and kubectl.",
    technologies: ["K3s", "Kubernetes", "kubectl"],
    github:
      "https://github.com/risyadrahmadi/k3s-container-image-versioning-kubectl",
    article:
      "https://garapmedia.com/k3s-container-image-versioning-kubectl/",
  },
  {
    number: "08",
    title: "K3s — ArgoCD & GitOps",
    description:
      "Implementing GitOps-based application deployment using K3s, Helm, and ArgoCD for continuous delivery.",
    technologies: ["K3s", "ArgoCD", "GitOps", "Helm"],
    github:
      "https://github.com/risyadrahmadi/k3s-container-image-versioning-argocd-gitops",
    article:
      "https://garapmedia.com/k3s-argocd-container-image-versioning-gitops/",
  },
];

const skills = [
  {
    title: "Linux",
    description:
      "Linux server administration, system configuration, networking, and shell scripting.",
  },
  {
    title: "Docker",
    description:
      "Containerization, Docker Compose, image versioning, and container deployment.",
  },
  {
    title: "Kubernetes",
    description:
      "Kubernetes and K3s deployments, services, storage, and application orchestration.",
  },
  {
    title: "Proxmox",
    description:
      "Virtual machine infrastructure, Proxmox VE, and virtualized server environments.",
  },
  {
    title: "GitLab CI/CD",
    description:
      "Automated pipelines, Git tags, Docker image builds, container registry, and deployment workflows.",
  },
  {
    title: "GitOps",
    description:
      "ArgoCD, Helm, Git-based deployment, declarative configuration, and continuous delivery.",
  },
  {
    title: "Ansible",
    description:
      "Infrastructure automation, server configuration, and repeatable deployment tasks.",
  },
  {
    title: "Monitoring",
    description:
      "Prometheus, Grafana, Node Exporter, and cAdvisor for system and container monitoring.",
  },
  {
    title: "Bash",
    description:
      "Shell scripting for Linux automation, installation, and server configuration.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-12">
        <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Developer Engineer
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Muhammad Risyad Rahmadi
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Building, automating, and deploying applications with Linux,
              Docker, Kubernetes, CI/CD, and GitOps.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://github.com/risyadrahmadi"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10"
              >
                GitHub{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="/cv"
                className="group rounded-lg border border-cyan-500 px-5 py-3 font-medium text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View CV{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/resume"
                className="group rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                View Resume{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#projects"
                className="group rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:text-white"
              >
                View Projects{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-2 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
              <img
                src="/foto.jpeg"
                alt="Muhammad Risyad Rahmadi"
                className="h-72 w-72 rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Building systems and learning by doing.
        </h2>

        <div className="mt-6 max-w-5xl space-y-4 text-lg leading-8 text-slate-400">
          <p>
            I am Muhammad Risyad Rahmadi, a Developer Engineer with an
            interest in Linux, infrastructure, automation, and modern
            application deployment.
          </p>

          <p>
            I work with technologies such as Docker, Kubernetes, Proxmox,
            GitLab CI/CD, Ansible, Prometheus, Grafana, Helm, and ArgoCD to
            build, automate, and deploy applications.
          </p>

          <p>
            This portfolio documents projects and hands-on experiments that
            reflect my learning journey and practical experience.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools and technologies I work with.
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                {skill.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Selected projects and hands-on work.
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
          A collection of projects covering Linux server management,
          containerization, automation, CI/CD, Kubernetes, virtualization,
          monitoring, and GitOps.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium text-cyan-400">
                  {project.number}
                </span>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-slate-300 transition-colors duration-300 hover:text-white"
                  >
                    GitHub{" "}
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href={project.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    Article{" "}
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-300">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          Interested in my work or want to discuss a project, collaboration,
          or technical topic? Feel free to connect with me.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <a
            href="https://github.com/risyadrahmadi"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10"
          >
            GitHub{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-risyad-rahmadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            LinkedIn{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}