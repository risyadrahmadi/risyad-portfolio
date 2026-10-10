"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import "./ChatBot.css";

type Lang = "en" | "id";
type Link = { label: string; href: string };
type Reply = { text: string; links?: Link[] };
type Msg = { id: number; from: "bot" | "user"; text: string; links?: Link[] };
type Intent = { test: RegExp; en: Reply; id: Reply };

const LINKEDIN = "https://www.linkedin.com/in/muhammad-risyad-rahmadi/";
const GITHUB = "https://github.com/risyadrahmadi";
const CV_URL = "/api/cv";

// Urutan penting: intent yang paling spesifik di atas.
const intents: Intent[] = [
  {
    test: /\b(cv|resume|resumé|curriculum|unduh|download)\b/i,
    en: {
      text: "Sure, here is Risyad's CV.",
      links: [{ label: "Download CV ↓", href: CV_URL }],
    },
    id: {
      text: "Tentu, ini CV Risyad.",
      links: [{ label: "Download CV ↓", href: CV_URL }],
    },
  },
  {
    test: /(sertifik|certif|credential|aws|google cloud|dicoding)/i,
    en: {
      text: "Risyad has 9 certificates: AWS Cloud Practitioner Essentials from Dicoding, plus 8 Google Cloud Skills Boost badges (Cloud Engineering, SRE, Security & Operations, and more).",
      links: [{ label: "See certificates", href: "#sertifikat" }],
    },
    id: {
      text: "Risyad punya 9 sertifikat: AWS Cloud Practitioner Essentials dari Dicoding, ditambah 8 badge Google Cloud Skills Boost (Cloud Engineering, SRE, Security & Operations, dan lainnya).",
      links: [{ label: "Lihat sertifikat", href: "#sertifikat" }],
    },
  },
  {
    test: /\b(lab|simulasi|simulation|interactive|interaktif)\b/i,
    en: {
      text: "The Lab section has interactive simulations for CI/CD, GitOps, Kubernetes, and monitoring workflows.",
      links: [{ label: "Open the Lab", href: "#lab" }],
    },
    id: {
      text: "Bagian Lab berisi simulasi interaktif untuk alur CI/CD, GitOps, Kubernetes, dan monitoring.",
      links: [{ label: "Buka Lab", href: "#lab" }],
    },
  },
  {
    test: /(artikel|article|blog|tulisan|garap)/i,
    en: {
      text: "There are 8 technical articles on Garap Media, from Armbian and Docker on the STB HG680P to K3s image versioning with ArgoCD (GitOps). Each one has a GitHub repo.",
      links: [{ label: "Browse articles", href: "#artikel" }],
    },
    id: {
      text: "Ada 8 artikel teknis di Garap Media, dari Armbian dan Docker di STB HG680P sampai versioning image K3s dengan ArgoCD (GitOps). Masing-masing punya repo GitHub.",
      links: [{ label: "Lihat artikel", href: "#artikel" }],
    },
  },
  {
    test: /(proyek|project|portfolio|portofolio|karya)/i,
    en: {
      text: "Two highlights: (1) turning an STB HG680P into a DevOps mini server with Docker, GitLab CI/CD, K3s, ArgoCD and Helm; (2) an E-Commerce Sales Data ETL & Analysis project with SQL, BigQuery and Power BI.",
      links: [{ label: "See projects", href: "#proyek" }],
    },
    id: {
      text: "Dua proyek unggulan: (1) mengubah STB HG680P jadi mini server DevOps dengan Docker, GitLab CI/CD, K3s, ArgoCD dan Helm; (2) proyek ETL & analisis data penjualan e-commerce dengan SQL, BigQuery dan Power BI.",
      links: [{ label: "Lihat proyek", href: "#proyek" }],
    },
  },
  {
    test: /(skill|keahlian|stack|teknologi|technolog|tools|bisa apa)/i,
    en: {
      text: "Linux (Debian, Armbian, Proxmox), Docker & Compose, K3s, kubectl, Helm, ArgoCD, Bash, Ansible, GitLab CI/CD, Grafana, Prometheus, and Cloudflare Tunnel.",
      links: [{ label: "Full toolkit", href: "#skill" }],
    },
    id: {
      text: "Linux (Debian, Armbian, Proxmox), Docker & Compose, K3s, kubectl, Helm, ArgoCD, Bash, Ansible, GitLab CI/CD, Grafana, Prometheus, dan Cloudflare Tunnel.",
      links: [{ label: "Lihat toolkit", href: "#skill" }],
    },
  },
  {
    test: /(kontak|contact|hubungi|email|hire|rekrut|linkedin|github|reach)/i,
    en: {
      text: "The best way to reach Risyad is through LinkedIn. His code lives on GitHub.",
      links: [
        { label: "LinkedIn ↗", href: LINKEDIN },
        { label: "GitHub ↗", href: GITHUB },
      ],
    },
    id: {
      text: "Cara terbaik menghubungi Risyad adalah lewat LinkedIn. Kodenya ada di GitHub.",
      links: [
        { label: "LinkedIn ↗", href: LINKEDIN },
        { label: "GitHub ↗", href: GITHUB },
      ],
    },
  },
  {
    test: /(siapa|who|about|tentang|profil|profile|experience|pengalaman|kerja|klikto)/i,
    en: {
      text: "Muhammad Risyad Rahmadi is a DevOps Engineer at Klikto ID. He focuses on Linux, Docker, CI/CD, Kubernetes, and GitOps, mostly through hands-on homelab projects.",
      links: [{ label: "LinkedIn ↗", href: LINKEDIN }],
    },
    id: {
      text: "Muhammad Risyad Rahmadi adalah DevOps Engineer di Klikto ID. Fokusnya Linux, Docker, CI/CD, Kubernetes, dan GitOps, terutama lewat proyek homelab.",
      links: [{ label: "LinkedIn ↗", href: LINKEDIN }],
    },
  },
  {
    test: /(thank|terima kasih|makasih|thx)/i,
    en: { text: "You're welcome! Anything else you'd like to know?" },
    id: { text: "Sama-sama! Ada lagi yang ingin ditanyakan?" },
  },
  {
    test: /\b(hi|hello|hey|hai|halo|hallo|pagi|siang|malam)\b/i,
    en: { text: "Hi! Ask me about Risyad's projects, skills, certificates, or CV." },
    id: { text: "Halo! Tanyakan soal proyek, skill, sertifikat, atau CV Risyad." },
  },
];

const fallback: Record<Lang, Reply> = {
  en: {
    text: "I'm a simple auto-reply bot, so I only know a few topics. Try Projects, Skills, Certificates, Articles, or CV.",
  },
  id: {
    text: "Aku cuma bot balasan otomatis sederhana, jadi topiknya terbatas. Coba tanya Proyek, Skill, Sertifikat, Artikel, atau CV.",
  },
};

const ID_HINT =
  /\b(apa|siapa|halo|hai|proyek|sertifikat|keahlian|kontak|bisa|tolong|kamu|dia|ada|punya|terima|makasih|kerja|pengalaman|unduh|tentang|artikel|dong|gimana|bagaimana|lihat)\b/i;

const chips = [
  "Who is Risyad?",
  "Projects",
  "Skills",
  "Certificates",
  "Download CV",
];

const greeting: Msg = {
  id: 0,
  from: "bot",
  text: "Hi, I'm Risyad's portfolio assistant. This is a simple auto-reply bot. What would you like to know?",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([greeting]);

  const nextId = useRef(1);
  const lang = useRef<Lang>("en");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    if (ID_HINT.test(text)) lang.current = "id";

    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text },
    ]);
    setInput("");
    setBusy(true);

    const intent = intents.find((item) => item.test.test(text));
    const reply = intent ? intent[lang.current] : fallback[lang.current];

    timer.current = setTimeout(
      () => {
        setMessages((prev) => [
          ...prev,
          { id: nextId.current++, from: "bot", ...reply },
        ]);
        setBusy(false);
      },
      600 + Math.random() * 500,
    );
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    send(input);
  };

  const toggle = () => {
    setOpen((value) => !value);
    setNudge(false);
  };

  return (
    <div className="cb-root">
      {open && (
        <section
          className="cb-panel"
          role="dialog"
          aria-label="Portfolio chat assistant"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          <header className="cb-head">
            <div className="cb-avatar" aria-hidden="true">
              R
            </div>
            <div className="cb-title">
              <strong>Risyad Bot</strong>
              <span>
                <i /> Auto-reply · demo
              </span>
            </div>
            <button
              type="button"
              className="cb-x"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="cb-body" ref={bodyRef} aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`cb-msg ${msg.from}`}>
                <p>{msg.text}</p>
                {msg.links && (
                  <div className="cb-links">
                    {msg.links.map((link) => {
                      const external = link.href.startsWith("http");
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {busy && (
              <div className="cb-msg bot cb-typing" aria-label="Typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="cb-chips">
            {chips.map((chip) => (
              <button
                type="button"
                key={chip}
                disabled={busy}
                onClick={() => send(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <form className="cb-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message..."
              aria-label="Message"
              maxLength={200}
            />
            <button type="submit" aria-label="Send" disabled={busy || !input.trim()}>
              ↑
            </button>
          </form>
        </section>
      )}

      {!open && nudge && (
        <button type="button" className="cb-nudge" onClick={toggle}>
          Hi! Ask me about Risyad
        </button>
      )}

      <button
        type="button"
        className="cb-fab"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={toggle}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path
              d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 3.5V17H4a1 1 0 01-1-1V6a1 1 0 011-1z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="8.5" cy="11" r="1.1" fill="currentColor" />
            <circle cx="12" cy="11" r="1.1" fill="currentColor" />
            <circle cx="15.5" cy="11" r="1.1" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
