import { Button } from './Button.tsx'
import { siteConfig } from '@/lib/site'

type TestimonialsProps = {
  title?: string
  className?: string
}

export function Testimonials({
  title = 'Testimonials',
  className,
}: TestimonialsProps) {
  return (
    <section
      className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${className ?? ''}`}
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
      >
        {title}
      </h2>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        Verified recommendations and endorsements are available on LinkedIn.
      </p>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I only publish quotes on-site with explicit permission to ensure
        accurate attribution and context.
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
