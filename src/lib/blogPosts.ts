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
      'A February reflection on why AI should be understood as a human tool that expands our abilities, not a force that replaces our purpose.',
    publishedAt: '2026-02-18',
  },
  {
    slug: 'continuous-integration-and-deployment-explained',
    title: 'Continuous Integration and Deployment Explained',
    description:
      'Why CI/CD is less about fancy pipelines and more about reducing fear, shortening feedback loops, and shipping with confidence.',
    publishedAt: '2026-01-15',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'devops-principles-for-beginners',
    title: 'DevOps Principles for Beginners',
    description:
      'A practical guide to DevOps as a team habit: shared ownership, fast feedback, and reliable systems.',
    publishedAt: '2025-12-12',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'role-of-cloud-computing-in-ai',
    title: 'The Role of Cloud Computing in AI',
    description:
      'How cloud platforms act like utility infrastructure for AI: elastic power, shared tools, and faster experimentation.',
    publishedAt: '2025-11-14',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'how-machine-learning-models-work',
    title: 'How Machine Learning Models Work',
    description:
      'An intuitive walk-through of machine learning as curve-fitting with feedback, not magic.',
    publishedAt: '2025-10-10',
    updatedAt: '2026-02-18',
  },
  {
    slug: 'what-is-ai-engineering',
    title: 'What is AI Engineering?',
    description:
      'A plain-language explanation of AI engineering as the craft of turning fragile demos into dependable products.',
    publishedAt: '2025-09-12',
    updatedAt: '2026-02-18',
  },
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>
