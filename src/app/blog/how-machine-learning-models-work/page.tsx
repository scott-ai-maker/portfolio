import BlogPostLayout from '@/components/BlogPostLayout';
import { blogPostsBySlug } from '@/lib/blogPosts';
import { buildBlogPostMetadata } from '@/lib/seo';

const post = blogPostsBySlug['how-machine-learning-models-work'];

export const metadata = buildBlogPostMetadata({
  title: post.title,
  description: post.description,
  slug: post.slug,
  publishedAt: post.publishedAt,
  updatedAt: post.updatedAt,
});

export default function HowMachineLearningModelsWork() {
  return (
    <BlogPostLayout post={post}>
      <p>
        People often say machine learning is magic. It is not magic. It is curve fitting with feedback.
      </p>

      <p>
        Imagine you are trying to predict tomorrow&apos;s temperature. You look at past days, humidity, wind, and season, then draw a rule that best matches what happened before. That rule is the model.
      </p>

      <p>
        Training is the process of adjusting that rule so prediction errors get smaller. If the model guesses badly, we nudge internal parameters. If it improves, we keep going. After many small corrections, the model becomes useful.
      </p>

      <p>
        The most important lesson is that data quality sets the ceiling. If your examples are noisy, biased, or incomplete, no clever algorithm will rescue you. Bad ingredients make bad soup.
      </p>

      <p>
        We then test on new data the model has never seen. This is crucial. A student who memorizes yesterday&apos;s answers is not educated; neither is a model that only memorizes training rows.
      </p>

      <p>
        In production, models continue to meet reality. User behavior changes, markets shift, sensors drift. So a reliable system monitors performance, flags anomalies, and retrains on better data when needed.
      </p>

      <p>
        Once you see this clearly, machine learning becomes less mystical and more practical. It is a disciplined loop: collect examples, fit a rule, test honestly, deploy carefully, and keep learning from feedback.
      </p>
    </BlogPostLayout>
  );
}