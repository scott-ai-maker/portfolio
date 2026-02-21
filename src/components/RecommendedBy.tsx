import Link from 'next/link'

import { Button } from './Button.tsx'
import { testimonials } from '@/lib/testimonials'
import { siteConfig } from '@/lib/site'

export function RecommendedBy({ className }: { className?: string }) {
  if (testimonials.length === 0) {
    return (
      <section
        className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${className ?? ''}`}
        aria-labelledby="recommended-by-heading"
      >
        <h2
          id="recommended-by-heading"
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Recommended by
        </h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          This section displays approved recommendations once they are added.
        </p>
        <div className="mt-4">
          <Button
            variant="secondary"
            href={siteConfig.social.linkedinRecommendations}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn recommendations ↗
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section
      className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${className ?? ''}`}
      aria-labelledby="recommended-by-heading"
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id="recommended-by-heading"
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Recommended by
        </h2>
        <Link
          href={siteConfig.social.linkedinRecommendations}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          Verify on LinkedIn ↗
        </Link>
      </div>
      <ul className="mt-4 space-y-4">
        {testimonials.map((testimonial) => (
          <li
            key={`${testimonial.name}-${testimonial.role}`}
            className="rounded-xl border border-zinc-100 p-4 dark:border-zinc-800"
          >
            <blockquote className="text-sm text-zinc-600 dark:text-zinc-400">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {testimonial.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {testimonial.role}
              {testimonial.company ? `, ${testimonial.company}` : ''}
            </p>
            {testimonial.sourceUrl ? (
              <Link
                href={testimonial.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                Source ↗
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
