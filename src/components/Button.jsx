const VARIANTS = {
  primary:
    'bg-primary text-primary-foreground shadow-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
  secondary:
    'bg-secondary text-secondary-foreground shadow-sm hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
  outline:
    'border border-border text-foreground hover:border-primary/50 hover:bg-surface hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-foreground hover:bg-surface',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const relProp =
    props.target === '_blank' && !props.rel ? { rel: 'noopener noreferrer' } : {}

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
      {...relProp}
    >
      {children}
    </Component>
  )
}
