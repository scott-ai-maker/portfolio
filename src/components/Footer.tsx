export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div>&copy; {new Date().getFullYear()} Your Name</div>
        <div className="flex gap-3">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
