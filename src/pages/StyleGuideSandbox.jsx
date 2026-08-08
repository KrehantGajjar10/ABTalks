import { useTheme } from '../hooks/useTheme';

export default function StyleGuideSandbox() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-sans font-medium bg-bg-app text-text-primary transition-colors duration-200">
      <div className="max-w-[390px] mx-auto w-full p-4 space-y-8 pb-12">
        {/* Minimal Header */}
        <header className="flex items-center justify-between py-2">
          <div className="font-bold tracking-tight text-xl">ABTalks</div>
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center h-11 px-4 rounded-xl font-medium text-sm transition-colors border border-border-subtle hover:bg-bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-bg-app"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        {/* Typography Scale */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Typography</h2>
          <div className="space-y-2 p-4 rounded-2xl bg-bg-surface border border-border-subtle transition-colors">
            <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Main Title H1</h1>
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">Section H2</h2>
            <h3 className="text-xl font-semibold text-text-primary">Card Title H3</h3>
            <p className="text-base font-normal text-text-secondary">Primary text body. Highly legible and crisp.</p>
            <p className="text-sm font-normal text-text-muted">Muted Subtext. Less important information here.</p>
          </div>
        </section>

        {/* Streak/Progress Card */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Status & Streaks</h2>
          <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex flex-col items-center text-center space-y-4 transition-colors">
            <div className="w-16 h-16 rounded-full border-4 border-bg-surface-elevated flex items-center justify-center relative">
              {/* Mock Progress Ring */}
              <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-status-success"
                  strokeWidth="4"
                  strokeDasharray="75, 100"
                  strokeLinecap="round"
                  fill="none"
                  stroke="currentColor"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="text-xl font-bold text-status-success">🔥</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">14-Day Streak!</h3>
              <p className="text-sm text-text-secondary mt-1">You're on fire. Keep it up!</p>
            </div>
            <div className="bg-bg-surface-elevated text-status-success text-xs font-bold px-3 py-1.5 rounded-full inline-block border border-border-subtle">
              Success Status Badge
            </div>
          </div>
        </section>

        {/* Task Card (Primary Action) */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Action Cards</h2>
          <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle space-y-4 transition-colors">
            <div>
              <h3 className="text-lg font-bold text-text-primary">Today's Challenge</h3>
              <p className="text-sm font-normal text-text-secondary mt-1">
                Refactor your navigation component to improve mobile accessibility and touch targets.
              </p>
            </div>
            <div className="space-y-2.5">
              <button className="w-full h-11 flex items-center justify-center rounded-xl bg-accent-primary hover:bg-accent-hover text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-bg-surface">
                Start Challenge
              </button>
              <button className="w-full h-11 flex items-center justify-center rounded-xl border border-border-strong hover:bg-bg-surface-elevated text-text-primary font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-bg-surface">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Input Field Sandbox */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Forms & Inputs</h2>
          <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle transition-colors">
            <label className="block text-sm font-semibold mb-2 text-text-primary">LinkedIn URL</label>
            <input 
              type="url" 
              placeholder="https://linkedin.com/in/username" 
              className="w-full h-11 px-4 rounded-xl border border-border-strong bg-bg-app focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-focus-ring transition-shadow text-base text-text-primary placeholder:text-text-muted"
            />
            <p className="text-xs font-normal text-text-muted mt-2">
              We'll use this to fetch your recent activity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
