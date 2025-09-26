const tech = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Azure', 'GitHub Actions'];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-text">About</h2>
        <p className="mt-4 text-muted">I build accessible, high-performance web applications. I prioritize clean code, testing, and measurable business impact.</p>

        <h3 className="mt-6 font-medium text-text">Tech stack</h3>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {tech.map((t) => (
            <li key={t} className="px-3 py-2 panel text-text text-sm">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
