import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-8 md:py-16 px-4">
      {/* Section 1: Hero */}
      <section className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
          Code Every Day.<br />
          <span className="text-accent-primary">Get Noticed.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl">
          The 60-day challenge that turns tired students into hired developers. 
          Build consistently, share your progress, and stand out to recruiters.
        </p>
        <div className="pt-4 w-full sm:w-auto flex flex-col sm:flex-row justify-center">
          <Link to="/dashboard" className="w-full sm:w-auto" tabIndex={-1}>
            <Button size="lg" className="w-full sm:w-auto">
              Start the 60-Day Challenge
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="space-y-8 max-w-5xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">How It Works</h2>
          <p className="text-text-secondary mt-2">A simple framework to build your portfolio and visibility.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center p-8 space-y-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="w-12 h-12 rounded-full bg-bg-surface-elevated flex items-center justify-center text-accent-primary font-bold text-xl mb-2">1</div>
            <h3 className="text-xl font-bold text-text-primary">Get a daily task</h3>
            <p className="text-text-secondary text-base">Receive a bite-sized, practical coding challenge every single day.</p>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-8 space-y-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="w-12 h-12 rounded-full bg-bg-surface-elevated flex items-center justify-center text-accent-primary font-bold text-xl mb-2">2</div>
            <h3 className="text-xl font-bold text-text-primary">Submit your proof</h3>
            <p className="text-text-secondary text-base">Push your code to GitHub and share your learnings on LinkedIn.</p>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-8 space-y-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="w-12 h-12 rounded-full bg-bg-surface-elevated flex items-center justify-center text-accent-primary font-bold text-xl mb-2">3</div>
            <h3 className="text-xl font-bold text-text-primary">Get Noticed</h3>
            <p className="text-text-secondary text-base">Build a 60-day streak that recruiters and hiring managers can't ignore.</p>
          </Card>
        </div>
      </section>

      {/* Section 3: Value/Reward & Final CTA */}
      <section className="bg-bg-surface-elevated rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto w-full my-8 border border-border-subtle">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-4">
          Consistency is your unfair advantage.
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          Don't wait until graduation to build your portfolio. Start today and let your daily effort compound into career opportunities.
        </p>
        <Link to="/dashboard" tabIndex={-1}>
          <Button variant="secondary" size="md">
            View Dashboard
          </Button>
        </Link>
      </section>
    </div>
  );
}
