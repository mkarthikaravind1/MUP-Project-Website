/**
 * All text, numbers and links shown on the site live in this one file.
 * Edit wording here; components only lay it out.
 *
 * Every number has a `source` comment pointing to the file in the project
 * repository it came from. Items marked TODO still need your input.
 */

export type Tone = 'positive' | 'neutral' | 'negative' | 'frustrated' | 'escalating'
export type TourId =
  | 'live-call'
  | 'dashboard'
  | 'ongoing'
  | 'complaints'
  | 'ai-improvement'
  | 'reports'
  | 'price-list'
  | 'post-call'

// ---------------------------------------------------------------- site / links

export const site = {
  name: 'Multilingual Call Intelligence',
  shortName: 'MCI',
  team: 'Team 8',
  program: 'Protosem',
  year: 2026,
  startup: 'Hive Crest Tech',
  // Used for <title>, meta description and Open Graph tags (also in index.html).
  description:
    'Real-time AI assistance for South Indian automotive service-centre calls: live transcripts in Tamil, Telugu, Kannada, Malayalam and English, complaint detection, tone, next-question suggestions and post-call tracking.',
  // TODO (optional): college / department name, shown in the Team section and footer when filled in.
  institution: '',
}

export const links = {
  liveDemo: 'https://multilingual-call-intelligence.mkarthikaravind1.workers.dev/',
  github: 'https://github.com/mkarthikaravind1/Multilingual-Call-Intelligence',
  // TODO (optional): a contact e-mail. Leave empty to hide it.
  email: '',
}

export const nav: { id: string; label: string }[] = [
  { id: 'problem', label: 'Problem' },
  { id: 'how', label: 'How it works' },
  { id: 'scope', label: 'MVP scope' },
  { id: 'features', label: 'Features' },
  { id: 'tour', label: 'Product tour' },
  { id: 'results', label: 'Results' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'team', label: 'Team' },
]

// ---------------------------------------------------------------- hero

export const hero = {
  eyebrow: 'Final-year MVP · Team 8 · Protosem',
  title: 'Every complaint caught, in the customer’s own language.',
  subtitle:
    'Live AI help for service-centre phone calls in Tamil, Telugu, Kannada, Malayalam and English, even when they are mixed in one sentence. The agent sees the transcript, the complaints, the customer’s tone and the next question to ask, while the call is still going on.',
  primaryCta: 'Watch demo',
  secondaryCta: 'Try the live MVP',
  languages: ['தமிழ்', 'తెలుగు', 'ಕನ್ನಡ', 'മലയാളം', 'English'],
  mockNote: 'Illustrative sample call. Not real customer data.',
}

/** Sample calls shown in the hero mock, one per language. Illustrative only. */
export const heroCalls: {
  lang: string
  langLabel: string
  lines: { speaker: 'ICR' | 'Customer'; text: string; english?: string; tone?: Tone; tags?: string[] }[]
  tone: Tone
  complaints: string[]
  question: string
  estimate: { item: string; amount: string }
  escalation?: string
}[] = [
  {
    lang: 'ta',
    langLabel: 'Tamil + English',
    lines: [
      { speaker: 'ICR', text: 'Good morning, service centre. How can I help you?' },
      {
        speaker: 'Customer',
        text: 'brake pad மாத்தணும்னு சொன்னீங்க, ஆனா இன்னும் கார் ready ஆகல.',
        english: 'You said the brake pad needed changing, but the car still isn’t ready.',
        tone: 'frustrated',
        tags: ['Turnaround Time'],
      },
      { speaker: 'ICR', text: 'Sorry for the delay, let me check the status for you.' },
      {
        speaker: 'Customer',
        text: 'bill-உம் ரொம்ப அதிகமா இருக்கு.',
        english: 'The bill is also too high.',
        tone: 'negative',
        tags: ['Cost'],
      },
    ],
    tone: 'frustrated',
    complaints: ['Turnaround Time', 'Cost'],
    question: 'Which items on the bill would you like me to explain?',
    estimate: { item: 'Brake pad replacement', amount: 'from price list' },
  },
  {
    lang: 'te',
    langLabel: 'Telugu',
    lines: [
      { speaker: 'ICR', text: 'Good afternoon, how may I help you today?' },
      {
        speaker: 'Customer',
        text: 'నా కారు మూడు రోజులుగా సర్వీస్ సెంటర్‌లోనే ఉంది, ఎవరూ ఫోన్ చేయలేదు.',
        english: 'My car has been at the service centre for three days and nobody called.',
        tone: 'frustrated',
        tags: ['Turnaround Time', 'Communication'],
      },
      { speaker: 'ICR', text: 'I understand. May I have the vehicle number, please?' },
      {
        speaker: 'Customer',
        text: 'నేను manager తో మాట్లాడాలి.',
        english: 'I want to speak to the manager.',
        tone: 'escalating',
      },
    ],
    tone: 'escalating',
    complaints: ['Turnaround Time', 'Communication'],
    question: 'Can I confirm a delivery time and call you back within the hour?',
    estimate: { item: 'Periodic service', amount: 'from price list' },
    escalation: 'Manager requested',
  },
  {
    lang: 'kn',
    langLabel: 'Kannada',
    lines: [
      { speaker: 'ICR', text: 'Hello, thank you for calling. How can I help?' },
      {
        speaker: 'Customer',
        text: 'ಸರ್ವೀಸ್ ಆದ ಮೇಲೆ ಕಾರಿನ ಒಳಗೆ ತುಂಬಾ ಕೊಳಕಾಗಿತ್ತು.',
        english: 'After the service, the inside of the car was very dirty.',
        tone: 'negative',
        tags: ['Hygiene'],
      },
      { speaker: 'ICR', text: 'I am sorry to hear that. Did anyone at the desk help you?' },
      {
        speaker: 'Customer',
        text: 'ಸ್ಟಾಫ್ ಸರಿಯಾಗಿ ಉತ್ತರ ಕೊಡಲಿಲ್ಲ.',
        english: 'The staff didn’t answer properly.',
        tone: 'frustrated',
        tags: ['Staff Behaviour'],
      },
    ],
    tone: 'frustrated',
    complaints: ['Hygiene', 'Staff Behaviour'],
    question: 'Would you like us to arrange a free interior cleaning?',
    estimate: { item: 'Interior cleaning', amount: 'from price list' },
  },
  {
    lang: 'ml',
    langLabel: 'Malayalam',
    lines: [
      { speaker: 'ICR', text: 'Good morning, how can I help you?' },
      {
        speaker: 'Customer',
        text: 'AC ഇപ്പോഴും ശരിയായിട്ടില്ല, ഇത് രണ്ടാമത്തെ തവണയാണ് വരുന്നത്.',
        english: 'The AC still isn’t fixed. This is the second time I’m coming in.',
        tone: 'negative',
        tags: ['Service Quality'],
      },
      { speaker: 'ICR', text: 'Let me check what was done on the last visit.' },
      {
        speaker: 'Customer',
        text: 'parts എപ്പോൾ വരുമെന്ന് ആരും പറയുന്നില്ല.',
        english: 'Nobody tells me when the parts will arrive.',
        tone: 'frustrated',
        tags: ['Parts Availability', 'Communication'],
      },
    ],
    tone: 'frustrated',
    complaints: ['Service Quality', 'Parts Availability', 'Communication'],
    question: 'Shall I check the expected arrival date for the AC part now?',
    estimate: { item: 'AC gas top-up and check', amount: 'from price list' },
  },
]

// ---------------------------------------------------------------- problem
// source: README.md "Problem"; docs/customer-discovery-canvas.png

export const problem = {
  eyebrow: 'The problem',
  title: 'Service-centre calls are multilingual, and complaints slip through.',
  intro:
    'Customers in South India call in Tamil, Telugu, Kannada, Malayalam and English, often mixing languages in a single sentence. The agent has to catch every complaint, calm the customer and take notes, all at once.',
  pains: [
    {
      icon: 'Languages',
      title: 'Code-mixed speech',
      text: 'One sentence can mix Tamil and English. English-only transcription tools fail on this kind of speech.',
    },
    {
      icon: 'EarOff',
      title: 'Complaints get missed',
      text: 'Delays, cost, parts, staff behaviour: agents miss complaints while they are listening and typing at the same time.',
    },
    {
      icon: 'Siren',
      title: 'Unhappy calls noticed too late',
      text: 'The centre often learns a customer was unhappy only after they escalate publicly.',
    },
    {
      icon: 'NotebookPen',
      title: 'Notes after every call',
      text: 'Agents spend minutes writing notes after each call. The notes are late and incomplete, so complaints get lost.',
    },
    {
      icon: 'EyeOff',
      title: 'Patterns stay invisible',
      text: 'Recurring problems stay hidden across hundreds of calls, because nobody reads across calls.',
    },
  ],
  triedTitle: 'What service centres do today',
  tried: [
    'Hire agents who speak the main languages and note complaints in a register or the DMS after each call.',
    'Supervisors listen to a few recorded calls at random.',
    'Post-service SMS surveys and CSI (customer satisfaction) follow-up calls, days later.',
    'English-only call transcription tools.',
  ],
  canvas: {
    title: 'Customer discovery canvas',
    caption:
      'Problem validation with the service-centre owner / dealer as the profiled beneficiary.',
    credit:
      'Canvas template: Forge Innovation & Ventures, Innovation Handbook. Licensed CC BY-NC-SA 4.0.',
    src: '/images/customer-discovery-canvas-1200.webp',
    srcLarge: '/images/customer-discovery-canvas.webp',
    alt: 'Forge problem-validation and customer-discovery canvas for Multilingual Call Intelligence. It profiles the service-centre owner as the beneficiary and answers six questions: problem description, tried solutions, gaps, constraints, benefits and importance.',
  },
}

// ---------------------------------------------------------------- users
// source: README.md "Who it is for"; SRD-STATUS.md row 100

export const users = {
  eyebrow: 'Who it is for',
  title: 'One system, four roles.',
  intro: 'Each person sees only what their job needs. The API enforces this, not just the menu.',
  roles: [
    {
      icon: 'Headset',
      role: 'ICR (in-call representative)',
      who: 'The agent who takes the call',
      gets: [
        'Live transcript in the customer’s language',
        'Complaints, tone and the next question while talking',
        'Service estimate from the centre’s price list',
        'No after-call paperwork: the summary is written for them',
      ],
    },
    {
      icon: 'MonitorDot',
      role: 'Supervisor',
      who: 'Leads the call-centre floor',
      gets: [
        'Every ongoing call with its tone, complaints and alerts',
        'Escalation queue to acknowledge and resolve',
        'Complaint queue, new complaint themes and AI improvements to review',
        'Keeps the price list and listens to recordings',
      ],
    },
    {
      icon: 'Settings2',
      role: 'Admin',
      who: 'Sets up and maintains the system',
      gets: [
        'Users, roles, locations and complaint categories',
        'Report layout, data safety, audit log and AI log',
        'Reads reports, the dashboard and finished calls',
        'Takes no calls and does none of the supervisor’s work',
      ],
    },
    {
      icon: 'BarChart3',
      role: 'Management',
      who: 'Service-centre leadership',
      gets: [
        'Reports and performance figures, with exports',
        'Opens a finished call from a report: transcript, summary, audit score',
        'Sees no live calls and changes nothing',
      ],
    },
  ],
}

// ---------------------------------------------------------------- how it works
// source: README.md "Call-processing pipeline", "Learning / AI Improvement Center"

export const how = {
  eyebrow: 'How it works',
  title: 'What happens during one call.',
  intro: 'From the first “hello” to a lesson learned, in seven steps.',
  steps: [
    {
      icon: 'PhoneIncoming',
      title: 'A customer calls',
      text: 'The call arrives through the phone system (Asterisk or Plivo), and its audio is streamed to the backend as it happens.',
    },
    {
      icon: 'Captions',
      title: 'Live transcript in their language',
      text: 'Sarvam speech recognition writes each line in the customer’s own script and keeps English words in English letters. Each line is tagged with its language.',
    },
    {
      icon: 'Users',
      title: 'Who said what',
      text: 'Each line is labelled agent or customer. Separate phone tracks give this directly; on mixed audio, voice matching and wording decide.',
    },
    {
      icon: 'Sparkles',
      title: 'Live analysis on screen',
      text: 'Complaints in 10 categories, the customer’s tone, up to three next questions, a service estimate from the price list and an escalation warning.',
      chips: ['Complaints', 'Tone', 'Next question', 'Estimate', 'Escalation'],
    },
    {
      icon: 'FileText',
      title: 'Post-call summary',
      text: 'When the call ends, the summary is written automatically: issues raised, what was promised, what is still open. It can be texted to the customer.',
    },
    {
      icon: 'ListChecks',
      title: 'Complaint tracked to closure',
      text: 'Each complaint moves from detected → probed → covered → resolved, across calls, with its full history on the Complaints page.',
    },
    {
      icon: 'GraduationCap',
      title: 'Learning from corrections',
      text: 'Agents and supervisors correct the AI. Repeated corrections become suggested improvements, and nothing changes until a supervisor approves.',
    },
  ],
}

// ---------------------------------------------------------------- MVP scope
// source: SRD-STATUS.md; GO-LIVE-CHECKLIST.md section 9; README.md "Future improvements"

export const scope = {
  eyebrow: 'MVP scope',
  title: 'What the MVP does, and what comes after.',
  intro:
    'The MVP is the smallest version that proves the idea end to end on real test calls. Anything not yet proven is labelled honestly.',
  does: {
    title: 'What the MVP does today',
    note: 'Built and seen working in tests, real call replays and the browser.',
    items: [
      'Live transcript with language tags. English and Tamil–English proven on real replays',
      'Speaker roles: agent vs customer',
      'Complaint detection in 10 categories, with confidence and multi-issue flags',
      'Tone per customer line (positive, neutral, negative, frustrated, escalating)',
      'Up to three next-question suggestions, with Accept / Skip',
      'Service estimate from the centre’s own Excel price list, GST per row',
      'Escalation alerts and a supervisor queue',
      'Post-call summary; reports exported as CSV, Excel and PDF (Indian scripts)',
      'Complaint tracking across calls; new complaint themes discovered',
      'AI Improvement Center: learning only under human review',
      'Four roles with access enforced by the API',
      'Real softphone calls through our own Asterisk phone server',
      'Hosted demo you can open in the browser',
    ],
  },
  waiting: {
    title: 'Built, waiting for access',
    note: 'The code is done; it can only be proven once the startup hands over accounts.',
    items: [
      'Calls from a real phone network (Plivo or a SIP trunk)',
      'Customer SMS through MSG91 with DLT-approved templates',
      'AWS Mumbai deployment with HTTPS, S3 backups and recordings',
      'Telugu, Kannada and Malayalam: accepted, but need real recordings',
      'Accuracy measured on labelled calls per language',
      '500 calls at once and paid-tier AI speed',
    ],
  },
  after: {
    title: 'What comes after the MVP',
    note: 'Planned next steps, not part of this MVP.',
    items: [
      'Our own speech and language models replacing Sarvam and Groq',
      'Real CRM connection (customers come from a file today)',
      'Automatic failover and disaster-recovery testing',
      'External penetration test and data-protection review',
      'Next question within 1.5 s of the customer finishing',
      'WhatsApp delivery of the summary (SMS today)',
    ],
  },
}

// ---------------------------------------------------------------- features
// Each checked against frontend/src and SRD-STATUS.md

export const features: { icon: string; title: string; text: string; tour: TourId }[] = [
  {
    icon: 'Captions',
    title: 'Live multilingual transcript',
    text: 'Each line appears in Tamil, Telugu, Kannada, Malayalam or English script with its language tag, about 1 second after the speaker stops (streaming mode).',
    tour: 'live-call',
  },
  {
    icon: 'Tags',
    title: 'Complaint tags',
    text: 'Every complaint is filed under one of 10 categories with how sure the AI is (“90% sure”), and flagged when one line raises several issues.',
    tour: 'live-call',
  },
  {
    icon: 'Activity',
    title: 'Tone strip and timeline',
    text: 'Five colour-coded tones per customer line, always shown with their name, and how the tone moved over the call.',
    tour: 'live-call',
  },
  {
    icon: 'MessageCircleQuestion',
    title: 'Suggested next questions',
    text: 'Up to three questions for complaints not yet asked about, each checked against what the customer has already said.',
    tour: 'live-call',
  },
  {
    icon: 'IndianRupee',
    title: 'Service estimate',
    text: 'An indicative estimate priced from the centre’s own price list, uploaded from Excel, per vehicle model with GST.',
    tour: 'price-list',
  },
  {
    icon: 'Siren',
    title: 'Escalation alerts',
    text: 'Words like “manager” or “consumer forum” raise an alert the moment they are transcribed. Supervisors acknowledge and resolve them.',
    tour: 'ongoing',
  },
  {
    icon: 'FileText',
    title: 'Post-call summary and reports',
    text: 'Issues raised, what was promised and what is still open. Reports export as CSV, Excel or PDF, with Indian scripts in the PDF.',
    tour: 'post-call',
  },
  {
    icon: 'ListChecks',
    title: 'Complaints page',
    text: 'Every complaint across calls, grouped and filtered by stage and category, from detected to resolved, with its history.',
    tour: 'complaints',
  },
  {
    icon: 'Radar',
    title: 'New complaint themes',
    text: 'Themes that keep recurring across calls but fit no category are surfaced. When a supervisor accepts one, it becomes a new category.',
    tour: 'ai-improvement',
  },
  {
    icon: 'GraduationCap',
    title: 'AI Improvement Center',
    text: 'Corrections from agents become suggested improvements. Nothing changes until a supervisor approves, and every change can be undone.',
    tour: 'ai-improvement',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Dashboard and supervisor view',
    text: 'Tiles for open escalations, calls with an alert, follow-ups and negative-tone calls; every ongoing call on one page.',
    tour: 'dashboard',
  },
  {
    icon: 'ShieldCheck',
    title: 'Roles, SMS and shortcuts',
    text: 'Four roles with access enforced by the API, an opt-in SMS summary for the customer, and keyboard shortcuts (H, A, S) for agents.',
    tour: 'live-call',
  },
]

// ---------------------------------------------------------------- product tour

export const tour = {
  eyebrow: 'Product tour',
  title: 'The real screens, one by one.',
  intro: 'Layouts copied from the working app. Click any screen to enlarge it.',
  note: 'Mock screens with sample data, drawn from the real app’s layout.',
  // Set to true once you have put real screenshots in public/screenshots/ (see the README there).
  useScreenshots: false,
  tabs: [
    { id: 'live-call', label: 'Live call', caption: 'The agent’s screen during a call: transcript, alerts, next question, complaints and estimate.', screenshot: 'live-call.png' },
    { id: 'dashboard', label: 'Dashboard', caption: 'What needs attention now: escalations, live calls with alerts, follow-ups and today’s calls.', screenshot: 'dashboard.png' },
    { id: 'ongoing', label: 'Ongoing calls', caption: 'Supervisor view of every call in progress, most urgent first, with tone, complaints and alerts.', screenshot: 'ongoing-calls.png' },
    { id: 'complaints', label: 'Complaints', caption: 'Every complaint across calls, grouped by category or stage, tracked until it is resolved.', screenshot: 'complaints.png' },
    { id: 'ai-improvement', label: 'AI Improvement', caption: 'Suggested improvements, new complaint themes and corrections, all waiting for human review.', screenshot: 'ai-improvement.png' },
    { id: 'reports', label: 'Reports', caption: 'Complaints by category, trend, category by location, customer tone and root causes, with exports.', screenshot: 'reports.png' },
    { id: 'price-list', label: 'Price list', caption: 'The service centre’s own prices, uploaded from Excel, used for live estimates.', screenshot: 'price-list.png' },
    { id: 'post-call', label: 'Post-call summary', caption: 'Written automatically when the call ends: issues raised, what was promised and the next step.', screenshot: 'post-call.png' },
  ] as { id: TourId; label: string; caption: string; screenshot: string }[],
}

// ---------------------------------------------------------------- demo video

export const video = {
  eyebrow: 'Demo video',
  title: 'See a call from start to finish.',
  intro: 'A walkthrough of the MVP: a live call, the analysis on screen, and the follow-up after the call.',
  // Google Drive "preview" embeds. TODO (optional): rename the titles to what each video shows.
  items: [
    { title: 'Demo video: part 1', driveId: '1dPJ_ra8poUuN0PxoYwyH7zZlP8IZ2-MC' },
    { title: 'Demo video: part 2', driveId: '1DIxnmVp-_H3CVDTr2XHM8LCDHbDeRFU6' },
  ],
  note: 'Videos are hosted on Google Drive. If one does not play here, use “Open in Drive”.',
}

// ---------------------------------------------------------------- live MVP

export const live = {
  eyebrow: 'Try it yourself',
  title: 'The MVP is live.',
  intro: 'Open the hosted app in your browser.',
  cta: 'Open the live MVP',
  coldStart:
    'The backend runs on a free hosting tier that sleeps when idle. The first load can take up to a minute while it wakes up; after that it is quick.',
  access: 'Demo access on request: ask the team for a sign-in.',
  hosting: [
    { label: 'Web app', value: 'Cloudflare' },
    { label: 'Backend API', value: 'Render (free tier)' },
    { label: 'Database', value: 'Neon PostgreSQL' },
  ],
}

// ---------------------------------------------------------------- architecture
// source: README.md "Architecture", "Tech stack"; docs/Why Groq and Sarvam AI (final).docx

export const architecture = {
  eyebrow: 'Architecture',
  title: 'How the pieces fit together.',
  intro: 'Phone calls in, live help out. Each AI provider sits behind its own interface, so it can be swapped.',
  stack: [
    { name: 'Sarvam Saaras v3', group: 'AI', why: 'One model covers 22 Indian languages plus English, keeps English words in English letters inside Tamil, and streams lines live.' },
    { name: 'Groq (gpt-oss-20b)', group: 'AI', why: 'Lowest latency of the four providers tracked for our model: 8.37 s to first answer vs 28.99 s for the next fastest (Artificial Analysis, 5 Nov 2026).' },
    { name: 'pyannote', group: 'AI', why: 'Local speaker diarization tells two voices apart when both are on one audio stream.' },
    { name: 'Rule-based fallbacks', group: 'AI', why: 'Danger words are caught by fixed rules the moment they are transcribed, so escalation never waits for the AI.' },
    { name: 'FastAPI (Python 3.12)', group: 'Backend', why: 'REST API, the live-call WebSocket and the telephony media stream in one async service.' },
    { name: 'PostgreSQL 16', group: 'Data', why: 'Source of truth: calls, lines, complaints, summaries and all learning data, with migrations.' },
    { name: 'Redis 7', group: 'Data', why: 'Short-lived live state shared between API instances, so several servers can share calls.' },
    { name: 'React 19 + TypeScript', group: 'Frontend', why: 'Typed, feature-organised web app; live updates pushed over a WebSocket.' },
    { name: 'Asterisk + Plivo', group: 'Telephony', why: 'Our own open-source phone server avoids depending on one vendor; Plivo gives separate tracks per speaker.' },
    { name: 'Docker + Caddy', group: 'Ops', why: 'One compose stack; Caddy adds HTTPS with automatic certificates.' },
    { name: 'Prometheus + Grafana', group: 'Ops', why: 'Health, metrics dashboards and e-mail alerts for the people running the system.' },
    { name: 'MSG91', group: 'Messaging', why: 'DLT-registered SMS provider, as Indian rules require for business SMS.' },
  ],
}

// ---------------------------------------------------------------- results

export const results = {
  eyebrow: 'Results & validation',
  title: 'What we measured, and how.',
  intro: 'Real numbers from the project, with how each one was measured. “Waiting” means built but not yet provable.',
  srd: {
    // source: SRD-STATUS.md "Totals"
    total: 121,
    met: 87,
    waiting: 25,
    notMet: 9,
    note: 'Each of the 121 requirements in the SRD was checked in the code and its tests, then marked met, waiting (built, needs an access or real users) or not met (with the reason).',
    notMetReasons: [
      'Set aside by decision: CRM connection and its test, automatic failover, disaster-recovery test, penetration test',
      'Faster than the AI services answer: next question within 1.5 s',
      'Outside the software: data-protection review, a measured reliability figure',
    ],
  },
  stats: [
    {
      value: 3000,
      prefix: '',
      suffix: '+',
      label: 'automated backend tests',
      how: 'Run on every change by CI (GitHub Actions). Count as reported in the 20 Nov 2026 review.',
    },
    {
      value: 1.0,
      decimals: 1,
      prefix: '~',
      suffix: ' s',
      label: 'transcript line on screen (streaming)',
      how: 'Median 1.0 s (0.9–1.3 s) after the speaker stopped, vs about 2 s (1.4–2.4 s) in chunked mode. One Tamil–English replay on a laptop. SRD target: under 2 s.',
    },
    {
      value: 13000,
      prefix: '~',
      suffix: '',
      label: 'AI tokens per 2-minute call',
      how: 'One combined request for complaints, tone and escalation cut a 2-minute English call from 27,777 tokens in 43 requests to 12,906 in 11. A 99-second Tamil–English call used 17,501.',
    },
    {
      value: 100,
      prefix: '',
      suffix: '',
      label: 'calls at once, kept up (load test)',
      how: 'Laptop load test with stand-in speech and AI services: 25, 50 and 100 simultaneous calls kept up; 200 fell just behind. 500 needs real servers.',
    },
    {
      value: 5,
      prefix: '',
      suffix: '',
      label: 'languages accepted',
      how: 'Tamil, Telugu, Kannada, Malayalam, English. English and Tamil–English tested end to end on real replays; the other three need recordings.',
    },
    {
      value: 10,
      prefix: '',
      suffix: '',
      label: 'complaint categories',
      how: 'Cost, Hygiene, Hospitality, Service Quality, Turnaround Time, Communication, Parts Availability, Staff Behaviour, Documentation, Other. Admins can add more.',
    },
  ] as { value: number; decimals?: number; prefix: string; suffix: string; label: string; how: string }[],
  languages: [
    { name: 'English', status: 'tested' },
    { name: 'Tamil–English', status: 'tested' },
    { name: 'Telugu', status: 'waiting' },
    { name: 'Kannada', status: 'waiting' },
    { name: 'Malayalam', status: 'waiting' },
  ] as { name: string; status: 'tested' | 'waiting' }[],
  // source: docs/accuracy-sample/report.md; GO-LIVE-CHECKLIST.md section 7 (run on 10 Oct 2026)
  accuracy: {
    title: 'First accuracy sample (10 Oct 2026)',
    caveat:
      'Five test calls, labelled by one person from their stored transcripts, so speech recognition itself was not measured. This is an illustration of the accuracy report, not a result.',
    rows: [
      { label: 'Complaint categories', measured: '15 of 17 (88%)', target: '92%' },
      { label: 'Several categories on one call', measured: '2 of 3 (67%)', target: '88%' },
      { label: 'Sentiment, exact label', measured: '3 of 5 (60%)', target: '90%' },
      { label: 'Sentiment, right side (negative or not)', measured: '5 of 5', target: '–' },
      { label: 'Speech recognition (words right)', measured: 'Not measured yet', target: '95%' },
    ],
  },
}

// ---------------------------------------------------------------- roadmap
// sources: git history; SRD-STATUS.md; docs/handoff-*.md; docs/review-meeting-scripts-2026-11-20.md;
// docs/timeline-update-2026-11-20.gs

export const roadmap = {
  eyebrow: 'Roadmap',
  title: 'Where we are, and what is next.',
  intro: 'Milestones from the project’s own records.',
  done: [
    { date: 'Sep 2026', title: 'Project started', text: 'Backend, AI provider interfaces and the call domain model.' },
    { date: 'Oct 2026', title: 'Full SRD build checked', text: 'All 121 requirements checked one by one; five real call replays; first accuracy sample and load test.' },
    { date: 'Oct 2026', title: 'AI cost cut', text: 'Token use measured; one combined request per analysis cut tokens per call by more than half.' },
    { date: '28 Oct 2026', title: 'Bill of materials sent', text: 'One-year BoM for live deployment sent to the startup.' },
    { date: 'Nov 2026', title: 'Production-ready plumbing', text: 'Caddy HTTPS, S3 storage via IAM role, MSG91 SMS with DLT templates, Grafana monitoring.' },
    { date: 'Nov 2026', title: 'Free demo hosting', text: 'Frontend on Cloudflare, backend on Render, database on Neon.' },
    { date: '18 Nov 2026', title: 'Real softphone calls', text: 'Through our own Asterisk server: incoming, outgoing, click-to-call, hold, hang-up and missed calls all passed.' },
  ],
  next: [
    { title: 'Our own models', text: 'Faster-Whisper speech server, a self-hosted LLM server, a language detector and an evaluation kit, to replace Sarvam and Groq.', status: 'In progress' },
    { title: 'Real telephony rollout', text: 'A real SIP trunk into Asterisk, or Plivo; Tamil calls and two calls at once.', status: 'Next' },
    { title: 'DLT SMS live', text: 'Register the three templates on the DLT portal and send through MSG91.', status: 'Next' },
    { title: 'More languages tested', text: 'Telugu, Kannada and Malayalam recordings; accuracy measured per language.', status: 'Next' },
    { title: 'Production deployment', text: 'AWS Mumbai with domain, HTTPS certificate, S3 storage and backups.', status: 'Next' },
  ],
}

// ---------------------------------------------------------------- deployment & cost
// source: DEPLOYMENT.md "What runs"; docs/handoff-2026-10-28-live-deployment.md (totals and categories only)

export const deployment = {
  eyebrow: 'Deployment & cost',
  title: 'Ready to go live on one server.',
  intro: 'The production plan is deliberately simple: one server in Mumbai runs everything, behind HTTPS.',
  plan: [
    { icon: 'Server', title: 'One EC2 server, AWS Mumbai', text: 't3.xlarge, 1-year reserved, with 100 GB disk.' },
    { icon: 'Lock', title: 'HTTPS front door', text: 'Caddy with automatic certificates; only Caddy is open to the internet.' },
    { icon: 'Boxes', title: 'Docker Compose stack', text: 'Caddy, web (nginx), backend (FastAPI), PostgreSQL 16, Redis 7, plus Grafana.' },
    { icon: 'Archive', title: 'S3 storage', text: '100 GB for backups, encrypted recordings and transcripts, using the server’s IAM role, so no keys in config files.' },
  ],
  bom: {
    total: '₹3,25,201',
    period: 'one year, including GST',
    load: 'Sized for about 50 calls a day, 3 minutes each.',
    categories: [
      { icon: 'Cloud', label: 'Cloud hosting', detail: 'AWS Mumbai: server, disk, S3 storage, public IP' },
      { icon: 'AudioLines', label: 'Speech AI', detail: 'Sarvam Pro: speech-to-text and language ID' },
      { icon: 'Cpu', label: 'Language AI', detail: 'Groq pay-as-you-go: analysis, summary, question check' },
      { icon: 'Phone', label: 'Telephony', detail: 'Plivo India: inbound calls and audio streaming' },
      { icon: 'MessageSquareText', label: 'Customer SMS', detail: 'MSG91 SMS pack and DLT registration' },
      { icon: 'Globe', label: 'Domain', detail: '.in domain for the public HTTPS address' },
    ],
  },
}

// ---------------------------------------------------------------- team

export const team = {
  eyebrow: 'Team & mentor',
  title: 'The people behind it.',
  intro: 'Team 8, Protosem, working with Hive Crest Tech.',
  members: [
    {
      name: 'Karthik Aravind M',
      role: 'Team Visionary',
      focus: 'Next Question Engine, full end-to-end integration, system design and architecture',
      photo: '', // TODO (optional): e.g. '/team/karthik.webp'
    },
    { name: 'Praveen', role: 'UI & Evaluation', focus: 'UI design, language detector, evaluation kit', photo: '' },
    { name: 'Elakiya', role: 'Telephony', focus: 'Plivo and Asterisk phone integration', photo: '' },
    { name: 'Sairam', role: 'Backend', focus: 'Backend, database, messaging', photo: '' },
    { name: 'Viswes', role: 'Quality', focus: 'Testing', photo: '' },
  ],
  mentor: {
    name: 'Gowrishankar S',
    org: 'Forge Innovation & Ventures',
    thanks:
      'We thank our mentor, Gowrishankar S of Forge Innovation & Ventures, for the guidance throughout the project, Hive Crest Tech for the real-world problem and access, and the Protosem programme for the opportunity.',
  },
}

export const footer = {
  note: 'An academic MVP built as a final-year project. Not a commercial product; sample data on this page is illustrative.',
}
