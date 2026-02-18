import SimpleLayout from '@/components/SimpleLayout';
import { blogPostsBySlug } from '@/lib/blogPosts';
import { formatDate } from '@/lib/formatDate';
import { buildBlogPostMetadata } from '@/lib/seo';

const post = blogPostsBySlug['devops-principles-for-beginners'];

export const metadata = buildBlogPostMetadata({
  title: post.title,
  description: post.description,
  slug: post.slug,
  publishedAt: post.publishedAt,
  updatedAt: post.updatedAt,
});

export default function DevOpsPrinciplesForBeginners() {
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

      <p>
        DevOps sounds like a technology, but it is really a team habit. It is what happens when the people who write software and the people who run software stop throwing problems over a wall.
      </p>

      <p>
        Think of a restaurant kitchen. If chefs, servers, and dishwashers do not coordinate, customers wait, orders go wrong, and everyone blames everyone. Software teams are the same.
      </p>

      <p>
        DevOps fixes that by tightening the feedback loop. Build small changes, test quickly, deploy safely, observe behavior, learn, and improve. Repeat.
      </p>

      <ul>
        <li><strong>Shared ownership:</strong> The same team owns both feature delivery and operational reliability.</li>
        <li><strong>Automation:</strong> Machines do repetitive checks so humans can focus on judgment and design.</li>
        <li><strong>Small batch changes:</strong> Tiny releases are easier to review, test, and roll back.</li>
        <li><strong>Fast feedback:</strong> Monitoring and alerting reveal problems while they are still small.</li>
      </ul>

      <p>
        Beginners often ask, "Which tool should we install first?" That is the wrong first question. Start with behavior: daily collaboration, clear ownership, and visible reliability goals.
      </p>

      <p>
        Then pick tools that support that behavior. A fancy pipeline cannot rescue a fragmented team, but a healthy team can do excellent work even with modest tooling.
      </p>

      <p>
        The real promise of DevOps is not speed for its own sake. It is confidence: the confidence that you can ship value quickly without gambling with your users&apos; trust.
      </p>
    </SimpleLayout>
  );
}