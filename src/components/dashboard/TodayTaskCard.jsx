import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function TodayTaskCard({ pendingChallenge }) {
  if (!pendingChallenge) {
    return (
      <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
        <h2 className="text-2xl font-bold text-text-primary mb-2">All Caught Up!</h2>
        <p className="text-text-secondary">You have completed all available challenges.</p>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col justify-between p-6 h-full border-border-strong">
      <div>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="neutral">Day {pendingChallenge.day}</Badge>
          <Badge variant="warning" className="capitalize">Pending</Badge>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
          {pendingChallenge.title}
        </h2>
        <p className="text-base text-text-secondary">
          {pendingChallenge.description}
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-border-subtle">
        <Link to={`/day/${pendingChallenge.day}`} tabIndex={-1} className="block">
          <Button size="lg" className="w-full">
            Start Today's Challenge
          </Button>
        </Link>
      </div>
    </Card>
  );
}
