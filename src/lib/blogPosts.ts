export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-is-a-tool-for-humanity',
    title: 'AI Is a Tool for Humanity',
    description:
      'Why AI is a human tool: practical guidance for responsible AI engineering, including safety, transparency, and measurable real-world impact.',
    publishedAt: '2026-02-18',
  },
  {
    slug: 'continuous-integration-and-deployment-explained',
    title: 'Continuous Integration and Deployment Explained',
    description:
      'CI/CD fundamentals for DevOps teams: continuous integration, automated tests, safe deployment pipelines, and faster, more reliable software delivery.',
    publishedAt: '2026-01-15',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'devops-principles-for-beginners',
    title: 'DevOps Principles for Beginners',
    description:
      'A beginner-friendly DevOps primer on shared ownership, automation, rapid feedback loops, and shipping reliable cloud software with confidence.',
    publishedAt: '2025-12-12',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'role-of-cloud-computing-in-ai',
    title: 'The Role of Cloud Computing in AI',
    description:
      'How cloud computing powers AI: scalable infrastructure, cost control, security tradeoffs, and cloud-native MLOps patterns for production workloads.',
    publishedAt: '2025-11-14',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'how-machine-learning-models-work',
    title: 'How Machine Learning Models Work',
    description:
      'An intuitive guide to machine learning models: training, evaluation, data quality, overfitting, and monitoring performance in production.',
    publishedAt: '2025-10-10',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'what-is-ai-engineering',
    title: 'What is AI Engineering?',
    description:
      'What AI engineering means in practice: turning ML demos into trustworthy products with monitoring, reliability, privacy controls, and safe fallbacks.',
    publishedAt: '2025-09-12',
    updatedAt: '2026-02-18',
  },
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>
