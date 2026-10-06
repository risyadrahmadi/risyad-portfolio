"use client";

import Navbar from "@/components/Navbar";

const skills = [
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
];

const projects = [
  {
    title: "K3s Container Image Versioning with ArgoCD & GitOps",
    description:
      "Implemented GitOps-based Kubernetes deployment using K3s, ArgoCD, Helm, GitLab CI/CD, and versioned container images.",
  },
  {
    title: "K3s Container Image Versioning with kubectl",
    description:
      "Implemented automated Kubernetes deployment using GitLab CI/CD, kubectl, Git tags, and GitLab Container Registry.",
  },
  {
    title: "Docker Compose Container Image Versioning",
    description:
      "Built a CI/CD workflow for versioned Docker images and automated deployment using Docker Compose.",
  },
  {
    title: "HG680P Linux Mini Server",
    description:
      "Transformed an HG680P Android TV STB into a Linux mini server using Armbian, Docker, CasaOS, Portainer, and monitoring tools.",
  },
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Back to Portfolio */}
      <div className="mx-auto max-w-4xl px-6 pt-16">
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

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Resume
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Muhammad Risyad Rahmadi
              </h1>

              <h2 className="mt-3 text-xl font-medium text-slate-300">
                Developer Engineer
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Developer Engineer focused on Linux, containerization,
                infrastructure automation, CI/CD, Kubernetes, and GitOps.
              </p>
            </div>

            <img
              src="/foto.jpeg"
              alt="Muhammad Risyad Rahmadi"
              className="h-32 w-32 rounded-2xl border border-slate-800 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Social Links */}
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
              href="https://www.linkedin.com/in/muhammad-risyad-rahmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span>LinkedIn</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Professional Summary" />

          <p className="mt-5 leading-8 text-slate-400">
            Developer Engineer with hands-on experience building Linux server
            environments, containerized applications, CI/CD pipelines,
            Kubernetes deployments, and GitOps workflows. Interested in
            infrastructure automation, reliable deployment processes,
            observability, and practical engineering solutions.
          </p>
        </section>

        {/* Experience */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Experience" />

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Developer Engineer</h3>

            <p className="mt-1 font-medium text-cyan-400">Klikto.id</p>

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
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="border-b border-slate-800 py-10">
          <SectionTitle title="Selected Projects" />

          <div className="mt-7 space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <h3 className="font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
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
            href="/cv"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span>View Full CV</span>

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
        Resume
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}