export function Input({ label, id, helperText, className = '', ...props }) {
  return (
    <div className={`w-full flex flex-col space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-text-secondary">
          {label}
        </label>
      )}
      <input
        id={id}
        className="w-full h-11 px-4 rounded-xl border border-border-strong bg-bg-app text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-focus-ring transition-shadow text-base"
        {...props}
      />
      {helperText && (
        <p className="text-xs text-text-muted">{helperText}</p>
      )}
    </div>
  );
}