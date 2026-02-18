export function Role({ role }: { role: { company: string; title: string; start: string; end: string; description: string[] } }) {
  return (
    <article className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-teal-50/40 via-white to-white p-6 shadow-sm ring-1 ring-zinc-900/5 transition-colors hover:border-teal-200 dark:border-zinc-700/60 dark:from-teal-950/15 dark:via-zinc-900 dark:to-zinc-900 dark:ring-white/10 dark:hover:border-teal-700/40">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="inline-flex items-center rounded-full bg-teal-100/80 px-2.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
            {role.company}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            {role.title}
          </h2>
        </div>
        <p className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {role.start} - {role.end}
        </p>
      </div>
      <ul className="mt-5 space-y-3 border-l border-teal-200/70 pl-4 text-sm text-zinc-700 dark:border-teal-800/60 dark:text-zinc-300">
        {role.description.map((item, index) => (
          <li key={index} className="flex items-start gap-3 leading-6">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}