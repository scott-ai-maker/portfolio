import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

type BlogPostMetadataInput = {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
}

export function buildBlogPostMetadata({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
}: BlogPostMetadataInput): Metadata {
  const url = `/blog/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: siteConfig.name,
      publishedTime: publishedAt,
      modifiedTime: updatedAt ?? publishedAt,
      authors: ['Scott Gordon'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
