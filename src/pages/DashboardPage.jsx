import { mockData } from '../data/mockData';
import { StreakCard } from '../components/dashboard/StreakCard';
import { TodayTaskCard } from '../components/dashboard/TodayTaskCard';
import { ProgressGrid } from '../components/dashboard/ProgressGrid';

export default function DashboardPage() {
  const { user, challenges } = mockData;
  const pendingChallenge = challenges.find(c => c.status === 'pending');

  return (
    <div className="py-6 px-4 md:py-10 w-full">
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
            <TodayTaskCard pendingChallenge={pendingChallenge} />
          </div>
        </div>

        {/* Right Column: Grid */}
        <div className="lg:col-span-8">
          <ProgressGrid challenges={challenges} />
        </div>
      </div>
    </div>
  );
}
