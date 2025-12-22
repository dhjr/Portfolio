export default function SectionHeader({ name }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-5xl font-1bricolage font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {name}<span className="text-emerald-500">.</span>
      </h2>
      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800/50"></div>
    </div>
  );
}
