import Image from 'next/image';
import type { Metadata } from 'next';

import { Card } from '../../components/Card.tsx';
import { SimpleLayout } from '../../components/SimpleLayout.tsx';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Flagship AI and platform engineering projects covering architecture, deployment automation, security controls, and production operations.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Scott Gordon Portfolio',
    description:
      'Explore production-focused AI and cloud platform projects by Scott Gordon.',
    url: '/projects',
    siteName: siteConfig.name,
    type: 'website',
  },
};

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
  impactMetrics?: string[];
  architectureLinks?: Array<{
    href: string;
    label: string;
    type: string;
  }>;
}

const projects: Project[] = [
  {
    name: 'AI-Powered Chatbot (RAG System)',
    description:
      'Production-focused RAG assistant built to answer domain-specific questions with grounded responses, secure access, and cloud deployment patterns suitable for enterprise workloads.',
    link: { href: 'https://github.com/scott-ai-maker/ai-powered-chatbot', label: 'github.com' },
    demoLink: { href: 'https://ai-career-mentor-frontend.agreeablecoast-963be1b8.eastus2.azurecontainerapps.io/', label: 'Live Demo' },
    logo: 'ai-powered-chatbot-mark.svg',
    technologies: ['Python', 'FastAPI', 'Azure OpenAI', 'RAG', 'Docker', 'Azure Container Apps'],
    features: [
      'Retrieval-augmented generation pipeline for grounded answers',
      'JWT authentication and rate limiting for secure API access',
      'Redis caching to reduce response latency and repeated token usage',
      'Containerized deployment on Azure Container Apps',
      'CI/CD workflow for repeatable builds and releases',
      'Operational monitoring and health-check endpoints'
    ],
    impactMetrics: [
      'p95 latency — Measured: pending | Est: ~1.4s cached, ~2.9s full RAG path',
      'Grounded-answer quality — Measured: pending | Est: ~78-85% relevance/citation pass rate',
      'Deployment frequency — Measured: pending | Est: 3-6 production releases/month'
    ],
    architectureLinks: [
      {
        href: 'https://github.com/scott-ai-maker/ai-powered-chatbot/blob/main/ARCHITECTURE.md',
        label: 'Architecture doc',
        type: 'System Doc'
      },
      {
        href: 'https://github.com/scott-ai-maker/ai-powered-chatbot/blob/main/README.md',
        label: 'README system diagram',
        type: 'Mermaid'
      }
    ]
  },
  {
    name: 'DevOps Project',
    description:
      'End-to-end platform engineering project that provisions Azure infrastructure, packages services for Kubernetes, and automates deployment through a repeatable CI/CD workflow.',
    link: { href: 'https://github.com/scott-ai-maker/devops-project', label: 'github.com' },
    logo: 'devops-project-mark.svg',
    technologies: ['Python', 'FastAPI', 'Terraform', 'AKS', 'Helm', 'GitHub Actions', 'Azure'],
    features: [
      'Terraform-managed Azure infrastructure and AKS cluster setup',
      'Helm chart packaging for versioned Kubernetes releases',
      'GitHub Actions pipeline for build, validation, and deployment',
      'Health and readiness endpoints for operational confidence',
      'Security controls with Key Vault, RBAC, and non-root containers'
    ],
    impactMetrics: [
      'Provisioning time — Measured: pending | Est: ~40-55 min initial, ~10-18 min incremental',
      'Pipeline success rate — Measured: pending | Est: ~92-97% on routine runs',
      'Lead time to prod — Measured: pending | Est: same day to 1 business day'
    ],
    architectureLinks: [
      {
        href: 'https://github.com/scott-ai-maker/devops-project/blob/main/README.md',
        label: 'README architecture diagram',
        type: 'ASCII'
      },
      {
        href: 'https://github.com/scott-ai-maker/devops-project/blob/main/DEPLOYMENT_GUIDE.md',
        label: 'Deployment architecture guide',
        type: 'Guide'
      }
    ]
  },
  {
    name: 'AI Quiz Platform',
    description:
      'Microservices-based assessment platform designed to separate user, quiz, and results domains, with secure APIs and deployment workflows that support independent scaling.',
    link: { href: 'https://github.com/scott-ai-maker/ai-quiz-platform', label: 'github.com' },
    logo: 'ai-quiz-platform-mark.svg',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Microservices'],
    features: [
      'Three independently deployable services (user, quiz, results)',
      'Security controls with Helmet, CORS, and rate limiting',
      'Docker Compose orchestration for local and deployment workflows',
      'Service health monitoring and API-first architecture',
      'Designed for independent scaling by service domain'
    ],
    impactMetrics: [
      'API p95 latency — Measured: pending | Est: ~120-220ms at 50-100 combined RPS',
      '5xx error rate under load — Measured: pending | Est: ~0.3-0.8% in stress windows',
      'MTTR — Measured: pending | Est: ~15-25 min for common restart/failure scenarios'
    ],
    architectureLinks: [
      {
        href: 'https://github.com/scott-ai-maker/ai-quiz-platform/blob/main/ARCHITECTURE.md',
        label: 'Architecture doc',
        type: 'System Doc'
      },
      {
        href: 'https://github.com/scott-ai-maker/ai-quiz-platform/blob/main/README.md',
        label: 'README architecture overview',
        type: 'Overview'
      }
    ]
  },
  {
    name: 'AI Image Analyzer',
    description:
      'Computer vision web application for image inspection workflows, combining backend analysis services with a modern frontend and cloud-native deployment practices.',
    link: { href: 'https://github.com/scott-ai-maker/ai-image-analyzer', label: 'github.com' },
    demoLink: { href: 'https://web-image-analyzer.nicesea-5e74ee97.eastus2.azurecontainerapps.io/', label: 'Live Demo' },
    logo: 'ai-image-analyzer-mark.svg',
    technologies: ['Python', 'FastAPI', 'React', 'Computer Vision', 'PIL/OpenCV', 'Azure Container Apps'],
    features: [
      'Image analysis for color profiling, object detection, and face detection',
      'Drag-and-drop upload flow for quick interactive testing',
      'Frontend and API separation for maintainable architecture',
      'Containerized cloud deployment with autoscaling support',
      'CI/CD automation using GitHub Actions',
      'Production-minded controls for reliability and operations'
    ]
  },
  {
    name: 'AI Image Captioner',
    description:
      'Multimodal captioning toolkit that compares BLIP-family models and supports both interactive and batch workflows for practical image-to-text generation tasks.',
    link: { href: 'https://github.com/scott-ai-maker/ai-image-captioner', label: 'github.com' },
    logo: 'ai-image-captioner-mark.svg',
    technologies: ['Python', 'Gradio', 'Transformers', 'PyTorch', 'BLIP', 'BLIP-2'],
    features: [
      'Interactive Gradio web interface for real-time captioning',
      'Multiple model options for speed vs quality tradeoffs',
      'Batch caption generation for local image directories',
      'Automated URL scraping and caption generation pipeline',
      'Clear scripts and docs for quick local setup'
    ]
  },
  {
    name: 'AI Chat Assistant',
    description:
      'Conversational AI interface focused on responsive user experience, context-aware dialogue, and lightweight deployment for fast iteration and demoability.',
    link: { href: 'https://github.com/scott-ai-maker/ai-chat-assistant', label: 'github.com' },
    demoLink: { href: 'https://huggingface.co/spaces/scott-aiengineer/ai-chat-assistant', label: 'Live Demo' },
    logo: 'ai-chat-assistant-mark.svg',
    technologies: ['Python', 'Gradio', 'Google Gemini API', 'Hugging Face Spaces'],
    features: [
      'Real-time conversational AI with Google Gemini',
      'Context-aware multi-turn conversations',
      'Streaming response generation',
      'Modern Gradio chat interface',
      'Chat history and session management',
      'Deployed on Hugging Face Spaces'
    ]
  }
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
      title="Projects focused on production AI and platform delivery."
      intro="Selected work that demonstrates end-to-end execution: problem framing, architecture decisions, secure deployment, and operational readiness across AI and cloud platforms."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, projectIndex) => {
          const isFlagship = projectIndex < 3

          return (
          <Card
            as="li"
            key={project.name}
            className={isFlagship ? 'rounded-2xl border border-teal-200/60 bg-teal-50/20 p-4 ring-1 ring-teal-200/50 dark:border-teal-700/40 dark:bg-teal-950/10 dark:ring-teal-700/30' : ''}
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={`/images/logos/${project.logo}`}
                alt={`Logo for ${project.name}`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            {isFlagship && (
              <span className="relative z-10 mt-3 inline-flex items-center rounded-full bg-teal-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-teal-800 ring-1 ring-teal-200/70 dark:bg-teal-900/40 dark:text-teal-300 dark:ring-teal-700/50">
                Flagship
              </span>
            )}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            
            {project.technologies && (
              <div className="relative z-10 mt-3">
                <h3 className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="relative z-10 mt-3">
                <h3 className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Highlights:</h3>
                <ul className="text-[13px] text-zinc-600 dark:text-zinc-400 space-y-0.5">
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

            {project.impactMetrics && (
              <div className="relative z-10 mt-3">
                <h3 className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Impact Metrics:</h3>
                <ul className="text-[13px] text-zinc-600 dark:text-zinc-400 space-y-0.5">
                  {project.impactMetrics.map((metric, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architectureLinks && (
              <div className="relative z-10 mt-3">
                <h3 className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Architecture:</h3>
                <ul className="text-[13px] text-zinc-600 dark:text-zinc-400 space-y-0.5">
                  {project.architectureLinks.map((resource) => (
                    <li key={resource.href}>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                      >
                        <span>{resource.label}</span>
                        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {resource.type}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="relative z-30 mt-5 space-y-1.5">
              <a 
                href={project.link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex text-[13px] font-medium text-zinc-600 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400 transition-colors"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>
              {project.demoLink && (
                <a 
                  href={project.demoLink.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex text-[13px] font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                >
                  <svg className="h-6 w-6 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="ml-2">{project.demoLink.label}</span>
                </a>
              )}
            </div>
          </Card>
          )
        })}
      </ul>
    </SimpleLayout>
  )
}
