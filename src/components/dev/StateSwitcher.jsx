import { Button } from '../ui/Button';

export function StateSwitcher({ currentScenario, onScenarioChange }) {
  const scenarios = [
    { id: 'first-day', label: 'First Day' },
    { id: 'active-pending', label: 'Active' },
    { id: 'active-completed', label: 'Completed' },
    { id: 'missed-day', label: 'Missed Day' }
  ];

  return (
    <div className="mt-12 p-4 md:p-6 border-2 border-dashed border-border-strong rounded-2xl bg-bg-surface-elevated overflow-hidden">
      <h3 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">
        🛠 Judge Tools: Toggle Scenario
      </h3>
      <div className="flex flex-wrap gap-2">
        {scenarios.map((s) => (
          <Button
            key={s.id}
            variant={currentScenario === s.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onScenarioChange(s.id)}
            className="text-xs sm:text-sm"
          >
            {s.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
