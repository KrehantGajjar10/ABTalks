import { useParams, Link } from 'react-router-dom';
import { mockData } from '../data/mockData';
import { TaskBrief } from '../components/challenge/TaskBrief';
import { SmartLinkedInBuilder } from '../components/challenge/SmartLinkedInBuilder';
import { SubmissionForm } from '../components/challenge/SubmissionForm';
import { Button } from '../components/ui/Button';

export default function ChallengeDayPage() {
  const { dayId } = useParams();
  const challenge = mockData.challenges.find(c => c.day === parseInt(dayId, 10));

  if (!challenge) {
    return (
      <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-6 min-h-[50vh]">
        <h1 className="text-3xl font-bold text-text-primary">Challenge Not Found</h1>
        <p className="text-text-secondary">We couldn't find the challenge for Day {dayId}.</p>
        <Link to="/dashboard" tabIndex={-1}>
          <Button>Return to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 md:py-10 max-w-2xl mx-auto w-full flex flex-col gap-6 md:gap-8">
      <div>
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded px-2 py-1 -ml-2"
        >
          &larr; Back to Dashboard
        </Link>
      </div>
      
      <TaskBrief challenge={challenge} />
      <SmartLinkedInBuilder template={challenge.linkedinTemplate} />
      <SubmissionForm />
    </div>
  );
}