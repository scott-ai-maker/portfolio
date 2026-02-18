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
  const roles = [
    {
      company: 'VivSoft',
      title: 'Systems Engineer II',
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
    </Container>
  )
}