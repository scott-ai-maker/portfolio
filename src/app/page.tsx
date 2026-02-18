import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Metadata } from 'next'

import { Button } from '../components/Button.tsx'
import { Card } from '../components/Card.tsx'
import { Container } from '../components/Container.tsx'
import {
  GitHubIcon,
  LinkedInIcon,
  CredlyIcon,
} from '../components/SocialIcons.tsx'
import { blogPosts } from '../lib/blogPosts.ts'
import { formatDate } from '../lib/formatDate.ts'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI Engineer, DevOps & Cloud Architect | Scott Gordon',
  description:
    'Scott Gordon is an AI engineer building production AI systems, DevOps platforms, and cloud architecture. Explore projects, technical writing, and engineering experience.',
  keywords: [
    'AI engineering',
    'DevOps',
    'cloud architecture',
    'MLOps',
    'platform engineering',
    'Scott Gordon',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Scott Gordon | AI Engineer, DevOps Specialist, and System Architect',
    description:
      'Explore AI engineering projects, cloud architecture work, and technical writing by Scott Gordon.',
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Gordon | AI Engineer, DevOps Specialist, and System Architect',
    description:
      'Explore AI engineering projects, cloud architecture work, and technical writing by Scott Gordon.',
  },
}

const slalom = '/images/logos/slalom.jpeg'
const vivsoftLogo = '/images/logos/vivsoft.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

type FeaturedPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
}

function FeaturedPostCard({ post }: { post: FeaturedPost }) {
  return (
    <Card as="article">
      <Card.Eyebrow as="time" dateTime={post.publishedAt} decorate>
        Published {formatDate(post.publishedAt)}
        {post.updatedAt ? ` · Updated ${formatDate(post.updatedAt)}` : ''}
      </Card.Eyebrow>
      <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
      <Card.Description>{post.description}</Card.Description>
      <Card.Cta href={`/blog/${post.slug}`}>Read article</Card.Cta>
    </Card>
  )
}

type WorkRole = {
  company: string
  title: string
  logo: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function WorkRoleItem({ role }: { role: WorkRole }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" width={50} height={50} className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<WorkRole> = [
    {
      company: 'Slalom Consulting, Boston, MA',
      title: 'Platform Engineer',
      logo: slalom,
      start: '2021',
      end: '2023',
    },
    {
      company: 'VivSoft, Herndon, VA',
      title: 'Systems Engineer II',
      logo: vivsoftLogo,
      start: '2024',
      end: '2025',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <WorkRoleItem key={role.company} role={role} />
        ))}
      </ol>
      <Button href="/experience" variant="secondary" className="mt-6 w-full">
        View full experience
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const portfolioImages = [
    {
      webpSrcSet:
        '/images/photos/image-1-352.webp 352w, /images/photos/image-1-576.webp 576w',
      pngSrcSet:
        '/images/photos/image-1-352.png 352w, /images/photos/image-1-576.png 576w',
      fallbackSrc: '/images/photos/image-1-352.png',
      alt: 'Abstract AI neural network with connected nodes and signal flow.',
    },
    {
      webpSrcSet:
        '/images/photos/image-2-352.webp 352w, /images/photos/image-2-576.webp 576w',
      pngSrcSet:
        '/images/photos/image-2-352.png 352w, /images/photos/image-2-576.png 576w',
      fallbackSrc: '/images/photos/image-2-352.png',
      alt: 'Cloud and DevOps pipeline illustration with deployment flow and observability metrics.',
    },
    {
      webpSrcSet:
        '/images/photos/image-3-352.webp 352w, /images/photos/image-3-576.webp 576w',
      pngSrcSet:
        '/images/photos/image-3-352.png 352w, /images/photos/image-3-576.png 576w',
      fallbackSrc: '/images/photos/image-3-352.png',
      alt: 'System architecture blueprint showing secure services, APIs, and automation links.',
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {portfolioImages.map((image, imageIndex) => (
          <div
            key={`${image.fallbackSrc}-${imageIndex}`}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <picture>
              <source
                type="image/webp"
                srcSet={image.webpSrcSet}
                sizes="(min-width: 640px) 18rem, 11rem"
              />
              <source
                type="image/png"
                srcSet={image.pngSrcSet}
                sizes="(min-width: 640px) 18rem, 11rem"
              />
              <img
                src={image.fallbackSrc}
                srcSet={image.pngSrcSet}
                sizes="(min-width: 640px) 18rem, 11rem"
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Scott Gordon',
        url: absoluteUrl('/'),
        jobTitle: 'AI Engineer, DevOps Specialist, and System Architect',
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
      {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: absoluteUrl('/'),
        description: siteConfig.description,
      },
    ],
  }

  const topicPriority = [
    'ai engineering',
    'ai',
    'machine learning',
    'devops',
    'cloud',
    'deployment',
  ]

  const getRelevanceScore = (post: FeaturedPost) => {
    const searchable = `${post.title} ${post.description}`.toLowerCase()
    return topicPriority.reduce(
      (score, topic, index) =>
        searchable.includes(topic)
          ? score + (topicPriority.length - index)
          : score,
      0,
    )
  }

  const featuredPosts = [...blogPosts]
    .sort((a, b) => {
      const relevanceDelta = getRelevanceScore(b) - getRelevanceScore(a)
      if (relevanceDelta !== 0) return relevanceDelta

      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    })
    .slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="mt-16 sm:mt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            AI engineer building reliable products with DevOps and cloud architecture.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I design and deliver production AI systems with modern DevOps,
            platform engineering, and cloud-native architecture. Explore recent
            writing, projects, and hands-on experience shipping dependable
            software.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteConfig.social.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteConfig.social.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={siteConfig.social.credly}
              aria-label="View Credly profile"
              icon={CredlyIcon}
            />
            <SocialLink
              href="mailto:scott.gordon72@outlook.com"
              aria-label="Email Scott"
              icon={MailIcon}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">Explore projects</Button>
            <Button href="/blog" variant="secondary">Read the blog</Button>
          </div>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <section aria-labelledby="latest-posts-heading">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
          <div className="lg:col-span-2">
            <h2 id="latest-posts-heading" className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Latest blog posts
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Recent essays on AI engineering, DevOps, cloud architecture, and
              practical software delivery.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-10">
              <Button href="/blog" variant="secondary">View all posts</Button>
            </div>
          </div>

          <div className="space-y-8">
            <Resume />

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Explore
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link className="transition hover:text-teal-500" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-teal-500" href="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-teal-500" href="/experience">
                    Experience
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>
      </Container>
    </>
  )
}
