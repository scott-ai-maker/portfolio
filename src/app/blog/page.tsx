import { Container } from '../../components/Container.tsx'
import { Card } from '../../components/Card.tsx'
import { blogPosts } from '@/lib/blogPosts'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical writing on AI engineering, MLOps, platform reliability, and cloud delivery by Scott Gordon.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Scott Gordon Portfolio',
    description:
      'Practical writing on AI engineering, MLOps, platform reliability, and cloud delivery by Scott Gordon.',
    url: '/blog',
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Scott Gordon Portfolio',
    description:
      'Practical writing on AI engineering, MLOps, platform reliability, and cloud delivery by Scott Gordon.',
  },
}

function formatMonthYear(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatLongDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default function Blog() {
  return (
    <Container className="mt-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Blog
      </h1>
      <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-500 via-accent to-teal-400" />
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Practical notes on shipping AI and platform systems: architecture, delivery, reliability, and real-world tradeoffs.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {blogPosts.map((article) => (
          <Card key={article.slug}>
            <Card.Eyebrow as="div" decorate>
              <time dateTime={article.publishedAt}>
                Published {formatMonthYear(article.publishedAt)}
              </time>
              {article.updatedAt && (
                <>
                  {' '}·{' '}
                  <time dateTime={article.updatedAt}>
                    Updated {formatLongDate(article.updatedAt)}
                  </time>
                </>
              )}
            </Card.Eyebrow>
            <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta href={`/blog/${article.slug}`}>Read article</Card.Cta>
          </Card>
        ))}
      </div>
    </Container>
  )
}