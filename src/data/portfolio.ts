export type Project = {
  id: string
  title: string
  blurb: string
  stack: string[]
  accent: 'acid' | 'punch' | 'volt' | 'slime' | 'foam'
  repo?: string
  meta?: string
  bullets?: string[]
}

export const profile = {
  name: 'Noor Akhnafal Aban',
  first: 'Noor',
  last: 'Akhnafal Aban',
  headline: 'Software Engineer — iOS & Backend Systems',
  location: 'Jakarta, Indonesia',
  based: 'Jakarta, ID',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  links: {
    github: 'https://github.com/akhnafal-aban',
    linkedin: 'https://linkedin.com/in/akhnaf-aban',
    youtube: 'https://youtube.com/@noorakhnafalaban-9917',
    figma: 'Akhnaf Brand (Codex page)',
  },
  education: {
    school: 'Universitas Islamic Indonesia',
    place: 'Yogyakarta, Indonesia',
    degree: 'Bachelor of Informatics — Faculty of Industrial Technology',
    years: '2022 - Present',
    gpa: '3.87 / 4.00',
  },
  summary: [
    'Software engineer working across iOS, backend systems, deployment, and server operations. Builds maintainable products across the application lifecycle — SwiftUI on the client, Laravel on the server, Linux underneath.',
    'Current focus: native iOS and product development at the Apple Developer Academy @ UC Jakarta, building on a backend and infrastructure foundation.',
  ],
  roles: [
    {
      title: 'Junior Developer — iOS',
      org: 'Apple Developer Academy @ UC Jakarta',
      period: 'FEB 2026 - Present',
      kind: 'Contract',
      points: [
        'Build iOS applications with Swift and SwiftUI through project-based product development.',
        'Extend an existing backend foundation into native iOS implementation and product thinking.',
      ],
    },
    {
      title: 'Software Engineer',
      org: 'Really Sport Center',
      period: 'AUG 2025 - Present',
      kind: 'Freelance',
      points: [
        'Build and evolve an end-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations.',
        'Deploy and maintain staging + production environments.',
        'Administer Linux servers over SSH; remote maintenance, monitoring, troubleshooting.',
      ],
    },
    {
      title: 'Back End Developer',
      org: 'Faculty of Industrial Technology, UII',
      period: 'MAY 2025 - JAN 2026',
      kind: 'Part-time',
      points: [
        'Built a Laravel role-based academic test platform for faculty use.',
        'Implemented authentication, result processing, personalized LLM guidance, filtered CSV exports for analysis.',
      ],
    },
    {
      title: 'Backend Developer Intern',
      org: 'Artiknesia',
      period: 'FEB 2025 - MAY 2025',
      kind: 'Remote',
      points: [
        'Developed and optimized backend features with Laravel Livewire.',
        'Improved database queries and backend logic; collaborated across functions for reliable integration.',
      ],
    },
  ],
  awards: [
    'GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to nationals.',
    'GitHub: Pull Shark ×2, Pair Extraordinaire, YOLO.',
  ],
} as const

export const projects: Project[] = [
  {
    id: 'akhnafin',
    title: 'AkhnaFin',
    blurb:
      'Solo iOS finance app. Logging expenses is tedious, so it does not get done — so AkhnaFin makes capture near-frictionless through multiple input channels.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    accent: 'acid',
    repo: 'https://github.com/akhnafal-aban/AkhnaFin',
    meta: 'JUL 2026 - Present · iOS',
    bullets: [
      'Inputs: App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, batch entry — all converge on one pipeline.',
      'Pipeline: input → TransactionParsing → TransactionDraft (editable) → user confirm → TransactionRepository.commit() → SwiftData + CloudKit.',
      'AI output is always an editable draft before save; never auto-commits without confirmation.',
    ],
  },
  {
    id: 'gayagerakseru',
    title: 'GayaGerakSeru',
    blurb:
      'Interactive RealityKit physics simulation for friction education. Object slides down a ramp onto a ground; ground roughness (0.0 - 1.0) is the main user variable.',
    stack: ['Swift', 'RealityKit', 'SwiftUI'],
    accent: 'volt',
    repo: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    meta: 'JUL 2026 - Present · Academy Challenge 2',
    bullets: [
      'Restitution disabled (0.0) to focus on friction, not bounce. Ramp friction fixed at 0.5; object friction varies per material.',
      'Translates effective friction = f(object friction × ground friction) into a manipulable 3D experience.',
    ],
  },
  {
    id: 'bitebeat',
    title: 'BiteBeat',
    blurb:
      'Academy Challenge 2 team app. Analyzes music and recommends food pairings using Apple Intelligence (Foundation Models).',
    stack: ['Swift', 'SwiftUI', 'Foundation Models'],
    accent: 'punch',
    repo: 'https://github.com/windyclaun/BiteBeatApp',
    meta: 'MAY 2026 - JUN 2026 · Team with windyclaun',
    bullets: [
      'Flow: authorization → home → recommendation → ending → profile, with meal selection and a default playlist + foods dataset.',
      'AppleIntelligenceHelper + MusicToFoodAnalyzer map musical qualities to meal suggestions.',
    ],
  },
  {
    id: 'rsc',
    title: 'Really Sport Center',
    blurb:
      'End-to-end gym management platform in production: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'Linux'],
    accent: 'slime',
    meta: 'AUG 2025 - Present · Production',
    bullets: [
      'Deployed across staging and production. Linux server administration over SSH: maintenance, monitoring, troubleshooting.',
      'Scheduled operational processes; payments + membership workflows; reporting.',
    ],
  },
  {
    id: 'tpa-ftii',
    title: 'TPA FTI',
    blurb:
      'Laravel role-based academic test platform for faculty use, with personalized LLM guidance and filtered CSV exports for analysis.',
    stack: ['Laravel', 'PHP', 'MySQL', 'LLM integration'],
    accent: 'foam',
    meta: 'MAY 2025 - JAN 2026 · Part-time',
    bullets: [
      'Auth for admin and student roles; result processing; personalized LLM-generated guidance.',
      'Filtered CSV exports with aggregation.',
    ],
  },
  {
    id: 'danantara',
    title: 'Danantara Research',
    blurb:
      'Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article.',
    stack: ['Python', 'Jupyter', 'BERTopic', 'indoSBERT'],
    accent: 'volt',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
    meta: '2026 · Research',
    bullets: [
      'Topic modeling of Twitter conversations about Danantara using BERTopic + indoSBERT embeddings.',
      'Pipeline reproducible from raw tweets to final report.',
    ],
  },
]

export const publications = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    subtitle:
      'Topic Modeling of Tweets about Danantara using BERTopic and indoSBERT embeddings',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
    issue: 'Vol 11 No 1, January 2026',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
    accent: 'acid' as const,
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'],
    accent: 'acid' as const,
  },
  {
    label: 'Frameworks',
    items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'],
    accent: 'punch' as const,
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    accent: 'volt' as const,
  },
  {
    label: 'Backend & Systems',
    items: [
      'REST APIs',
      'OOP',
      'Authentication',
      'Role-based auth',
      'Query optimization',
      'Logging',
      'App security',
      'Linux server admin',
      'SSH',
      'Deployment',
    ],
    accent: 'slime' as const,
  },
  {
    label: 'Infrastructure',
    items: [
      'Docker',
      'Nginx',
      'systemd',
      'Ubuntu',
      'CI/CD',
      'VPS',
      'Staging/Production',
    ],
    accent: 'foam' as const,
  },
  {
    label: 'AI & Research',
    items: [
      'Foundation Models',
      'BERTopic',
      'indoSBERT',
      'Topic modeling',
      'Vision OCR',
      'Speech',
      'LLM integration',
      'Agentic tooling',
      'MCP',
    ],
    accent: 'punch' as const,
  },
  {
    label: 'Tools',
    items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon', 'Figma'],
    accent: 'volt' as const,
  },
]

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#publications', label: 'Writing' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
