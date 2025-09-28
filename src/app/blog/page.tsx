import { Container } from '../../components/Container.tsx'
import { Card } from '../../components/Card.tsx'

const articles = [
  {
    title: 'What is AI Engineering?',
    description:
      'An introduction to AI engineering, explaining its importance and how it powers modern applications.',
    link: '/blog/what-is-ai-engineering',
  },
  {
    title: 'DevOps Principles for Beginners',
    description:
      'A beginner-friendly guide to understanding DevOps principles and their role in software development.',
    link: '/blog/devops-principles-for-beginners',
  },
  {
    title: 'How Machine Learning Models Work',
    description:
      'A simplified explanation of how machine learning models are trained and used to make predictions.',
    link: '/blog/how-machine-learning-models-work',
  },
  {
    title: 'The Role of Cloud Computing in AI',
    description:
      'Exploring how cloud platforms enable scalable AI solutions and why they are essential for AI engineers.',
    link: '/blog/role-of-cloud-computing-in-ai',
  },
  {
    title: 'Continuous Integration and Deployment Explained',
    description:
      'Breaking down CI/CD pipelines and their importance in modern software development.',
    link: '/blog/continuous-integration-and-deployment-explained',
  },
]

export default function Blog() {
  return (
    <Container className="mt-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Explore articles on AI engineering and DevOps principles, written for a broad audience.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {articles.map((article, index) => (
          <Card key={index}>
            <Card.Title href={article.link}>{article.title}</Card.Title>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta href={article.link}>Read More</Card.Cta>
          </Card>
        ))}
      </div>
    </Container>
  )
}