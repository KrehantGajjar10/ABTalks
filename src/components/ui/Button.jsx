export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface motion-safe:transition-all motion-safe:duration-200 active:scale-[0.98]";
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base",
    lg: "h-14 px-6 text-lg",
  };
  
  const variantClasses = {
    primary: "bg-accent-primary hover:bg-accent-hover text-white",
    secondary: "bg-bg-surface-elevated hover:bg-border-subtle text-text-primary",
    outline: "border border-border-strong hover:bg-accent-primary/10 hover:border-accent-primary/30 text-text-primary",
    ghost: "hover:bg-accent-primary/10 text-text-primary",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  return (
    <button className={classes.trim()} {...props}>
      {children}
    </button>
  );
}
