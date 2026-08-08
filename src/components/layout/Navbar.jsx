import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg-app/80 backdrop-blur">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="font-bold tracking-tight text-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-lg px-2 -mx-2">
            ABTalks
          </Link>
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center h-11 w-11 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-bg-app"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
