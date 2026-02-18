import { Container } from '../../components/Container.tsx'
import { Button } from '../../components/Button.tsx'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills across AI engineering, cloud platforms, infrastructure as code, and DevOps automation.',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    title: 'Skills | Scott Gordon Portfolio',
    description:
      'AI, cloud, and DevOps skills used to build secure, scalable, production-ready systems.',
    url: '/skills',
    siteName: siteConfig.name,
    type: 'website',
  },
}

const skills = [
  {
    category: 'AI Engineering Core Skills',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Data Preprocessing and Feature Engineering',
      'Model Deployment and Monitoring',
      'Reinforcement Learning',
      'Generative AI',
    ],
  },
  {
    category: 'Cloud & Containerization',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    category: 'CI/CD & Version Control',
    items: ['Jenkins', 'GitLab CI/CD', 'CircleCI', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Configuration Management',
    items: ['Terraform'],
  },
  {
    category: 'Monitoring & Scripting',
    items: ['Python', 'Bash'],
  },
  {
    category: 'Programming Tools & Database',
    items: ['Jira', 'Confluence', 'Slack', 'Linux System Administration', 'SQL/NoSQL'],
  },
]

export default function Skills() {
  const totalSkills = skills.reduce((count, skillGroup) => count + skillGroup.items.length, 0)

  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Skills & Tooling
        </h1>
        <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-500 via-accent to-teal-400" />
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Technical capabilities across AI engineering, cloud architecture, infrastructure automation, and production delivery.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
            {skills.length} Skill Domains
          </span>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-accent/20 dark:text-sky-300">
            {totalSkills}+ Tools & Competencies
          </span>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            AI, Cloud, DevOps
          </span>
        </div>
      </header>

      <div className="mt-10 grid gap-6">
        {skills.map((skill, index) => (
          <article
            key={index}
            className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-teal-50/40 via-white to-white p-6 shadow-sm ring-1 ring-zinc-900/5 transition-colors hover:border-teal-200 dark:border-zinc-700/60 dark:from-teal-950/15 dark:via-zinc-900 dark:to-zinc-900 dark:ring-white/10 dark:hover:border-teal-700/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {skill.category}
              </h2>
              <p className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {skill.items.length} Skills
              </p>
            </div>
            <ul className="mt-5 grid gap-2 border-l border-teal-200/70 pl-4 text-sm text-zinc-700 dark:border-teal-800/60 dark:text-zinc-300 sm:grid-cols-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 leading-6">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 ring-1 ring-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:ring-white/10">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Certifications & Badges
        </h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Professional certifications and verifiable technical badges are available through my Credly profile.
        </p>
        <div className="mt-4">
          <Button
            variant="secondary"
            href={siteConfig.social.credly}
          >
            View Credentials on Credly
          </Button>
        </div>
      </section>
    </Container>
  )
}