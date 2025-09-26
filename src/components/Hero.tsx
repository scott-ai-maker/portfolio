// components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        AI Engineering with Precision & Clarity
      </h1>
      <p className="text-muted text-lg max-w-xl mx-auto">
        Resilient systems, clean design, and employer-facing value — built by Scott.
      </p>
      <a href="#projects" className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-400 transition">
        View Projects
      </a>
    </section>
  )
}

