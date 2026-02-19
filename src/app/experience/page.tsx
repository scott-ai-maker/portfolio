import { Container } from '../../components/Container.tsx'
import { Role } from '../../components/Role.tsx'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience delivering AI-enabled systems, cloud platform engineering, and production automation across enterprise and federal contexts.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Experience | Scott Gordon Portfolio',
    description:
      'Career highlights across production AI systems, platform reliability, and cloud automation.',
    url: '/experience',
    siteName: siteConfig.name,
    type: 'website',
  },
}

export default function Experience() {
  const visibleEdgeLogo = '/images/logos/visible-edge.svg'
  const vivsoftLogo = '/images/logos/vivsoft.jpg'
  const slalomLogo = '/images/logos/slalom.jpeg'

  const roles = [
    {
      company: 'Visible Edge',
      title: 'AI, ML and DS Specialist',
      logo: visibleEdgeLogo,
      start: '2025',
      end: 'Present',
      description: [
        'Designed and delivered applied AI training programs focused on practical implementation, not just theory.',
        'Built hands-on labs for NLP, Transformers, retrieval workflows, and model-driven application design.',
        'Advised stakeholders on AI adoption strategy, prioritization, and responsible-use guardrails.',
        'Translated complex AI concepts into production-oriented workflows for technical and non-technical teams.',
        'Standardized reusable learning paths that improved consistency of onboarding and AI upskilling.',
      ],
    },
    {
      company: 'VivSoft',
      title: 'Systems Engineer II',
      logo: vivsoftLogo,
      start: '2024',
      end: '2025',
      description: [
        'Owned day-to-day reliability for backend systems, troubleshooting incidents and driving remediation to closure.',
        'Automated recurring operational tasks with PowerShell and cloud tooling to reduce manual effort and execution risk.',
        'Helped migrate source control and delivery workflows from TFS to GitHub Enterprise Server.',
        'Built and maintained Terraform-managed Azure infrastructure aligned to security and scalability requirements.',
        'Implemented and refined GitHub Actions pipelines to improve delivery consistency across environments.',
        'Supported change-control reviews and release governance for stable production rollouts.',
        'Executed operational health checks and system validation to catch failures before downstream impact.',
        'Managed ServiceNow ticket flow with a focus on response quality, turnaround, and incident follow-through.',
      ],
    },
    {
      company: 'Slalom Consulting',
      title: 'Platform Engineer',
      logo: slalomLogo,
      start: '2021',
      end: '2023',
      description: [
        'Engineered cloud-native AWS infrastructure for a major energy-sector client modernizing legacy systems.',
        'Partnered with delivery teams to design CI/CD pipelines using CircleCI, Terraform, and Docker.',
        'Provisioned secure multi-environment cloud foundations across development, staging, and production.',
        'Automated infrastructure deployment and configuration workflows to speed up releases and reduce drift.',
        'Monitored runtime health and resolved operational issues to maintain service reliability.',
        'Documented architecture decisions, runbooks, and handoff guidance to improve long-term maintainability.',
        'Shared platform engineering standards and best practices through internal knowledge contributions.',
      ],
    },
  ]

  const education = [
    {
      title: 'Visible Edge Institute – Artificial Intelligence Technologies Program',
      period: 'Oct 2025 – Jan 2026 (375 hours)',
      details: [
        'Coursework included LangChain (Intro and Advanced), Transformers, NLP, CNNs, and Fuzzy Logic.',
        'Completed hands-on AI and machine learning projects aligned to production-oriented workflows.',
      ],
    },
    {
      title: 'B.S. in Information Technology – University of Phoenix',
      period: '',
      details: [],
    },
  ]

  const certifications = [
    'IBM AI Developer Certification',
    'Microsoft Certified: Azure Fundamentals (2020)',
    'AWS Certified Solutions Architect – Associate (2022)',
    'Python for Data Science and AI (2023)',
    'DevOps & SRE Fundamentals – Linux Foundation (2023)',
    'Containers for Developers – Linux Foundation (2024)',
  ]

  const totalYears = `${roles[roles.length - 1].start} - ${roles[0].end}`

  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Professional Experience
        </h1>
        <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-500 via-accent to-teal-400" />
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Delivery experience across production AI enablement, platform reliability, and cloud automation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
            {roles.length} Roles
          </span>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-accent/20 dark:text-sky-300">
            {totalYears}
          </span>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Cloud, DevOps, AI
          </span>
        </div>
      </header>
      <div className="mt-10 space-y-8">
        {roles.map((role, index) => (
          <Role key={index} role={role} />
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 ring-1 ring-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:ring-white/10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Education & Certifications
        </h2>

        <div className="mt-6 space-y-6">
          {education.map((entry) => (
            <article key={entry.title}>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {entry.title}
              </h3>
              {entry.period ? (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {entry.period}
                </p>
              ) : null}
              {entry.details.length > 0 ? (
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <ul className="mt-8 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
          {certifications.map((certification) => (
            <li key={certification} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
              <span>{certification}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}