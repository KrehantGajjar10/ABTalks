import { useState } from 'react';
import { getMockState } from '../data/mockData';
import { StreakCard } from '../components/dashboard/StreakCard';
import { TodayTaskCard } from '../components/dashboard/TodayTaskCard';
import { ProgressGrid } from '../components/dashboard/ProgressGrid';
import { StateSwitcher } from '../components/dev/StateSwitcher';

export default function DashboardPage() {
  const [scenario, setScenario] = useState('active-pending');
  const { user, challenges } = getMockState(scenario);

  return (
    <div className="py-6 px-4 md:py-10 w-full max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
          Welcome back, {user.name.split(' ')[0]}
        </h1>
        <p className="text-text-secondary mt-2">
          Ready to continue your 60-day coding journey?
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Stats & Action */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
            <StreakCard user={user} />
            <TodayTaskCard challenges={challenges} />
          </div>
        </div>

        {/* Right Column: Grid */}
        <div className="lg:col-span-8">
          <ProgressGrid challenges={challenges} />
        </div>
      </div>
      
      <StateSwitcher currentScenario={scenario} onScenarioChange={setScenario} />
    </div>
  );
}
