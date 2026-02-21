import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Metadata } from 'next'

import { Container } from '../../components/Container.tsx'
import { RecommendedBy } from '../../components/RecommendedBy.tsx'
import { Testimonials } from '../../components/Testimonials.tsx'
import { GitHubIcon, LinkedInIcon, CredlyIcon } from '../../components/SocialIcons.tsx'
import portraitImage from '../../../public/images/avatar.jpg'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About | AI Engineer and Platform Engineer',
  description:
    'About Scott Gordon: AI engineer and platform engineer building production AI systems, resilient cloud infrastructure, and reliable delivery pipelines.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Scott Gordon Portfolio',
    description:
      'Learn about Scott Gordon’s experience building production AI systems and cloud-native platforms.',
    url: '/about',
    siteName: siteConfig.name,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Scott Gordon Portfolio',
    description:
      'Learn about Scott Gordon’s experience building production AI systems and cloud-native platforms.',
  },
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: string
}) {
  return (
    <li className={clsx(className || '', 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in new tab)`}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children} ↗</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Scott Gordon, and I build production AI systems and platform foundations
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m an AI and platform engineer focused on shipping systems that hold up in production. My work spans cloud infrastructure, API services, retrieval workflows, and delivery automation, with an emphasis on reliability, security, and operational clarity.
            </p>
            <p>
              Across Azure and AWS environments, I design and operate systems with Terraform, Kubernetes, FastAPI, and CI/CD pipelines. At VivSoft, I supported secure Azure delivery for federal programs and automated operations with GitHub Actions and scripting. At Slalom Consulting, I helped modernize cloud infrastructure and deployment workflows for enterprise clients.
            </p>
            <p>
              I combine platform engineering discipline with practical AI implementation, including LangChain, Transformers, vector search, and production-minded application design. I enjoy turning complex technical ideas into maintainable systems teams can adopt quickly and improve over time.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={siteConfig.social.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={siteConfig.social.linkedin} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href={siteConfig.social.credly} icon={CredlyIcon} className="mt-4">
              View Credly profile
            </SocialLink>
          </ul>
        </div>
      </div>
      <Testimonials className="mt-16 max-w-3xl" />
      <RecommendedBy className="mt-8 max-w-3xl" />
    </Container>
  )
}
