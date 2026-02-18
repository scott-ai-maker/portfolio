import Link from 'next/link'

import { ContainerInner, ContainerOuter } from './Container.tsx'
import { GitHubIcon, LinkedInIcon, CredlyIcon } from './SocialIcons.tsx'
import { siteConfig } from '@/lib/site'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group -m-1 p-1"
    >
      <Icon className="h-5 w-5 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/skills">Skills</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <div className="ml-2 flex items-center gap-3 border-l border-zinc-200 pl-4 dark:border-zinc-700/50">
                  <SocialLink
                    href={siteConfig.social.github}
                    label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                  <SocialLink
                    href={siteConfig.social.linkedin}
                    label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  />
                  <SocialLink
                    href={siteConfig.social.credly}
                    label="View Credly profile"
                    icon={CredlyIcon}
                  />
                </div>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Scott Gordon. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
