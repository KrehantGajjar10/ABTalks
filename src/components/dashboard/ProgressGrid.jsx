import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';

export function ProgressGrid({ challenges }) {
  return (
    <Card className="p-4 md:p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text-primary">60-Day Journey</h2>
        <p className="text-sm text-text-muted font-medium text-right">
          {challenges.filter(c => c.status === 'completed').length} / 60 Completed
        </p>
      </div>
      
      <div className="grid grid-cols-10 gap-1 sm:gap-1.5 md:gap-2 w-full mt-auto mb-auto">
        {challenges.map((challenge) => {
          const isLocked = challenge.status === 'locked';
          
          let cellClasses = "w-full aspect-square rounded-sm sm:rounded-md flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ";
          
          if (challenge.status === 'completed') {
            cellClasses += "bg-status-success text-white";
          } else if (challenge.status === 'missed') {
            cellClasses += "bg-status-error/80 text-white";
          } else if (challenge.status === 'pending') {
            cellClasses += "border-2 border-accent-primary bg-bg-app text-text-primary shadow-[0_0_0_2px_var(--accent-primary)] z-10 scale-110";
          } else if (isLocked) {
            cellClasses += "bg-bg-surface-elevated text-text-muted border border-border-subtle";
          }

          const ariaLabel = `Day ${challenge.day}: ${challenge.status}`;
          
          if (isLocked) {
            return (
              <div 
                key={challenge.day} 
                className={cellClasses}
                aria-label={ariaLabel}
                title={ariaLabel}
              >
                <span>{challenge.day}</span>
              </div>
            );
          }

          return (
            <Link 
              key={challenge.day} 
              to={`/day/${challenge.day}`}
              className={`${cellClasses} hover:scale-110 hover:shadow-md hover:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface cursor-pointer`}
              aria-label={ariaLabel}
              title={ariaLabel}
            >
              <span>{challenge.day}</span>
            </Link>
          );
        })}
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border-subtle text-xs text-text-muted">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-status-success"></div> Completed</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm border-2 border-accent-primary"></div> Pending</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-status-error/80"></div> Missed</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-bg-surface-elevated border border-border-subtle"></div> Locked</div>
      </div>
    </Card>
  );
}
