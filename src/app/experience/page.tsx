import { Container } from '../../components/Container.tsx'
import { Role } from '../../components/Role.tsx'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience across AI engineering, DevOps, and cloud platform modernization.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Experience | Scott Gordon Portfolio',
    description:
      'Career highlights and delivery experience across cloud infrastructure, automation, and AI systems.',
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
        'Develop and deliver AI literacy programs that help professionals build foundational and applied AI skills.',
        'Design hands-on training in machine learning, data science, and emerging tools using practical workflows.',
        'Advise organizations on AI strategy and workforce upskilling to align technical efforts with business value.',
        'Build accessible learning paths that demystify AI concepts for technical and non-technical audiences.',
        'Promote ethical and responsible AI practices aligned with organizational goals and compliance needs.',
      ],
    },
    {
      company: 'VivSoft',
      title: 'Systems Engineer II',
      logo: vivsoftLogo,
      start: '2024',
      end: '2025',
      description: [
        'Maintained and upgraded systems to ensure operational continuity, including troubleshooting and remediating bugs.',
        'Developed and implemented scripts to automate processes, improving efficiency and reducing manual workload.',
        'Assisted in migrating client systems from TFS to GitHub Enterprise Server (GHES).',
        'Managed and resolved ServiceNow (SNOW) tickets, delivering timely issue resolution.',
        'Designed and maintained Terraform infrastructure to ensure robust and scalable environments.',
        'Created and optimized GitHub Actions workflows, streamlining CI/CD processes.',
        'Participated in control board meetings to secure approval for system changes and maintain compliance and stability.',
        'Conducted daily tests on backend operations servers to ensure functionality and performed necessary remediation.',
        'Utilized PowerShell scripting and Azure to enhance system automation and cloud infrastructure management.',
      ],
    },
    {
      company: 'Slalom Consulting',
      title: 'Platform Engineer',
      logo: slalomLogo,
      start: '2021',
      end: '2023',
      description: [
        'Engineered cloud-native infrastructure solutions for a major gas pipeline operator, leveraging AWS services to modernize legacy systems and improve platform reliability.',
        'Collaborated with cross-functional teams to design and implement scalable CI/CD pipelines using CircleCI, Terraform, and Docker.',
        'Supported cloud migration efforts by provisioning secure, resilient environments across development, staging, and production using AWS IAM, EC2, S3, RDS, and CloudWatch.',
        'Automated infrastructure deployment and configuration management, reducing manual overhead and accelerating delivery timelines.',
        'Monitored system performance and resolved runtime issues to ensure high availability and compliance with industry standards.',
        'Documented architecture decisions, operational workflows, and troubleshooting guides to support long-term maintainability and smooth client handoff.',
        'Contributed to Slalom’s internal knowledge base by sharing best practices in platform engineering and cloud operations.',
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
          Hands-on delivery across cloud infrastructure, automation, and AI-ready platform modernization.
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