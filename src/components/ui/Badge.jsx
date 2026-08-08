export function Badge({ variant = 'neutral', children, className = '', ...props }) {
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border";
  
  const variantClasses = {
    success: "bg-status-success/10 text-status-success border-status-success/20",
    warning: "bg-status-warning/10 text-status-warning border-status-warning/20",
    error: "bg-status-error/10 text-status-error border-status-error/20",
    neutral: "bg-bg-surface-elevated text-text-secondary border-border-subtle",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.neutral} ${className}`;
  
  return (
    <span className={classes.trim()} {...props}>
      {children}
    </span>
  );
}
