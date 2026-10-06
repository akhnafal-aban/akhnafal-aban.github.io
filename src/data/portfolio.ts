// Single source of truth for the portfolio.
// Sections marked [PLACEHOLDER] need real data from the candidate before launch.
// Do not ship public claims that have no evidence row — see DECISIONS.md.

export type Accent = 'acid' | 'punch' | 'volt' | 'slime' | 'foam'

export type CaseStudy = {
  context: string
  problem: string
  myRole: string
  decisions: { choice: string; alternatives: string; tradeoff: string }[]
  hardPart: string
  result: string
  evidence: string[]
  lessons: string
}

export type Project = {
  id: string
  title: string // outcome-first, not the app name
  name: string // app name for context
  blurb: string
  stack: string[]
  role: string // ownership boundary
  meta: string
  accent: Accent
  repoUrl: string | null
  demoUrl: string | null
  caseStudySlug: string | null
  caseStudy: CaseStudy | null
}

export const positioning = {
  name: 'Noor Akhnafal Aban',
  lane: 'Software Engineer — iOS & Backend',
  oneLiner:
    'Engineer in Jakarta. Shipped a production platform for a paying business, run my own Linux servers, and build native iOS apps at the Apple Developer Academy.',
  location: 'Jakarta, Indonesia',
  graduation: '2026',
  availability: 'Open to iOS and backend roles; full-time available',
  email: 'akhnafal03@gmail.com',
  // [PLACEHOLDER] must match CV exactly — red-team found CV used +62 812-4193-5780
  phone: '+62 812-4193-5780',
  links: {
    github: 'https://github.com/akhnafal-aban',
    linkedin: 'https://linkedin.com/in/akhnaf-aban',
    youtube: 'https://youtube.com/@noorakhnafalaban',
  },
  resumeUrl: '/resume.pdf', // [PLACEHOLDER] upload ATS-clean one-page PDF to public/
}

// Hero proof chips — metrics tied to ships, not academics.
// [PLACEHOLDER] replace numbers with real, defensible ones from the evidence vault.
export const proofChips: { value: string; label: string }[] = [
  { value: '1', label: 'production platform live' },
  { value: '300+', label: 'members served' }, // [PLACEHOLDER] real RSC member count
  { value: '99.8%', label: 'uptime' }, // [PLACEHOLDER] real RSC uptime
  { value: '1', label: 'peer-reviewed paper' },
]

export const projects: Project[] = [
  {
    id: 'rsc',
    name: 'Really Sport Center',
    title: 'Runs a gym end-to-end — members, payments, check-in, reporting',
    blurb:
      'Production platform for a paying business: memberships, payments, check-in/out, dashboards, reporting, scheduled operations. Deployed and maintained on my own Linux servers over SSH.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'Linux', 'SSH'],
    role: 'Solo engineer — build, deploy, monitor, support, on-call.',
    meta: 'Aug 2025 – present · Production · freelance',
    accent: 'slime',
    repoUrl: null, // private client work — case study only
    demoUrl: null, // [PLACEHOLDER] sanitized screenshots or demo-auth URL
    caseStudySlug: 'rsc',
    caseStudy: {
      context:
        'A gym in Indonesia needed a single system to manage members, memberships, payments, daily check-in/out, dashboards, reporting, and scheduled operations. Before this, staff tracked members on paper and spreadsheets.',
      problem:
        'No centralized record; billing was manual and error-prone; check-in was slow at peak hours; reporting took hours of hand-work each month.',
      myRole:
        'I am the solo engineer: I designed the schema, built the Laravel app, deployed it to a Linux VPS, and operate it day-to-day — deploys, monitoring, backups, and user support. The client owns the business decisions; I own the system.',
      decisions: [
        {
          choice: 'Monolithic Laravel app on a single VPS over microservices',
          alternatives: 'Split into member/payments/reporting services; use managed Postgres/RDS.',
          tradeoff:
            'Simpler to operate solo, cheaper, fewer moving parts. Cost: harder to scale per-component; if the business grows 10× I would extract payments first.',
        },
        {
          choice: 'MySQL with careful indexing over Postgres',
          alternatives: 'Postgres for richer query types; a read replica for reporting.',
          tradeoff:
            'Familiarity and hosting cost. Reporting queries are the hot path — I would add a read replica before rewriting in Postgres.',
        },
        {
          choice: 'Docker + Nginx reverse proxy on Ubuntu VPS',
          alternatives: 'Kubernetes; a PaaS like Render/App Platform.',
          tradeoff:
            'I can debug the whole stack over SSH. PaaS would speed deploys but hides failures I need to see for an ops role.',
        },
      ],
      hardPart:
        'Payment reconciliation across membership renewals, discounts, and manual adjustments — making the numbers tie out at month-end and giving staff a clear error when something is off.',
      result:
        '[PLACEHOLDER] insert real numbers: members active, check-ins per day, payments processed per month, report generation time before vs after, uptime over the last quarter.',
      evidence: [
        '[PLACEHOLDER] sanitized dashboard screenshot',
        '[PLACEHOLDER] deploy log / uptime screenshot',
        '[PLACEHOLDER] client reference letter (PDF)',
        'Architecture diagram (below)',
      ],
      lessons:
        'I would add structured logging earlier — I debugged issues by reading raw files. I would also write feature tests for billing math before shipping, not after a user noticed a rounding edge case.',
    },
  },
  {
    id: 'akhnafin',
    name: 'AkhnaFin',
    title: 'Five input paths, one parse-draft-confirm pipeline — finance capture without friction',
    blurb:
      'Solo iOS app. Logging expenses is tedious, so it does not get done. AkhnaFin makes capture near-frictionless: Siri/App Intents, natural language, voice, receipt OCR, and batch entry all converge on one editable draft pipeline. Logic lives in a testable local Swift package.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    role: 'Solo — package architecture, all five input paths, parsing pipeline, tests.',
    meta: 'Jul 2026 – present · iOS',
    accent: 'acid',
    repoUrl: 'https://github.com/akhnafal-aban/AkhnaFin',
    demoUrl: null, // [PLACEHOLDER] TestFlight invite link
    caseStudySlug: 'akhnafin',
    caseStudy: {
      context:
        'A personal finance app for people who would otherwise not log expenses. The product bet: capture must be nearly frictionless, and AI output must never auto-commit.',
      problem:
        'Five very different input channels (voice, image, text, Siri, manual) each need to produce one trustworthy transaction — without the user doing data entry.',
      myRole:
        'Solo engineer. I designed the package split (Core / ServiceInterfaces / Persistence / Services), built all five input paths and the parsing pipeline, and wrote the tests.',
      decisions: [
        {
          choice: 'Local Swift package with four modules and a protocol seam',
          alternatives: 'Put all logic in the app target; use a single parser type.',
          tradeoff:
            'More files, but every module has its own test target and the app target stays UI-only. This is the artifact I can walk a reviewer through fastest.',
        },
        {
          choice: 'AI output is always an editable draft before save',
          alternatives: 'Auto-commit parsed transactions; add an undo.',
          tradeoff:
            'Extra tap for the user; in return, nothing wrong is ever saved silently. This is the core trust decision of the app.',
        },
      ],
      hardPart:
        'Receipt OCR via Vision: lighting, folded paper, and Indonesian rupiah formatting made the parser fail in ways I could not predict from clean test images. The tests had to encode the failure modes, not the happy path.',
      result:
        '[PLACEHOLDER] insert measurable: parse success rate on real receipts, session count, TestFlight users if any, or a concrete before/after on capture time.',
      evidence: [
        'Public repo: github.com/akhnafal-aban/AkhnaFin',
        '12 test files across 4 test targets',
        '[PLACEHOLDER] TestFlight link',
        '[PLACEHOLDER] screenshot of the draft-confirmation flow',
      ],
      lessons:
        'I would write the OCR failure-mode tests before the parser, not after. I would also add a "what I would change" doc to the package so reviewers see the reasoning without a call.',
    },
  },
  {
    id: 'go-api',
    name: 'asset-tracker-be',
    title: 'Go REST API with layered handler → service → repository architecture',
    blurb:
      'Backend fundamentals in a second stack: stdlib net/http routing (Go 1.22+ path patterns), clean layering, SQLite behind a repository interface, graceful shutdown, and log/slog request logging. A learning project to prove backend depth beyond a PHP framework.',
    stack: ['Go', 'net/http', 'SQLite', 'log/slog'],
    role: 'Solo — architecture, handlers, repository, tests.',
    meta: 'Sep 2026 · Learning project',
    accent: 'volt',
    repoUrl: 'https://github.com/akhnafal-aban/asset-tracker-be',
    demoUrl: null, // [PLACEHOLDER] deploy to fly.io/Render with seeded data
    caseStudySlug: 'go-api',
    caseStudy: {
      context:
        'A personal asset tracker needs a backend. I built the API in Go to prove I can reason about backend fundamentals — concurrency, storage, routing — without a framework doing the thinking for me.',
      problem:
        'Build a small, honest REST API that is easy to read, test, and operate; swap storage with one struct change; and shut down gracefully.',
      myRole: 'Solo. I wrote the layering, handlers, repository, and the README.',
      decisions: [
        {
          choice: 'stdlib net/http with Go 1.22+ path patterns, no router library',
          alternatives: 'chi/gin/echo.',
          tradeoff:
            'Less middleware convenience; in return, nothing is hidden. A reviewer can read the routing in one file.',
        },
        {
          choice: 'Repository interface over SQLite, swappable in one struct',
          alternatives: 'ORM; direct SQL in handlers.',
          tradeoff:
            'More code; in return, swapping to Postgres is a one-struct change and the storage logic is testable.',
        },
      ],
      hardPart:
        'Graceful shutdown that drains in-flight requests with a timeout — getting the signal handling and the wait right without a half-closed server.',
      result:
        '[PLACEHOLDER] insert: number of endpoints, test coverage %, a load-test req/s number, or a deployed URL with seeded data.',
      evidence: [
        'Public repo: github.com/akhnafal-aban/asset-tracker-be',
        '[PLACEHOLDER] CI badge once GitHub Actions is added',
        '[PLACEHOLDER] deployed demo URL',
      ],
      lessons:
        'Currently this is a small CRUD MVP (hardcoded default user, auth out of scope). To honestly call Go a skill I would add: real auth, 10+ tests with coverage, one non-CRUD feature (reports or background jobs), docker-compose, CI, and a deployed demo. Until then I present it as a learning project, not production Go.',
    },
  },
  {
    id: 'danantara',
    name: 'Danantara-Research',
    title: 'Topic modeling of 177k+ tweets — full reproducible Python pipeline',
    blurb:
      'Co-authored research: cleaning (NLTK), BERTopic modeling with indoSBERT embeddings, UMAP + HDBSCAN, Optuna hyperparameter tuning with a coherence-based objective, and a published journal article. Evidence of investigation rigor I bring to debugging.',
    stack: ['Python', 'BERTopic', 'indoSBERT', 'UMAP', 'HDBSCAN', 'Optuna', 'NLTK'],
    role: 'Co-author — pipeline, modeling, tuning, write-up.',
    meta: '2026 · Research · co-authored',
    accent: 'punch',
    repoUrl: 'https://github.com/akhnafal-aban/Danantara-Research',
    demoUrl: null,
    caseStudySlug: null,
    caseStudy: null,
  },
]

// English technical writing — [PLACEHOLDER] write 2-3 real posts before launch.
export const writing: {
  title: string
  slug: string
  excerpt: string
  date: string
  placeholder: boolean
}[] = [
  {
    title: 'Why AI output is always a draft before save in AkhnaFin',
    slug: 'ai-output-as-draft',
    excerpt:
      'The trust decision at the center of a finance app: auto-commit vs editable draft, and why the extra tap is worth it.',
    date: '[PLACEHOLDER]',
    placeholder: true,
  },
  {
    title: 'Debugging a payment reconciliation bug at 5pm — a Laravel incident',
    slug: 'laravel-reconciliation-incident',
    excerpt:
      'A billing edge case a user caught, what my logs showed, what I assumed first (wrong), and what I changed.',
    date: '[PLACEHOLDER]',
    placeholder: true,
  },
  {
    title: 'Why I used stdlib net/http instead of a router library in Go',
    slug: 'go-stdlib-routing',
    excerpt:
      'The trade-off: less convenience, nothing hidden. A walkthrough of the routing file and what a reviewer reads in 60 seconds.',
    date: '[PLACEHOLDER]',
    placeholder: true,
  },
]

// Recommendations — [PLACEHOLDER] get 2-3 attributed quotes before launch.
export const recommendations: {
  quote: string
  name: string
  title: string
  org: string
  relation: string
  placeholder: boolean
}[] = [
  {
    quote:
      '[PLACEHOLDER] Ask the gym owner for a 20-40 word quote: what I built, how it ran, whether they would take a call.',
    name: '[PLACEHOLDER — gym owner name]',
    title: 'Owner',
    org: 'Really Sport Center',
    relation: 'Client',
    placeholder: true,
  },
  {
    quote:
      '[PLACEHOLDER] Ask a co-author or teammate for a quote on rigor/collaboration.',
    name: '[PLACEHOLDER — co-author or teammate]',
    title: '[PLACEHOLDER]',
    org: '[PLACEHOLDER]',
    relation: 'Co-author / teammate',
    placeholder: true,
  },
]

export const roles = [
  {
    title: 'Junior Developer — iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'Feb 2026 – present',
    kind: 'Contract',
    points: [
      'Build iOS applications with Swift and SwiftUI through project-based product development.',
      'Extend a backend and infrastructure foundation into native iOS implementation and product thinking.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 – present',
    kind: 'Freelance',
    points: [
      'Build and operate an end-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations.',
      'Deploy and maintain staging + production on my own Linux servers over SSH; remote maintenance, monitoring, troubleshooting.',
    ],
  },
  {
    title: 'Back End Developer',
    org: 'Faculty of Industrial Technology, UII',
    period: 'May 2025 – Jan 2026',
    kind: 'Part-time',
    points: [
      'Built a Laravel role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, filtered CSV exports for analysis.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 – May 2025',
    kind: 'Remote',
    points: [
      'Developed and optimized backend features with Laravel Livewire.',
      'Improved database queries and backend logic; collaborated across functions for reliable integration.',
    ],
  },
]

export const education = {
  school: 'Universitas Islam Indonesia',
  place: 'Yogyakarta, Indonesia',
  degree: 'Bachelor of Informatics — Faculty of Industrial Technology',
  years: '2022 – 2026',
  gpa: '3.84 / 4.00',
}

export const awards = [
  'GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to nationals.',
  'Apple Developer Academy @ UC Jakarta admit (competitive, national).',
  'GitHub: Pull Shark ×2, Pair Extraordinaire, YOLO.',
]

export const publication = {
  title: 'Pemodelan Topik Cuitan tentang Danantara',
  subtitle:
    'Topic Modeling of Tweets about Danantara using BERTopic and indoSBERT embeddings',
  authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
  venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
  issue: 'Vol 11 No 1, January 2026',
  indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
  accent: 'acid' as const,
  repo: 'https://github.com/akhnafal-aban/Danantara-Research',
}

// Skills are demonstrated per project above, not a standalone keyword wall.
// This list is only for the resume/ATS mapping and is intentionally short.
export const skillGroups = [
  {
    label: 'Languages',
    items: ['PHP', 'Go', 'Swift', 'Python', 'SQL', 'JavaScript', 'Java'],
    accent: 'acid' as const,
  },
  {
    label: 'Backend',
    items: ['Laravel', 'REST APIs', 'MySQL', 'SQLite', 'Redis', 'Authentication'],
    accent: 'slime' as const,
  },
  {
    label: 'Infrastructure',
    items: ['Linux', 'Docker', 'Nginx', 'systemd', 'CI/CD', 'SSH', 'VPS'],
    accent: 'volt' as const,
  },
  {
    label: 'iOS',
    items: ['SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech'],
    accent: 'punch' as const,
  },
]
