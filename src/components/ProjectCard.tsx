// components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
}

export default function ProjectCard({ title, description, tech, repo, demo }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">{title}</h3>
      <p className="text-muted mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-muted">
        {tech.map((t) => (
          <span key={t} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={repo} className="text-accent hover:underline" aria-label={`GitHub repository for ${title}`}>
          GitHub
        </a>
        <a href={demo} className="text-accent hover:underline" aria-label={`Live demo for ${title}`}>
          Live Demo
        </a>
      </div>
    </div>
  );
}
