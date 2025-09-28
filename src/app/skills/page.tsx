import { Container } from '../../components/Container.tsx'

const skills = [
  {
    category: 'AI Engineering Core Skills',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Data Preprocessing and Feature Engineering',
      'Model Deployment and Monitoring',
      'Reinforcement Learning',
      'Generative AI',
    ],
  },
  {
    category: 'Cloud & Containerization',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    category: 'CI/CD & Version Control',
    items: ['Jenkins', 'GitLab CI/CD', 'CircleCI', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Configuration Management',
    items: ['Terraform'],
  },
  {
    category: 'Monitoring & Scripting',
    items: ['Python', 'Bash'],
  },
  {
    category: 'Programming Tools & Database',
    items: ['Jira', 'Confluence', 'Slack', 'Linux System Administration', 'SQL/NoSQL'],
  },
]

export default function Skills() {
  return (
    <Container className="mt-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Skills
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Here are some of the technical proficiencies and areas of expertise I bring to the table.
      </p>
      <div className="mt-10 space-y-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              {skill.category}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}