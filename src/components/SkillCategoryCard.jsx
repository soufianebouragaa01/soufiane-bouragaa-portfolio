const ACCENTS = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
}

export function SkillCategoryCard({ icon: Icon, label, items, accent = 'primary' }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/30">
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${ACCENTS[accent]}`}
      >
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{label}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
