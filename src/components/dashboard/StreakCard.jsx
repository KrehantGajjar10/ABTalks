import { Card } from '../ui/Card';

export function StreakCard({ user }) {
  const isFirstDay = user.status === 'first-day';
  const isMissed = user.status === 'missed';
  
  const ringColor = isMissed ? 'text-status-warning' : 'text-status-success';
  const ringBg = isMissed ? 'border-status-warning/20' : 'border-status-success/20';

  return (
    <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
      <div className={`w-20 h-20 rounded-full border-4 ${ringBg} flex items-center justify-center mb-4 relative`}>
        {/* Progress ring approximation */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
          <path
            className={ringColor}
            strokeWidth="3"
            strokeDasharray={`${(user.currentStreak / 60) * 100}, 100`}
            strokeLinecap="round"
            fill="none"
            stroke="currentColor"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="text-3xl">{isMissed ? '⚠️' : '🔥'}</span>
      </div>
      
      <h2 className={`text-4xl font-extrabold tracking-tight ${ringColor}`}>
        {user.currentStreak}
      </h2>
      <p className="text-lg font-bold text-text-primary mt-1">Day Streak</p>
      
      {isFirstDay ? (
        <p className="text-sm text-text-primary mt-2 font-medium">Day 1 Starts Now! Begin your 60-day journey.</p>
      ) : isMissed ? (
        <p className="text-sm text-status-warning mt-2 font-medium">Rest is important. Let's bounce back today.</p>
      ) : (
        <p className="text-sm text-text-muted mt-2">Personal best: {user.bestStreak} days</p>
      )}
    </Card>
  );
}
