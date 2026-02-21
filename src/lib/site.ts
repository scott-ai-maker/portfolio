export const siteConfig = {
  name: 'Scott Gordon Portfolio',
  title: 'Scott Gordon | AI Engineer and Platform Engineer',
  description:
    'Portfolio of Scott Gordon featuring production AI systems, platform engineering, and practical writing on MLOps, cloud architecture, and reliable delivery.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ogImage: '/images/avatar.jpg',
  social: {
    github: 'https://github.com/scott-ai-maker',
    linkedin: 'https://www.linkedin.com/in/sagordon-dev/',
    linkedinRecommendations:
      'https://www.linkedin.com/in/sagordon-dev/details/recommendations/',
    credly: 'https://www.credly.com/users/scott-gordon.1dfe2f10',
  },
  keywords: [
    'Scott Gordon',
    'AI Engineer',
    'Platform Engineer',
    'Machine Learning Engineer',
    'MLOps Engineer',
    'DevOps Engineer',
    'Cloud Architecture',
    'Production AI',
    'Azure',
    'AWS',
    'Terraform',
    'Kubernetes',
    'FastAPI',
    'MLOps',
    'Portfolio',
  ],
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
