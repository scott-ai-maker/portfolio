export const siteConfig = {
  name: 'Scott Gordon Portfolio',
  title: 'Scott Gordon | AI Engineer and Cloud Platform Specialist',
  description:
    'Portfolio of Scott Gordon featuring AI engineering, cloud platform modernization, and practical technical writing on AI, DevOps, and infrastructure.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ogImage: '/images/avatar.jpg',
  social: {
    github: 'https://github.com/scott-ai-maker',
    linkedin: 'https://www.linkedin.com/in/sagordon-dev/',
    credly: 'https://www.credly.com/users/scott-gordon.1dfe2f10',
  },
  keywords: [
    'Scott Gordon',
    'AI Engineer',
    'Cloud Platform Specialist',
    'DevOps Engineer',
    'Machine Learning',
    'Cloud Architecture',
    'Azure',
    'AWS',
    'Terraform',
    'MLOps',
    'Portfolio',
  ],
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
