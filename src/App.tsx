import { useEffect, useState } from "react";
import HandwritingText from "@/components/ui/handwriting-text";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ParticleDrift from "@/components/ui/particle-drift";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const PROOF = [
  { value: "2026—", label: "Apple Developer Academy @ UC Jakarta" },
  { value: "prod", label: "Gym platform in production, own Linux servers" },
  { value: "2026", label: "Published: Rabit Jurnal Teknologi & SI 11(1)" },
  { value: "top 6", label: "GEMASTIK 2025 national round, UII" },
];

const WORK = [
  {
    path: "akhnafal/akhnafin",
    title: "AkhnaFin",
    oneLiner:
      "Personal finance capture. Five input paths — Siri, natural language, voice, receipt OCR, manual — one parse-draft-confirm pipeline.",
    stack: ["Swift", "SwiftUI", "Foundation Models", "CloudKit"],
    tag: "iOS",
    href: "https://github.com/akhnafal-aban/AkhnaFin",
  },
  {
    path: "akhnafal/really-sport-center",
    title: "Really Sport Center",
    oneLiner:
      "End-to-end gym management: members, payments, check-in/out, dashboards, reporting. Deployed and maintained on my own Linux servers.",
    stack: ["Laravel", "MySQL", "Linux", "SSH"],
    tag: "Web / Production",
    href: null,
  },
  {
    path: "akhnafal/danantara-research",
    title: "Danantara Topic Modeling",
    oneLiner:
      "BERTopic + indoSBERT over Twitter conversations about Danantara. Full pipeline from cleaning to the published report.",
    stack: ["Python", "BERTopic", "indoSBERT"],
    tag: "Research",
    href: "https://github.com/akhnafal-aban/Danantara-Research",
  },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="nav-glass flex w-full max-w-6xl items-center justify-between rounded-full py-2.5 pl-6 pr-2.5">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-white transition-colors hover:text-accent"
        >
          noor@akhnafal:~$
        </a>
        <nav className="hidden gap-2 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-body/80 transition-colors hover:bg-white/5 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <LiquidButton
          size="sm"
          className="rounded-full font-mono text-xs uppercase tracking-widest text-body hover:text-accent md:hidden"
          onClick={() => (window.location.href = "mailto:akhnafal03@gmail.com")}
        >
          Contact
        </LiquidButton>
        <span className="hidden md:block" aria-hidden="true" />
      </div>
    </header>
  );
}

function Hero({ reduced }: { reduced: boolean }) {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden">
      {!reduced && (
        <div className="absolute inset-0">
          <ParticleDrift mode="dark" hue={-67} speed={0.7} className="h-full w-full" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_60%_45%,rgba(18,18,18,0.82)_0%,rgba(18,18,18,0.45)_45%,rgba(18,18,18,0.2)_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-6">
        <p className="mb-6 inline-flex w-max items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Jakarta · iOS + Backend
        </p>
        <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Noor Akhnafal Aban
        </h1>
        <p className="mt-4 font-mono text-base text-body sm:text-lg lg:text-xl">
          Software engineer. iOS and backend. Building{" "}
          <span className="whitespace-nowrap">
            things that{" "}
            <span className="inline-block align-baseline">
              <HandwritingText
                words={["run.", "ship.", "deploy.", "publish."]}
                className="text-accent"
                height="1.15em"
                interval={3600}
                fontUrl="/fonts/handwriting.ttf"
              />
            </span>
          </span>
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-body sm:mt-8 sm:text-base">
          Laravel platforms running in production on my own Linux servers. Native iOS apps with
          on-device AI. The occasional research notebook that ends up in a journal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
          <LiquidButton
            size="lg"
            className="rounded-full font-mono text-sm font-medium text-accent hover:text-white"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })}
          >
            See the work
          </LiquidButton>
          <LiquidButton
            size="lg"
            className="rounded-full font-mono text-sm text-body hover:text-accent"
            onClick={() => (window.location.href = "mailto:akhnafal03@gmail.com")}
          >
            akhnafal03@gmail.com
          </LiquidButton>
        </div>
      </div>
      <div className="relative z-10">
        <ProofStrip />
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <div className="border-t border-white/10 bg-[rgba(22,22,20,0.55)] backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
        {PROOF.map((item) => (
          <div key={item.label} className="px-4 py-5 sm:px-6 sm:py-7">
            <div className="font-mono text-xl font-bold text-accent sm:text-2xl">{item.value}</div>
            <div className="mt-1.5 text-xs leading-relaxed text-body sm:mt-2 sm:text-sm">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ hash, title }: { hash: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{hash}</span>
      <h2 className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading hash="#" title="Selected work" />
      <div className="grid gap-6 md:grid-cols-3">
        {WORK.map((item) => {
          const inner = (
            <>
              <div className="font-mono text-xs text-accent/80">{item.path}</div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-mono text-xl font-bold text-white">{item.title}</h3>
                <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-body">
                  {item.tag}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{item.oneLiner}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line/80 px-2 py-0.5 font-mono text-[11px] text-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          );
          const cardClass =
            "group flex flex-col rounded-2xl border border-line bg-elevated p-6 transition-colors hover:border-accent/60";
          return item.href ? (
            <a key={item.path} href={item.href} target="_blank" rel="noreferrer" className={cardClass}>
              {inner}
            </a>
          ) : (
            <div key={item.path} className={cardClass}>
              {inner}
            </div>
          );
        })}
      </div>
      <p className="mt-8 font-mono text-xs text-body/70">
        More on GitHub — github.com/akhnafal-aban
      </p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-line/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading hash="#" title="About" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-body">
            <p>
              Backend-leaning generalist. Laravel, Python, Swift. I build things that run — apps,
              pipelines, and the occasional research notebook.
            </p>
            <p>
              Currently a Junior Developer (iOS) at the Apple Developer Academy @ UC Jakarta, while
              maintaining a production gym-management platform for Really Sport Center — deployed,
              monitored, and troubleshot over SSH on my own Linux servers.
            </p>
            <p>
              Informatics at Universitas Islam Indonesia (GPA 3.87). Published author in topic
              modeling. GEMASTIK 2025 national-round finalist. Based in Jakarta; from Bojonegoro;
              educated in Yogyakarta.
            </p>
          </div>
          <div className="grid gap-3 font-mono text-sm">
            {[
              ["languages", "PHP · SQL · Java · JS · Python · Go · Swift"],
              ["ios", "SwiftUI · SwiftData · CloudKit · Foundation Models · Vision"],
              ["backend", "Laravel · Livewire · REST · MySQL · PostgreSQL · Redis"],
              ["infra", "Linux · Docker · Nginx · systemd · VPS · CI/CD"],
              ["agentic ai", "OpenCode · MCP · skill authoring"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-1 rounded-lg border border-line/70 bg-bg px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="w-24 shrink-0 text-xs uppercase tracking-wider text-accent">
                  {k}
                </span>
                <span className="text-body">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading hash="#" title="Publications" />
      <div className="max-w-3xl rounded-2xl border border-line bg-elevated p-8">
        <div className="font-mono text-xs text-accent/80">Rabit : Jurnal Teknologi dan Sistem Informasi</div>
        <h3 className="mt-3 font-mono text-xl font-bold leading-snug text-white">
          Pemodelan Topik Cuitan tentang Danantara
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-body">
          Aban, N.A., &amp; Ratnasari, C.I. (2026). Topic modeling of Twitter conversations about
          Danantara using BERTopic and indoSBERT embeddings. Vol 11 No 1, January 2026. LPPM
          Universitas Riau. Indexed in Garuda.
        </p>
        <LiquidButton
          size="lg"
          className="mt-6 rounded-full font-mono text-sm text-accent hover:text-white"
          onClick={() =>
            window.open("https://github.com/akhnafal-aban/Danantara-Research", "_blank", "noopener")
          }
        >
          akhnafal/danantara-research →
        </LiquidButton>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-body/70">
          Open to iOS or backend roles in Jakarta · freelance platform work
        </p>
        <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s talk.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { label: "email", value: "akhnafal03@gmail.com", href: "mailto:akhnafal03@gmail.com", external: false },
            { label: "github", value: "akhnafal-aban", href: "https://github.com/akhnafal-aban", external: true },
            { label: "linkedin", value: "akhnaf-aban", href: "https://www.linkedin.com/in/akhnaf-aban/", external: true },
          ].map((link) => (
            <LiquidButton
              key={link.label}
              size="lg"
              className="rounded-full font-mono text-sm text-body hover:text-accent"
              onClick={() =>
                link.external
                  ? window.open(link.href, "_blank", "noopener")
                  : (window.location.href = link.href)
              }
            >
              <span className="text-body/60">{link.label}/</span> {link.value}
            </LiquidButton>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-body/60">
          Noor Akhnafal Aban — Software Engineer | iOS | Backend Systems
        </p>
        <p className="font-mono text-xs text-body/60">
          built with Vite + React · last updated 2026-09
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="min-h-screen bg-bg font-sans text-body">
      <Nav />
      <main>
        <Hero reduced={reduced} />
        <Work />
        <About />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
