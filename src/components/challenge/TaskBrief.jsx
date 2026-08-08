import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function TaskBrief({ challenge }) {
  let badgeVariant = 'neutral';
  if (challenge.status === 'completed') badgeVariant = 'success';
  if (challenge.status === 'missed') badgeVariant = 'error';
  if (challenge.status === 'pending') badgeVariant = 'warning';

  return (
    <Card className="flex flex-col space-y-4 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Badge variant="neutral" className="text-sm">Day {challenge.day}</Badge>
        <Badge variant={badgeVariant} className="capitalize text-sm">{challenge.status}</Badge>
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
        {challenge.title}
      </h1>
      <p className="text-base md:text-lg text-text-secondary leading-relaxed font-normal">
        {challenge.description}
      </p>
    </Card>
  );
}