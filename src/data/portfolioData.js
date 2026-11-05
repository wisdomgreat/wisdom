import {
  Shield,
  Server,
  Bot,
  BookOpen,
  Code2,
  Sprout,
  Headphones,
  Video,
  Wrench
} from 'lucide-react';

export const CORE_PILLARS = [
  {
    id: 'grc',
    title: 'Cybersecurity, GRC & Risk Operations',
    subtitle: 'Enterprise Compliance & Due Diligence',
    icon: Shield,
    accent: 'emerald',
    description:
      'Architecting resilient Governance, Risk, and Compliance frameworks, enterprise KYC/AML screening pipelines, regulatory sanction protocols, and threat-informed security postures.',
    metrics: ['7+ Years Risk Ops & KYC/AML', 'Sanctions & PEP Screening', 'Zero-Trust Access Design'],
    tags: ['GRC Frameworks', 'KYC / AML', 'Sanction Screening', 'IAM', 'Vendor Due Diligence', 'Audit Readiness']
  },
  {
    id: 'infra',
    title: 'Cloud & Hybrid Infrastructure',
    subtitle: 'Virtualization, Cloud & Managed IT',
    icon: Server,
    accent: 'cyan',
    description:
      'Designing and administering fault-tolerant hybrid cloud architectures bridging AWS, Microsoft Azure, on-premise Proxmox VE clusters, Windows Server SCCM, and Cloudflare Zero Trust tunnels.',
    metrics: ['Proxmox VE & VMware Clusters', 'Windows Server & SCCM', 'Cloudflare Zero Trust'],
    tags: ['AWS', 'Microsoft Azure', 'Proxmox VE', 'Docker', 'Windows SCCM', 'Ubuntu CLI', 'Cloudflare Tunnels']
  },
  {
    id: 'ai',
    title: 'Full-Stack AI & Workflow Automation',
    subtitle: 'Autonomous Agents & Production Web Apps',
    icon: Bot,
    accent: 'emerald',
    description:
      'Building production-grade React/Supabase platforms, autonomous n8n orchestration pipelines, Browserbase headless agents, and algorithmic Python telemetry systems.',
    metrics: ['10+ Production Platforms', 'Autonomous n8n + AI Pipelines', 'Full-Stack React & Supabase'],
    tags: ['React / Vite', 'Python', 'Supabase', 'n8n Webhooks', 'Browserbase', 'Google AI Studio', 'Tailwind CSS']
  },
  {
    id: 'edtech',
    title: 'Technical Leadership & Curriculum Instruction',
    subtitle: 'Mentorship, EdTech & Executive Advisory',
    icon: BookOpen,
    accent: 'cyan',
    description:
      'Translating complex systems engineering and programming paradigms into actionable knowledge for enterprise teams, emerging developers, and regional business leaders.',
    metrics: ['Former Lead Instructor (Correlation One)', 'Handshake AI Fellow', 'Half Baked START Founder'],
    tags: ['Curriculum Delivery', 'Systems Architecture', 'Technical Mentorship', 'Executive Briefings']
  }
];

export const PROJECTS_DATA = [
  {
    id: 'tdwas',
    title: 'TDWAS Technologies',
    headline: 'Zero-trust enterprise governance and hybrid managed infrastructure.',
    domain: 'tdwas.com',
    url: 'https://tdwas.com',
    category: 'Platforms & SaaS',
    featured: true,
    status: 'Live Enterprise Portal',
    badge: 'Flagship Consultancy',
    coords: { x: 50, y: 50 },
    description:
      'Principal IT consulting, Managed Services, and Cybersecurity/GRC advisory firm serving the Greater Toronto Area and Ontario enterprise clients with hybrid cloud, security governance, and custom AI automation.',
    architecture: ['React', 'Tailwind CSS', 'Cloudflare Zero Trust', 'Enterprise GRC', 'Managed IT'],
    highlights: [
      'Full-spectrum IT governance, risk advisory, and managed infrastructure support',
      'Custom workflow automation & AI integration for SMB and enterprise clients',
      'Regional coverage across the Greater Toronto Area, Mississauga, Toronto, and Ontario'
    ]
  },
  {
    id: 'bwglife',
    title: 'BWG Life & Simcoe Connect',
    headline: 'Unifying municipal merchant discovery with automated SEO telemetry.',
    domain: 'bwglife.ca / simcoeconnect.ca',
    url: 'https://bwglife.ca',
    category: 'Platforms & SaaS',
    featured: true,
    status: 'Live Regional Ecosystem',
    badge: 'Hyperlocal Civic Tech',
    coords: { x: 440, y: 50 },
    description:
      'Dual community directories and regional civic/business discovery platforms, deeply optimized with Google Search Console telemetry.',
    architecture: ['React', 'Supabase', 'SEO Telemetry', 'Google Search Console', 'Responsive UI'],
    highlights: [
      'High-visibility local business indexing and community event aggregation',
      'Search-engine optimized architecture driving organic regional discovery',
      'Unified multi-tenant data workflows serving regional municipal hubs'
    ]
  },
  {
    id: 'bradfordfarmer',
    title: 'BradfordFarmer AgTech Suite',
    headline: 'Automating CRA T2042 farm tax compliance and provincial grant matching.',
    domain: 'AgTech & Tax Compliance',
    category: 'FinTech & LegalTech',
    featured: true,
    status: 'Production Platform',
    badge: 'Ontario AgTech',
    coords: { x: 830, y: 50 },
    description:
      'Specialized agricultural compliance and operations platform built for Ontario farmers and agricultural operators to automate administrative paperwork, government grant matching, and CRA T2042 farm tax compliance.',
    architecture: ['React', 'TypeScript', 'CRA T2042 Engine', 'Grant Matching AI', 'Supabase'],
    highlights: [
      'Automated categorization mapped directly to Canada Revenue Agency T2042 line items',
      'Intelligent eligibility matching for provincial and federal agricultural grants',
      'Built with field-first usability for busy agricultural operators and farm owners'
    ]
  },
  {
    id: 'neonbreach',
    title: 'Neon Breach',
    headline: 'Simulating intrusion detection and breach telemetry under audited benchmarks.',
    domain: 'Handshake AI Validated',
    category: 'AI & Automation',
    featured: true,
    status: 'Validated Technical Build',
    badge: 'Cybersecurity Simulation',
    coords: { x: 1220, y: 50 },
    description:
      'Interactive cybersecurity defense and breach telemetry application built, audited, and officially approved within the Handshake AI Fellowship engineering program.',
    architecture: ['Interactive Canvas', 'Cyber Telemetry', 'React', 'State Machine', 'Handshake AI'],
    highlights: [
      'Simulated intrusion detection, packet inspection, and threat mitigation mechanics',
      'Passed rigorous technical validation for code quality and interactive responsiveness',
      'Combines GRC threat modeling concepts with real-time visual feedback'
    ]
  },
  {
    id: 'kiddochecker',
    title: 'KiddoChecker (GVA Kids)',
    headline: 'Child check-in security, guardian claim codes, and Brother QL thermal tag printing on Azure.',
    domain: 'kids.gvachurch.com',
    url: 'https://kids.gvachurch.com',
    category: 'Platforms & SaaS',
    featured: true,
    status: 'Live Kiosk Terminal',
    badge: 'Youth Safety & IAM',
    coords: { x: 50, y: 390 },
    description:
      'Cloud-deployed child check-in, guardian verification, and real-time attendance security platform integrated with Microsoft Azure Container Apps, Brother QL instant thermal printing, and SMS alerts.',
    architecture: ['Microsoft Azure', 'React', 'Thermal Printing', 'SMS Verification', 'RBAC'],
    highlights: [
      'Four-digit matching guardian claim codes and instant Brother QL thermal tag printing',
      'Real-time SMS guardian alerts and emergency allergy flags for volunteers',
      'AES-256 encryption at rest and COPPA privacy compliance on Azure'
    ]
  },
  {
    id: 'ileoja',
    title: 'IleOja & MyTechRodeo',
    headline: 'Bridging localized cultural commerce with independent cloud technology analysis.',
    domain: 'ileoja.ca / mytechrodeo.com',
    url: 'https://ileoja.ca',
    category: 'Platforms & SaaS',
    featured: false,
    status: 'Live Platforms',
    badge: 'Marketplace & Media',
    coords: { x: 440, y: 390 },
    description:
      'Specialized digital marketplace architecture (IleOja) paired with an independent technology analysis and modern engineering insights publication (MyTechRodeo).',
    architecture: ['Full-Stack Web', 'Content Engine', 'E-Commerce Flows', 'Cloud Hosting'],
    highlights: [
      'Vendor onboarding, catalog discovery, and culturally tailored commerce workflows on IleOja',
      'Deep-dive technical commentary and AI/Cloud industry breakdowns on MyTechRodeo',
      'Scalable cloud deployment with automated asset optimization'
    ]
  },
  {
    id: 'studiorecorder',
    title: 'Web Audio & Canvas Studio Recorder',
    headline: 'Delivering client-side dual-channel audio mixing and hardware-accelerated canvas capture.',
    domain: 'Desktop & Web Media Engine',
    category: 'Media & Web Apps',
    featured: false,
    status: 'Production Tool',
    badge: 'DSP & Media Engineering',
    coords: { x: 830, y: 390 },
    description:
      'Client-side screen and dual-channel audio recording suite featuring real-time Web Audio API VU meters, multi-source audio mixing, and standalone Windows desktop packaging.',
    architecture: ['Web Audio API', 'HTML5 Canvas', 'MediaRecorder API', 'Windows Desktop Wrapper'],
    highlights: [
      'Zero-latency visual VU metering and gain staging for microphone + system audio',
      'Hardware-accelerated canvas compositing for crisp tutorial and broadcast capture',
      'Engineered for both browser execution and standalone Windows desktop workflows'
    ]
  },
  {
    id: 'cryptobot',
    title: 'Algorithmic Crypto Trading & Telemetry Bot',
    headline: 'Enforcing programmatic risk management and automated market telemetry to encrypted channels.',
    domain: 'Bybit API + Telegram Pipeline',
    category: 'AI & Automation',
    featured: false,
    status: 'Active Daemon',
    badge: 'Quantitative Python',
    coords: { x: 1220, y: 390 },
    description:
      'Python-driven automated market telemetry and execution engine integrated with Bybit derivatives/spot APIs, multi-timeframe technical indicators, and instant Telegram alert pipelines.',
    architecture: ['Python 3', 'Bybit REST/WebSocket API', 'Telegram Bot API', 'Linux Systemd', 'Quantitative TA'],
    highlights: [
      'Real-time ingestion of candlestick streams and volatility/momentum indicator calculation',
      'Strict programmatic risk management, position sizing, and drawdown circuit breakers',
      'Instantaneous execution telemetry pushed to encrypted Telegram operational channels'
    ]
  },
  {
    id: 'loangenerator',
    title: 'Interest-Only Loan Agreement Generator',
    headline: 'Automating legal compliance and amortization modeling for private debt agreements.',
    domain: 'LegalTech & FinTech Utility',
    category: 'FinTech & LegalTech',
    featured: false,
    status: 'Production Utility',
    badge: 'Contract Automation',
    coords: { x: 245, y: 730 },
    description:
      'Precision LegalTech and FinTech web application supporting customizable interest-only loan amortization schedules, automated late-fee/default calculations, and print-ready PDF legal export.',
    architecture: ['React', 'Financial Math Engine', 'Print/PDF CSS', 'Document Templating'],
    highlights: [
      'Dynamic calculation of principal, interest-only tranches, balloon dates, and fee structures',
      'Generates structured, execution-ready legal clauses with real-time clause preview',
      'Zero-server-retention privacy model for sensitive private lending agreements'
    ]
  },
  {
    id: 'jobautomation',
    title: 'JobAutomation & Autonomous Lead Pipelines',
    headline: 'Orchestrating autonomous lead triage and headless browser telemetry through n8n graphs.',
    domain: 'n8n + Browserbase + AI Agents',
    category: 'AI & Automation',
    featured: false,
    status: 'Open-Source & Internal Engine',
    badge: 'Agentic Workflows',
    coords: { x: 740, y: 730 },
    description:
      'End-to-end autonomous pipeline orchestration combining Python toolchains, n8n webhook graphs, Browserbase cloud browsers, and LLM agents for intelligent outreach and workflow execution.',
    architecture: ['n8n', 'Browserbase', 'Python', 'Google AI Studio', 'Webhook Orchestration'],
    highlights: [
      'Headless browser automation resilient to complex DOM states via Browserbase',
      'Multi-step LLM reasoning nodes for context-aware document tailoring and triage',
      'Modular webhook architecture connecting CRM, email, and database sinks'
    ]
  },
  {
    id: 'kindredchms',
    title: 'Kindred ChMS',
    headline: 'Church care platform with WhatsApp integration and row-level tenant privacy for diaspora congregations.',
    domain: 'kindredchms.com',
    url: 'https://kindredchms.com',
    category: 'Platforms & SaaS',
    featured: true,
    status: 'Live Production Platform',
    badge: 'Church Tech & Privacy',
    coords: { x: 1440, y: 50 },
    description:
      'All-in-one church care and congregation management system built for diaspora assemblies with WhatsApp communication wedges, pastoral drift detection, and row-level security isolation.',
    architecture: ['React', 'WhatsApp Webhooks', 'Row-Level Security', 'Tailwind CSS', 'Supabase'],
    highlights: [
      'Direct WhatsApp integration replacing unread emails for diaspora assemblies',
      'Pastoral care workflows with automated family drift detection',
      'Zero-trust row-level security ensuring strict multi-tenant isolation'
    ]
  },
  {
    id: 'nysaconnect',
    title: 'NYSA Connect',
    headline: 'Community directory and member welfare portal for the Nigerian Canadian Association across Ontario.',
    domain: 'nysaconnect.ca',
    url: 'https://nysaconnect.ca',
    category: 'Platforms & SaaS',
    featured: true,
    status: 'Live Community Portal',
    badge: 'Civic Tech & Welfare',
    coords: { x: 1080, y: 470 },
    description:
      'Civic engagement, member directory, and welfare support platform connecting diaspora families and local businesses across Ontario with event aggregation and verification.',
    architecture: ['React', 'Supabase', 'Civic Directory', 'Event Telemetry', 'Cloud Hosting'],
    highlights: [
      'Unified member onboarding, welfare support indexing, and regional event discovery',
      'Culturally grounded civic tech platform serving diaspora communities in Ontario',
      'Fast, mobile-optimized experience with member verification workflows'
    ]
  },
  {
    id: 'sterrawealth',
    title: 'Sterra Wealth',
    headline: 'Wealth advisory and financial protection portal for independent professionals and families.',
    domain: 'sterrawealth.com',
    url: 'https://sterrawealth.com',
    category: 'FinTech & LegalTech',
    featured: true,
    status: 'Live Advisory Portal',
    badge: 'Wealth Advisory',
    coords: { x: 60, y: 820 },
    description:
      'Independent insurance, wealth preservation, and legacy strategy advisory portal empowering families and business owners across Canada and the U.S.',
    architecture: ['React', 'Vite', 'Financial Telemetry', 'Lead Pipeline', 'Tailwind CSS'],
    highlights: [
      'Tailored wealth preservation and insurance strategy advisory portal',
      'High-conversion interactive consultation booking and resource delivery',
      'Built for cross-border financial planning across Canada and the U.S.'
    ]
  }
];

export const CANVAS_LAYOUT = {
  tdwas:          { x: 60,   y: 70,  w: 520, kind: 'Website',       image: '/work/tdwas.jpg' },
  bwglife:        { x: 640,  y: 40,  w: 360, kind: 'Platform',      image: '/work/bwglife.jpg' },
  simcoe:         { x: 1060, y: 110, w: 460, kind: 'Platform',      image: '/work/simcoeconnect.jpg', alias: 'bwglife', title: 'Simcoe Connect' },
  kindredchms:    { x: 1580, y: 70,  w: 480, kind: 'Church Tech',   image: '/work/kindredchms.jpg' },
  sterrawealth:   { x: 60,   y: 500, w: 460, kind: 'Wealth Portal', image: '/work/sterrawealth.jpg' },
  kiddochecker:   { x: 570,  y: 480, w: 430, kind: 'Security Kiosk',image: '/work/gvakids.jpg', title: 'GVA Kids' },
  nysaconnect:    { x: 1060, y: 490, w: 460, kind: 'Civic Platform',image: '/work/nysaconnect.jpg' },
  ileoja:         { x: 1580, y: 500, w: 460, kind: 'Marketplace',   image: '/work/ileoja.jpg' },
  neonbreach:     { x: 80,   y: 890, w: 340, kind: 'Simulation',    tone: 'night' },
  bradfordfarmer: { x: 480,  y: 870, w: 380, kind: 'AgTech',        tone: 'sheet' },
  jobautomation:  { x: 920,  y: 890, w: 330, kind: 'Pipeline',      tone: 'night' },
  loangenerator:  { x: 1310, y: 880, w: 330, kind: 'Utility',       tone: 'night' },
  cryptobot:      { x: 1700, y: 890, w: 320, kind: 'Daemon',        tone: 'sheet' }
};

export const ADVISORY_SCOPES = [
  {
    id: 'grc-audit',
    title: 'Cybersecurity, GRC & Risk Assessment',
    category: 'Governance & Risk',
    tagline: 'Enterprise compliance frameworks, threat modeling, and audit readiness.',
    duration: 'Usually 2 to 3 weeks',
    deliverables: [
      'Comprehensive risk register and vulnerability posture review',
      'KYC/AML screening workflow and sanction verification audit',
      'Zero-Trust identity and access architecture blueprint',
      'Executive remediation roadmap aligned with SOC 2 / ISO standards'
    ],
    idealFor: 'FinTech, regional enterprise and regulated operations'
  },
  {
    id: 'cloud-infra',
    title: 'Hybrid Cloud & Systems Architecture',
    category: 'Infrastructure & DevOps',
    tagline: 'Bridging Proxmox virtualization, Azure enterprise, and Cloudflare tunnels.',
    duration: 'Usually 3 to 5 weeks',
    deliverables: [
      'Fault-tolerant Proxmox VE clustering and hardware hypervisor setup',
      'Cloudflare Zero Trust encrypted edge tunnels replacing legacy VPNs',
      'Windows Server / Active Directory and SCCM compliance automation',
      'Off-site automated backup pipelines and disaster recovery testing'
    ],
    idealFor: 'SMBs, medical clinics, and distributed engineering teams'
  },
  {
    id: 'ai-automation',
    title: 'Production AI & Agentic Workflows',
    category: 'AI & Platforms',
    tagline: 'Custom React/Supabase platforms, n8n webhooks, and telemetry pipelines.',
    duration: 'Usually 4 to 6 weeks',
    deliverables: [
      'Bespoke production web application with Supabase auth and storage',
      'Autonomous n8n pipeline orchestration connected to CRM and databases',
      'Headless browser automation via Browserbase for data collection',
      'Real-time observability and event alerting via Telegram or email'
    ],
    idealFor: 'Startups, agriculture operators, and high-volume service businesses'
  }
];

export const HOMELAB_NODES = [
  {
    id: 'cloudflare',
    name: 'Cloudflare Zero Trust Edge',
    role: 'Ingress, WAF & Encrypted Tunnels',
    zone: 'Edge Security Layer',
    ip: 'edge.tdwas.com (Anycast)',
    status: 'ONLINE • TLS 1.3 Strict',
    specs: 'Cloudflared Daemon • Access Policies • DDoS Mitigation • Split DNS',
    latency: '8ms',
    ports: '0 Inbound (Tunnel Only)',
    description:
      'Eliminates exposed inbound firewall ports by routing all public SaaS demos, self-hosted APIs, and administrative consoles through outbound-only encrypted Cloudflare Tunnels with identity-aware Zero Trust gates.',
    services: [
      'Zero Trust Access Policies',
      'Automated SSL/TLS Edge Certificates',
      'WAF Rate Limiting & Bot Fight',
      'Multi-Domain Ingress Routing'
    ]
  },
  {
    id: 'proxmox',
    name: 'Proxmox VE Hypervisor Cluster',
    role: 'Bare-Metal Virtualization & LXC Core',
    zone: 'Core Compute Tier',
    ip: '10.20.0.10 /24 (VLAN 20)',
    status: 'ONLINE • ZFS RAID Healthy',
    specs: 'Bare-Metal Type-1 Hypervisor • QEMU/KVM + LXC Containers • Automated Snapshots',
    latency: '0.4ms',
    ports: 'VLAN 20 Segregated',
    description:
      'The backbone of the hybrid virtualization lab. Hosts isolated virtual machines and lightweight Linux containers for security testing, staging environments, and continuous telemetry workloads.',
    services: [
      'KVM Full Virtualization',
      'LXC Micro-Containers',
      'ZFS Storage Pools & Nightly Backups',
      'VLAN-Segmented Virtual Bridges'
    ]
  },
  {
    id: 'sccm',
    name: 'Windows Server & SCCM Hybrid Lab',
    role: 'Enterprise Endpoint & AD Governance',
    zone: 'Enterprise Windows Tier',
    ip: '10.30.0.15 /24 (VLAN 30)',
    status: 'ONLINE • AD Domain Synced',
    specs: 'Windows Server • Active Directory • Microsoft Endpoint Configuration Manager (SCCM)',
    latency: '0.6ms',
    ports: 'Kerberos / LDAP / WMI',
    description:
      'Replicates enterprise corporate IT environments to test Group Policy Objects (GPO), automated OS deployment, patch compliance baselines, and hybrid Azure AD identity synchronization.',
    services: [
      'Active Directory Domain Services (AD DS)',
      'SCCM Software & Patch Deployment',
      'GPO Security Hardening',
      'Hybrid Identity Telemetry'
    ]
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu CLI & Docker Automation Host',
    role: 'AI Agents, n8n & Python Daemons',
    zone: 'Application & AI Tier',
    ip: '10.20.0.42 /24 (VLAN 20)',
    status: 'ONLINE • 18 Containers Active',
    specs: 'Ubuntu LTS Headless CLI • Docker Compose • Systemd Services • Python Venvs',
    latency: '0.3ms',
    ports: 'Internal Bridge :5678, :8000',
    description:
      'High-efficiency Linux engine running containerized n8n workflow servers, Bybit quantitative Python trading bots, Supabase local dev stacks, and headless automation workers.',
    services: [
      'n8n Self-Hosted Webhook Engine',
      'Bybit Python Trading & Telegram Daemon',
      'Docker Compose Microservices',
      'Automated Cron & Log Aggregation'
    ]
  },
  {
    id: 'cloud',
    name: 'AWS, Azure & Supabase Cloud Bridge',
    role: 'Production SaaS & Managed Cloud',
    zone: 'Public Cloud Tier',
    ip: 'ca-central-1 / East US',
    status: 'ONLINE • Multi-Region HA',
    specs: 'AWS Compute/S3 • Azure Communication Services • Supabase Postgres & Auth',
    latency: '18ms',
    ports: 'HTTPS 443 / RLS API',
    description:
      'Production cloud fabric powering client-facing applications like KiddoChecker, BWG Life, Simcoe Connect, and BradfordFarmer with high availability, managed PostgreSQL RLS, and SMS/Email pipelines.',
    services: [
      'Supabase Postgres with Row-Level Security',
      'Azure Communication Services (SMS/Auth)',
      'AWS Cloud Infrastructure',
      'GitHub Actions CI/CD Pipelines'
    ]
  }
];

export const SKILL_MATRIX = [
  {
    category: 'Cybersecurity, GRC & Risk Operations',
    icon: Shield,
    items: [
      { name: 'GRC Frameworks & Policy Architecture', level: 96, tag: 'Principal' },
      { name: 'KYC / AML & Customer Due Diligence', level: 98, tag: '7+ Yrs Exp' },
      { name: 'Global Sanctions & PEP Screening', level: 97, tag: 'Enterprise' },
      { name: 'Identity & Access Management (IAM / RBAC)', level: 92, tag: 'Zero Trust' },
      { name: 'Operational Risk & Incident Triage', level: 94, tag: 'Lead' }
    ]
  },
  {
    category: 'Cloud, Virtualization & Systems',
    icon: Server,
    items: [
      { name: 'Proxmox VE & VMware Workstation', level: 95, tag: 'Lab Architect' },
      { name: 'AWS & Microsoft Azure Cloud Services', level: 90, tag: 'Production' },
      { name: 'Windows Server, Active Directory & SCCM', level: 92, tag: 'Enterprise IT' },
      { name: 'Ubuntu Linux CLI & Docker Containers', level: 94, tag: 'Daily Driver' },
      { name: 'Cloudflare Zero Trust & Network Tunnels', level: 96, tag: 'Edge Security' }
    ]
  },
  {
    category: 'Full-Stack AI & Software Engineering',
    icon: Code2,
    items: [
      { name: 'React, Vite & Tailwind CSS Architecture', level: 95, tag: '10+ Apps' },
      { name: 'Python (Automation, FinTech & Trading Bots)', level: 93, tag: 'Instructor' },
      { name: 'Supabase (PostgreSQL, Auth, RLS, Edge)', level: 94, tag: 'Full-Stack' },
      { name: 'n8n, Browserbase & Autonomous AI Agents', level: 95, tag: 'Orchestration' },
      { name: 'Google AI Studio, Opal, Copilot & Cline/Roo', level: 96, tag: 'AI Native' }
    ]
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    period: 'Present',
    role: 'Founder & Principal Technology / GRC Consultant',
    organization: 'TDWAS Technologies (tdwas.com)',
    location: 'Greater Toronto Area, ON',
    type: 'Executive & Advisory',
    highlights: [
      'Lead end-to-end cybersecurity governance, IT infrastructure modernization, and custom AI automation engagements for SMBs and enterprise clients across the Greater Toronto Area and Ontario.',
      'Architected and launched a portfolio of 10+ production web platforms and tools including BWG Life, Simcoe Connect, BradfordFarmer, KiddoChecker, and IleOja.',
      'Design hybrid cloud and Zero Trust environments leveraging AWS, Azure, Proxmox VE, Windows SCCM, and Cloudflare Tunnels.'
    ]
  },
  {
    period: 'Recent',
    role: 'AI Fellow & Validated Project Builder',
    organization: 'Handshake AI Fellowship / AI Skills Studio',
    location: 'Remote / Technical Fellowship',
    type: 'AI Engineering',
    highlights: [
      'Engineered and validated complex interactive technical projects—including the approved "Neon Breach" cybersecurity telemetry simulation—under strict quality and architectural benchmarks.',
      'Evaluated, stress-tested, and refined frontier LLM code generation, agentic reasoning workflows, and full-stack software implementations.'
    ]
  },
  {
    period: 'Recent Cohort',
    role: 'Startup Cohort Founder',
    organization: 'Half Baked START 30-Day Accelerator Program',
    location: 'Venture Accelerator',
    type: 'Product & Venture',
    highlights: [
      'Selected for an intensive 30-day startup execution cohort focused on rapid product validation, customer discovery, go-to-market unit economics, and full-stack MVP shipping.',
      'Translated domain problems in local commerce and compliance into deployable SaaS products powered by React, Supabase, and AI automation.'
    ]
  },
  {
    period: 'Prior Leadership',
    role: 'Lead Instructor — Computer Programming Curriculum',
    organization: 'Correlation One',
    location: 'Remote / Enterprise EdTech',
    type: 'Technical Leadership',
    highlights: [
      'Directed technical instruction for diverse cohorts in software engineering fundamentals, Python programming, algorithmic problem-solving, and modern web development workflows.',
      'Mentored aspiring technologists into technical careers through structured code reviews, live debugging sessions, and architectural workshops.'
    ]
  },
  {
    period: '7+ Years Domain Foundation',
    role: 'Risk Operations Analyst (KYC, Due Diligence & Sanctions)',
    organization: 'TDW Technologies & Enterprise Financial Risk Operations',
    location: 'Toronto, ON',
    type: 'GRC & Risk Ops',
    highlights: [
      'Executed high-stakes Know Your Customer (KYC), Enhanced Due Diligence (EDD), Anti-Money Laundering (AML), and global regulatory sanctions screening across complex corporate and individual entities.',
      'Investigated politically exposed persons (PEPs), adverse media signals, and cross-border compliance anomalies while maintaining strict audit defensibility and SLA precision.'
    ]
  }
];

export const BEYOND_TERMINAL_ITEMS = [
  {
    id: 'garden',
    title: 'High-Yield Agronomy & Kratky Hydroponics',
    badge: 'Bio-Systems & Self-Reliance',
    icon: Sprout,
    summary:
      'Applying systems engineering to soil and water in Southern Ontario. Cultivating a high-yield seasonal vegetable plot alongside passive, non-circulating DIY Kratky hydroponics rigs.',
    details: [
      'Active Crops: Sweet corn, heirloom & Roma tomatoes, yams, bell & hot peppers, and containerized potted apple trees.',
      'Kratky Method Engineering: Nutrient-calibrated passive hydroponic reservoirs designed for zero-pump energy efficiency and rapid foliar growth.',
      'Direct inspiration behind building the BradfordFarmer AgTech platform for Ontario growers.'
    ]
  },
  {
    id: 'pocketfm',
    title: 'Official Audio Storyteller on Pocket FM',
    badge: 'Narrative Architecture',
    icon: Headphones,
    summary:
      'Crafting immersive serialized fiction and long-form dramatic audio narratives as an official creator on Pocket FM, blending world-building with clean acoustic production.',
    details: [
      'Serializing multi-arc dramatic scripts engineered for high listener retention and episodic pacing.',
      'Paired with custom client-side Web Audio API recording and VU-metering tools built in-house.'
    ]
  },
  {
    id: 'video4k',
    title: '4K Broadcast & Field Production',
    badge: 'Panasonic HC-X1500 Cinema',
    icon: Video,
    summary:
      'Capturing crisp 4K 60p broadcast video, community stories, and technical breakdowns using a dedicated Panasonic HC-X1500 professional camcorder setup.',
    details: [
      'Full manual optical control, dual SD relay recording, and multi-channel XLR/PCM audio capture.',
      'Used for regional storytelling and technical educational modules.'
    ]
  },
  {
    id: 'auto',
    title: 'Hands-On Automotive Diagnostics & Engineering',
    badge: 'Mechanical Systems',
    icon: Wrench,
    summary:
      'When away from servers and compliance matrices, you will find Wisdom diagnosing OBD-II telemetry, performing preventative mechanical maintenance, and working under the hood.',
    details: [
      'Bridging mechanical troubleshooting with electronic control unit (ECU) diagnostics.',
      'Same root-cause analysis mindset whether debugging a Linux kernel panic or a powertrain sensor.'
    ]
  }
];
