export type Testimonial = {
  quote: string
  name: string
  role: string
  company?: string
  sourceUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I am pleased to recommend Scott for his outstanding performance as a Platform Engineer at Slalom Build. Scott has demonstrated exceptional skills and expertise in developing and deploying cloud-based solutions using various DevOps tools and technologies, such as Terraform, CircleCI, JFrog, GitHub, Docker, Kubernetes, Ansible, Jenkins, and AWS. He has also shown proficiency in Python, Bash scripts, and Linux, which he used to automate workflows, troubleshoot issues, and ensure compliance and security. Scott is a highly motivated and dedicated professional who always strives to learn new things and improve his craft. He is a great team player who collaborates effectively with his peers and mentors, and contributes to the positive and productive work environment. He is also a passionate advocate for continuous learning, community building, and professional development. I have no doubt that Scott will be a valuable asset to any organization that he joins, and I wholeheartedly endorse him for any Platform Engineering or DevOps role.',
    name: 'Olumuyiwa Kolayemi',
    role: 'Senior Engineer | Cloud & Data Platform Engineering | DevSecOps Practitioner | AWS Certified (x4)',
    company: 'Slalom Build · Same team (Nov 2023)',
    sourceUrl:
      'https://www.linkedin.com/in/sagordon-dev/details/recommendations/',
  },
  {
    quote:
      'Scott is an platform engineer who possesses strong and evolving skills in Terraform, CI/CD, and Python. He is a passionate learner with an insatiable appetite for acquiring new skills. His Terraform skills enable him to efficiently manage infrastructure as code (particularly in AWS). His experience with Bitbucket, GitLab and other CI/CD tools enabled automation of the same. Scott recently completed the \"application landing zone\" (IaC and pipeline to deploy it) for a Databricks accelerator we developed internally to help our clients stand up their environments quickly.',
    name: 'Charles J Christina',
    role: 'Senior Principal at Slalom Consulting',
    company: 'Slalom Consulting · Direct manager (Oct 2023)',
    sourceUrl:
      'https://www.linkedin.com/in/sagordon-dev/details/recommendations/',
  },
]
