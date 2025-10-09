import Image from 'next/image';

import { Card } from '../../components/Card.tsx';
import { SimpleLayout } from '../../components/SimpleLayout.tsx';

interface Project {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  demoLink?: {
    href: string;
    label: string;
  };
  logo: string;
  technologies?: string[];
  features?: string[];
}

const projects: Project[] = [
  {
    name: 'AI-Powered Chatbot (RAG System)',
    description:
      'Enterprise-grade RAG system with Azure OpenAI integration, JWT authentication, Redis caching, and rate limiting. Deployed on Azure Container Apps with full CI/CD pipeline.',
    link: { href: 'https://github.com/scott-ai-maker/ai-powered-chatbot', label: 'github.com' },
    demoLink: { href: 'https://ai-career-mentor-frontend.agreeablecoast-963be1b8.eastus2.azurecontainerapps.io/', label: 'Live Demo' },
    logo: 'ai-powered-chatbot.png',
    technologies: ['Python', 'FastAPI', 'Azure OpenAI', 'RAG', 'Docker', 'Azure Container Apps'],
    features: [
      'RAG (Retrieval-Augmented Generation) system',
      'Azure OpenAI integration',
      'Enterprise security with JWT authentication',
      'Redis caching for performance',
      'Rate limiting and monitoring',
      'Full Azure deployment with Container Apps'
    ]
  },
  {
    name: 'AI Image Analyzer',
    description:
      'Advanced computer vision application with real-time image processing, featuring drag-and-drop uploads, color analysis, object detection, and face detection with modern React frontend.',
    link: { href: 'https://github.com/scott-ai-maker/ai-image-analyzer', label: 'github.com' },
    demoLink: { href: 'https://web-image-analyzer.nicesea-5e74ee97.eastus2.azurecontainerapps.io/', label: 'Live Demo' },
    logo: 'image-recognition-system.png',
    technologies: ['Python', 'FastAPI', 'React', 'Computer Vision', 'PIL/OpenCV', 'Azure Container Apps'],
    features: [
      'Real computer vision processing',
      'Drag-and-drop image uploads',
      'Color analysis, object detection, face detection',
      'Modern React frontend with portfolio styling',
      'Enterprise patterns (RBAC, monitoring, auto-scaling)',
      'CI/CD pipelines with GitHub Actions'
    ]
  },
  {
    name: 'Predictive Analytics Platform',
    description:
      'A platform leveraging machine learning algorithms to forecast trends and analyze data.',
    link: { href: 'https://github.com/scott-ai-maker/predictive-analytics-platform', label: 'github.com' },
    logo: 'predictive-analytics-platform.png',
  },
  {
    name: 'AI-Powered Recommendation Engine',
    description:
      'A recommendation engine using collaborative filtering and deep learning techniques.',
    link: { href: 'https://github.com/scott-ai-maker/ai-recommendation-engine', label: 'github.com' },
    logo: 'ai-powered-recommendation-engine.png',
  },
  {
    name: 'Automated Machine Learning Pipeline',
    description:
      'An end-to-end pipeline for automating machine learning workflows, including data preprocessing and model deployment.',
    link: { href: 'https://github.com/scott-ai-maker/automated-ml-pipeline', label: 'github.com' },
    logo: 'automated-machine-learning-pipeline.png',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={`/images/logos/${project.logo}`}
                alt={`Logo for ${project.name}`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            
            {project.technologies && (
              <div className="relative z-10 mt-4">
                <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="relative z-10 mt-4">
                <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Key Features:</h3>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-xs text-zinc-500 dark:text-zinc-500 italic">
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="relative z-30 mt-6 space-y-2">
              <a 
                href={project.link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex text-sm font-medium text-zinc-600 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400 transition-colors"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>
              {project.demoLink && (
                <a 
                  href={project.demoLink.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                >
                  <svg className="h-6 w-6 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="ml-2">{project.demoLink.label}</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
