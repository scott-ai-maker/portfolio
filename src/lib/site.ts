export const siteConfig = {
  name: 'Scott Gordon Portfolio',
  title: 'Scott Gordon | AI Engineer, DevOps Specialist, and System Architect',
  description:
    'Portfolio of Scott Gordon featuring AI engineering projects, cloud architecture work, and plain-language technical writing on AI and DevOps.',
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
    'DevOps Engineer',
    'System Architect',
    'Machine Learning',
    'Cloud Architecture',
    'MLOps',
    'Portfolio',
  ],
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
