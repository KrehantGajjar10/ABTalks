import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function SubmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 bg-status-success/5 border-status-success/20">
        <div className="w-16 h-16 rounded-full bg-status-success/20 flex items-center justify-center text-status-success text-3xl">
          ✓
        </div>
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Proof Submitted Successfully!</h2>
          <p className="text-text-secondary text-base">Your streak is safe. Great job completing today's challenge.</p>
        </div>
        <Link to="/dashboard" tabIndex={-1} className="w-full sm:w-auto">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto mt-4">
            Return to Dashboard
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-text-primary">Submit Your Work</h2>
        <p className="text-sm text-text-secondary mt-1">Provide links to your repository and LinkedIn post to verify completion.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input 
          label="GitHub Repository URL" 
          id="github-url"
          type="url"
          placeholder="https://github.com/username/repo"
          required
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        />
        <Input 
          label="LinkedIn Post URL" 
          id="linkedin-url"
          type="url"
          placeholder="https://linkedin.com/post/..."
          required
          value={linkedinUrl}
          onChange={(e) => setLinkedinUrl(e.target.value)}
        />
        <Button type="submit" size="lg" className="w-full mt-4">
          Submit Proof of Work
        </Button>
      </form>
    </Card>
  );
}