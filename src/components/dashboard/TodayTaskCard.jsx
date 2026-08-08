import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function TodayTaskCard({ challenges }) {
  const pendingChallenge = challenges.find(c => c.status === 'pending');
  // Find the most recently completed challenge by looking backwards
  const completedChallenges = challenges.filter(c => c.status === 'completed');
  const recentCompleted = completedChallenges.length > 0 ? completedChallenges[completedChallenges.length - 1] : null;
  
  const challenge = pendingChallenge || recentCompleted;

  if (!challenge) {
    return (
      <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
        <h2 className="text-2xl font-bold text-text-primary mb-2">All Caught Up!</h2>
        <p className="text-text-secondary">You have completed all available challenges.</p>
      </Card>
    );
  }

  const isCompleted = challenge.status === 'completed';

  return (
    <Card className="flex flex-col justify-between p-6 h-full border-border-strong">
      <div>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="neutral">Day {challenge.day}</Badge>
          <Badge variant={isCompleted ? 'success' : 'warning'} className="capitalize">
            {challenge.status}
          </Badge>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
          {challenge.title}
        </h2>
        <p className="text-base text-text-secondary line-clamp-2">
          {challenge.description}
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-border-subtle">
        {isCompleted ? (
          <div className="flex items-center justify-center h-11 text-status-success font-bold gap-2 bg-status-success/10 rounded-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Completed for today
          </div>
        ) : (
          <Link to={`/day/${challenge.day}`} tabIndex={-1} className="block">
            <Button size="lg" className="w-full">
              Start Today's Challenge
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
