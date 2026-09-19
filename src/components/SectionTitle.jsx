export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
