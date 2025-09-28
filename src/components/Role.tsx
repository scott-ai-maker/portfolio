export function Role({ role }: { role: { company: string; title: string; start: string; end: string; description: string[] } }) {
  return (
    <div className="border-b border-zinc-200 pb-6 dark:border-zinc-700">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {role.title} at {role.company}
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {role.start} - {role.end}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {role.description.map((item, index) => (
          <li key={index} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}