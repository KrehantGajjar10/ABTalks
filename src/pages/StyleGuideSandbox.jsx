import { useTheme } from '../hooks/useTheme';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockData } from '../data/mockData';

export default function StyleGuideSandbox() {
  const { theme, toggleTheme } = useTheme();
  
  const todayChallenge = mockData.challenges.find(c => c.day === 5);

  return (
    <div className="min-h-screen font-sans font-medium bg-bg-app text-text-primary transition-colors duration-200">
      <div className="max-w-[390px] mx-auto w-full p-4 space-y-8 pb-12">
        {/* Minimal Header */}
        <header className="flex items-center justify-between py-2">
          <div className="font-bold tracking-tight text-xl">ABTalks</div>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </header>

        {/* Typography Scale */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Typography</h2>
          <Card className="space-y-2 p-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Main Title H1</h1>
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">Section H2</h2>
            <h3 className="text-xl font-semibold text-text-primary">Card Title H3</h3>
            <p className="text-base font-normal text-text-secondary">Primary text body. Highly legible and crisp.</p>
            <p className="text-sm font-normal text-text-muted">Muted Subtext. Less important information here.</p>
          </Card>
        </section>

        {/* Streak/Progress Card */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Status & Streaks</h2>
          <Card className="flex flex-col items-center text-center space-y-4 p-6">
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
              <h3 className="text-lg font-bold text-text-primary">{mockData.user.currentStreak}-Day Streak!</h3>
              <p className="text-sm text-text-secondary mt-1">You're on fire. Keep it up!</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center mt-2">
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Missed</Badge>
              <Badge variant="neutral">Pending</Badge>
            </div>
          </Card>
        </section>

        {/* Task Card (Primary Action) */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Today's Task</h2>
          <Card className="space-y-4 p-5">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-text-primary">Day {todayChallenge.day}: {todayChallenge.title}</h3>
                <Badge variant="neutral" className="capitalize">{todayChallenge.status}</Badge>
              </div>
              <p className="text-sm font-normal text-text-secondary mt-1">
                {todayChallenge.description}
              </p>
            </div>
            <div className="space-y-2.5">
              <Button className="w-full">Start Challenge</Button>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </Card>
        </section>

        {/* Input Field Sandbox */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-text-muted uppercase">Forms & Inputs</h2>
          <Card className="p-5">
            <label className="block text-sm font-semibold mb-2 text-text-primary">LinkedIn URL</label>
            <input 
              type="url" 
              placeholder="https://linkedin.com/in/username" 
              className="w-full h-11 px-4 rounded-xl border border-border-strong bg-bg-app focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-focus-ring transition-shadow text-base text-text-primary placeholder:text-text-muted"
            />
            <p className="text-xs font-normal text-text-muted mt-2">
              We'll use this to fetch your recent activity.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
