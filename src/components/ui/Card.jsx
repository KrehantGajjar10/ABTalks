export function Card({ children, className = '', ...props }) {
  const classes = `bg-bg-surface border border-border-subtle rounded-2xl transition-colors ${className}`;
  
  return (
    <div className={classes.trim()} {...props}>
      {children}
    </div>
  );
}
