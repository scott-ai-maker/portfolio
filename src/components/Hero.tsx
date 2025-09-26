export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-text">Your Name</h1>
        <p className="mt-4 text-lg text-muted">Software engineer — building performant, accessible web apps.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="px-5 py-3 border rounded text-text/80">Contact</a>
        </div>
      </div>
    </section>
  );
}
