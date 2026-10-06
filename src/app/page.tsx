import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    title: "STB HG680P — Armbian & WiFi",
    description:
      "Transformasi STB HG680P menjadi mini server Linux menggunakan Armbian dan konfigurasi driver WiFi RTL8189FS.",
    technologies: ["Linux", "Armbian", "Bash"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-armbian",
    article:
      "https://garapmedia.com/install-armbian-stb-hg680p-wifi-rtl8189fs/",
  },
  {
    number: "02",
    title: "STB HG680P — Docker & CasaOS",
    description:
      "Membangun home server berbasis STB HG680P dengan Docker, CasaOS, dan Portainer.",
    technologies: ["Docker", "CasaOS", "Portainer"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-docker-casaos",
    article: "https://garapmedia.com/install-docker-casaos-stb-hg680p/",
  },
  {
    number: "03",
    title: "STB HG680P — Monitoring",
    description:
      "Membangun sistem monitoring untuk server dan container menggunakan Prometheus, Grafana, Node Exporter, dan cAdvisor.",
    technologies: ["Prometheus", "Grafana", "cAdvisor"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-monitoring",
    article:
      "https://garapmedia.com/membangun-sistem-monitoring-pada-home-server/",
  },
  {
    number: "04",
    title: "STB HG680P — Bash Automation",
    description:
      "Otomatisasi instalasi dan konfigurasi mini server menggunakan Bash Script.",
    technologies: ["Linux", "Bash", "Automation"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-bash-automation",
    article:
      "https://garapmedia.com/transformasi-stb-hg680-p-menjadi-mini-server-linux-dengan-bash-script/",
  },
  {
    number: "05",
    title: "STB HG680P — Ansible",
    description:
      "Otomatisasi deployment dan konfigurasi server menggunakan Ansible.",
    technologies: ["Ansible", "Linux", "Automation"],
    github: "https://github.com/risyadrahmadi/stb-hg680p-ansible",
    article:
      "https://garapmedia.com/otomatisasi-stb-hg680-p-menjadi-mini-server-linux-dengan-ansible/",
  },
  {
    number: "06",
    title: "Docker Compose — Image Versioning",
    description:
      "Implementasi container image versioning menggunakan Docker Compose dan GitLab CI/CD.",
    technologies: ["Docker", "Compose", "GitLab CI/CD"],
    github:
      "https://github.com/risyadrahmadi/docker-compose-container-image-versioning",
    article: "https://garapmedia.com/docker-compose-container-image-versioning/",
  },
  {
    number: "07",
    title: "K3s — Image Versioning dengan Kubectl",
    description:
      "Implementasi container image versioning pada K3s menggunakan Kubernetes manifest dan kubectl.",
    technologies: ["K3s", "Kubernetes", "kubectl"],
    github:
      "https://github.com/risyadrahmadi/k3s-container-image-versioning-kubectl",
    article:
      "https://garapmedia.com/k3s-container-image-versioning-dengan-kubectl/",
  },
  {
    number: "08",
    title: "K3s — ArgoCD & GitOps",
    description:
      "Implementasi deployment berbasis GitOps menggunakan K3s, Helm, dan ArgoCD untuk continuous delivery.",
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
      "Kubernetes, K3s, deployments, services, storage, and application orchestration.",
  },
  {
    title: "CI/CD",
    description:
      "GitLab CI/CD pipelines, automated builds, container images, and deployment workflows.",
  },
  {
    title: "GitOps",
    description:
      "ArgoCD, Git-based deployment, declarative configuration, and continuous delivery.",
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
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Developer Engineer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Muhammad Risyad Rahmadi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Building, automating, and deploying applications with Linux,
          Docker, Kubernetes, CI/CD, and GitOps.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/risyadrahmadi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            GitHub
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-slate-500"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Building systems and learning by doing.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
          <p>
            I am Muhammad Risyad Rahmadi, a Developer Engineer with an
            interest in Linux, infrastructure, automation, and modern
            application deployment.
          </p>

          <p>
            I work with technologies such as Docker, Kubernetes, GitLab
            CI/CD, Ansible, Prometheus, Grafana, and ArgoCD to build,
            automate, and deploy applications.
          </p>

          <p>
            This portfolio documents projects and hands-on experiments that
            reflect my learning journey and practical experience.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools and technologies I work with.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="text-lg font-semibold">{skill.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Selected projects and hands-on work.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          A collection of projects covering Linux server management,
          containerization, automation, CI/CD, Kubernetes, and GitOps.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/70"
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
                    className="text-slate-300 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    Article ↗
                  </a>
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
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
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Interested in my work or want to discuss a project, collaboration,
          or technical topic? Feel free to connect with me.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/risyadrahmadi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/risyadrahmadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-slate-500"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}