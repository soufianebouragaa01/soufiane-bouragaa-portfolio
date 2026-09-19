const VARIANTS = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  neutral: 'bg-surface text-muted-foreground border-border',
}

export function Badge({ variant = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
