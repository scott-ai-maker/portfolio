const tech = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Azure', 'GitHub Actions'];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">I build accessible, high-performance web applications. I prioritize clean code, testing, and measurable business impact.</p>

        <h3 className="mt-6 font-medium">Tech stack</h3>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {tech.map((t) => (
            <li key={t} className="px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
