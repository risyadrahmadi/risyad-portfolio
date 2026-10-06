"use client";

import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    title: "K3s — ArgoCD & GitOps",
    description:
      "Implementing GitOps-based application deployment using K3s, Helm, ArgoCD, and versioned container images.",
    github:
      "https://github.com/risyadrahmadi/k3s-container-image-versioning-argocd-gitops",
    article:
      "https://garapmedia.com/k3s-argocd-container-image-versioning-gitops/",
  },
  {
    number: "02",
    title: "K3s — Container Image Versioning with kubectl",
    description:
      "Implementing container image versioning and Kubernetes deployment using GitLab CI/CD, kubectl, and GitLab Container Registry.",
    github:
      "https://github.com/risyadrahmadi/k3s-container-image-versioning-kubectl",
    article:
      "https://garapmedia.com/k3s-container-image-versioning-kubectl/",
  },
  {
    number: "03",
    title: "Docker Compose — Container Image Versioning",
    description:
      "Building and deploying versioned Docker images using Docker Compose and GitLab CI/CD.",
    github:
      "https://github.com/risyadrahmadi/docker-compose-container-image-versioning",
    article: "https://garapmedia.com/kategori/teknologi/programming-dev/",
  },
  {
    number: "04",
    title: "STB HG680P — Armbian & WiFi",
    description:
      "Transforming the HG680P STB into a Linux mini server using Armbian and configuring the RTL8189FS WiFi driver.",
    github:
      "https://github.com/risyadrahmadi/stb-hg680p-armbian",
    article:
      "https://garapmedia.com/install-armbian-stb-hg680p-wifi-rtl8189fs/",
  },
  {
    number: "05",
    title: "STB HG680P — Bash Automation",
    description:
      "Automating Linux mini server installation and configuration using Bash scripting.",
    github:
      "https://github.com/risyadrahmadi/stb-hg680p-bash-automation",
    article:
      "https://garapmedia.com/bash-script-stb-hg680-p-mini-server-linux/",
  },
  {
    number: "06",
    title: "STB HG680P — Monitoring",
    description:
      "Building a monitoring stack using Prometheus, Grafana, Node Exporter, and cAdvisor.",
    github:
      "https://github.com/risyadrahmadi/stb-hg680p-monitoring",
    article:
      "https://garapmedia.com/monitoring-server-stb-hg680p-grafana-prometheus/",
  },
  {
    number: "07",
    title: "STB HG680P — Docker & CasaOS",
    description:
      "Building a home server platform using Docker, CasaOS, and Portainer.",
    github:
      "https://github.com/risyadrahmadi/stb-hg680p-docker-casaos",
    article:
      "https://garapmedia.com/install-docker-casaos-stb-hg680p/",
  },
  {
    number: "08",
    title: "STB HG680P — Ansible",
    description:
      "Automating server deployment and configuration using Ansible.",
    github:
      "https://github.com/risyadrahmadi/stb-hg680p-ansible",
    article:
      "https://garapmedia.com/otomatisasi-stb-hg680-p-menjadi-mini-server-linux-dengan-ansible/",
  },
];

export default function CV() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Back to Portfolio */}
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <a
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Portfolio
        </a>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                CV
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Muhammad Risyad Rahmadi
              </h1>

              <h2 className="mt-3 text-xl font-medium text-slate-300">
                Developer Engineer
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Developer Engineer focused on Linux, infrastructure,
                automation, containerization, CI/CD, Kubernetes, and GitOps.
              </p>
            </div>

            <img
              src="/foto.jpeg"
              alt="Muhammad Risyad Rahmadi"
              className="h-36 w-36 rounded-2xl border border-slate-800 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/risyadrahmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span>GitHub</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-risyad-rahmadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span>LinkedIn</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://garapmedia.com/kategori/teknologi/programming-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span>Garap Media</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </header>

        {/* Profile */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Profile" />

          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-400">
            <p>
              I am a Developer Engineer with an interest in Linux,
              infrastructure, automation, and modern application deployment.
            </p>

            <p>
              I work with Docker, Kubernetes, Proxmox, GitLab CI/CD, Ansible,
              Prometheus, Grafana, Helm, and ArgoCD to build, automate, and
              deploy applications.
            </p>

            <p>
              My work focuses on hands-on engineering, practical
              experimentation, and building reliable deployment workflows.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Experience" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Developer Engineer</h3>

            <p className="mt-1 font-medium text-cyan-400">
              Klikto.id
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Work with Linux-based development and deployment environments.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Build and manage applications using Docker and Docker Compose.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Develop CI/CD workflows using GitLab CI/CD and container
                registries.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Work with Kubernetes K3s and kubectl for application
                deployment.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Implement GitOps workflows using ArgoCD and Helm.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Automate infrastructure tasks using Bash and Ansible.
              </li>

              <li>
                <span className="mr-2 text-cyan-400">▹</span>
                Build monitoring environments using Prometheus and Grafana.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Technical Skills" />

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Linux",
              "Docker",
              "Docker Compose",
              "Kubernetes",
              "K3s",
              "GitLab CI/CD",
              "ArgoCD",
              "GitOps",
              "Helm",
              "Ansible",
              "Bash",
              "Prometheus",
              "Grafana",
              "Proxmox",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="print-page-break border-b border-slate-800 py-10"
        >
          <SectionTitle title="Selected Projects" />

          <div className="mt-7 space-y-5">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-white">
                    {project.title}
                  </h3>

                  <span className="text-sm font-medium text-cyan-400">
                    {project.number}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                  >
                    GitHub
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href={project.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    Article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Education" />

          <h3 className="mt-6 text-lg font-semibold">
            Bachelor&apos;s Degree in Information Technology Education
          </h3>

          <p className="mt-2 leading-7 text-slate-400">
            Academic background in information technology education with
            continued hands-on learning in software development,
            infrastructure, automation, and modern deployment technologies.
          </p>
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Portfolio
          </a>

          <a
            href="/resume"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span>View Resume</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <button
            onClick={() => window.print()}
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span>Print / Save as PDF</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
        CV
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}