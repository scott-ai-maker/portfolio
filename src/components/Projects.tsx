const SAMPLE = [
  {
    title: 'Project One',
    desc: 'A performant web app with SSR and excellent DX.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Project Two',
    desc: 'A serverless API + static frontend with CI/CD.',
    tech: ['Azure', 'Functions', 'GitHub Actions'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SAMPLE.map((p) => (
            <article key={p.title} className="group bg-white dark:bg-slate-800 border rounded-lg p-5 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.github} className="text-primary hover:underline">GitHub</a>
                <a href={p.demo} className="text-primary hover:underline">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
