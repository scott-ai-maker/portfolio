import { Container } from '../../components/Container.tsx'
import { Role } from '../../components/Role.tsx'

export default function Experience() {
  const roles = [
    {
      company: 'VivSoft',
      title: 'Systems Engineer II',
      start: '2024',
      end: '2025',
      description: [
        'Maintained and upgraded systems to ensure operational continuity, including troubleshooting and remediating bugs.',
        'Developed and implemented scripts to automate processes, improving efficiency and reducing manual workload.',
        'Assisted in migrating client systems from TFS to GitHub Enterprise Server (GHES).',
        'Managed and resolved ServiceNow (SNOW) tickets, delivering timely issue resolution.',
        'Designed and maintained Terraform infrastructure to ensure robust and scalable environments.',
        'Created and optimized GitHub Actions workflows, streamlining CI/CD processes.',
        'Participated in control board meetings to secure approval for system changes and maintain compliance and stability.',
        'Conducted daily tests on backend operations servers to ensure functionality and performed necessary remediation.',
        'Utilized PowerShell scripting and Azure to enhance system automation and cloud infrastructure management.',
      ],
    },
    {
      company: 'Slalom Consulting',
      title: 'Platform Engineer',
      start: '2021',
      end: '2023',
      description: [
        'Engineered cloud-native infrastructure solutions for a major gas pipeline operator, leveraging AWS services to modernize legacy systems and improve platform reliability.',
        'Collaborated with cross-functional teams to design and implement scalable CI/CD pipelines using CircleCI, Terraform, and Docker.',
        'Supported cloud migration efforts by provisioning secure, resilient environments across development, staging, and production using AWS IAM, EC2, S3, RDS, and CloudWatch.',
        'Automated infrastructure deployment and configuration management, reducing manual overhead and accelerating delivery timelines.',
        'Monitored system performance and resolved runtime issues to ensure high availability and compliance with industry standards.',
        'Documented architecture decisions, operational workflows, and troubleshooting guides to support long-term maintainability and smooth client handoff.',
        'Contributed to Slalom’s internal knowledge base by sharing best practices in platform engineering and cloud operations.',
      ],
    },
  ]

  return (
    <Container className="mt-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Professional Experience
      </h1>
      <div className="mt-6 space-y-10">
        {roles.map((role, index) => (
          <Role key={index} role={role} />
        ))}
      </div>
    </Container>
  )
}