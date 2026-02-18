import { formatDate } from '@/lib/formatDate'
import type { BlogPost } from '@/lib/blogPosts'
import { Prose } from '@/components/Prose'
import SimpleLayout from '@/components/SimpleLayout'

export default function BlogPostLayout({
  post,
  children,
}: {
  post: BlogPost
  children: React.ReactNode
}) {
  return (
    <SimpleLayout title={post.title} intro={post.description}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
        {post.updatedAt && (
          <>
            {' '}·{' '}
            <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
          </>
        )}
      </p>

      <Prose className="mt-8 max-w-2xl prose-zinc dark:prose-invert prose-a:text-teal-600 hover:prose-a:text-teal-500 dark:prose-a:text-teal-400 prose-p:my-6 prose-ul:my-6 prose-li:my-2">
        {children}
      </Prose>
    </SimpleLayout>
  )
}
