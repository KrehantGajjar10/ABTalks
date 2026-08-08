import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function SmartLinkedInBuilder({ template }) {
  const [copyStatus, setCopyStatus] = useState('idle');

  if (!template) return null;

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      setCopyStatus('error');
      return;
    }

    try {
      await navigator.clipboard.writeText(template);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopyStatus('error');
    }
  };

  return (
    <Card className="p-6 md:p-8 border border-accent-special/30 bg-bg-surface-elevated">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
             <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.16-3.8c-1.1 0-1.8.6-2.1 1.2v-1h-2.3v9h2.3v-4.9c0-1.3.2-2.5 1.8-2.5 1.5 0 1.5 1.5 1.5 2.6v4.9h2.2M7.5 18.5v-9h-2.3v9h2.3m-1.2-10.3c.8 0 1.3-.5 1.3-1.2 0-.7-.5-1.2-1.4-1.2-.8 0-1.3.5-1.3 1.2 0 .7.5 1.2 1.4 1.2Z" />
          </svg>
          <h2 className="text-xl font-bold text-text-primary tracking-tight">Smart LinkedIn Template</h2>
        </div>
        <p className="text-sm text-text-secondary">Copy and customize this for today's proof of work.</p>
      </div>

      <div className="bg-bg-app rounded-xl p-4 md:p-5 border border-border-subtle mb-4 overflow-x-auto">
        <pre className="text-sm text-text-secondary whitespace-pre-wrap font-sans leading-relaxed break-words">
          {template}
        </pre>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
        {copyStatus === 'error' && (
          <p className="text-sm text-status-error w-full text-center sm:text-left mr-auto">
            Copy failed - Please select and copy manually.
          </p>
        )}
        <Button 
          variant={copyStatus === 'copied' ? 'outline' : 'secondary'} 
          onClick={handleCopy} 
          className={`w-full sm:w-auto ${copyStatus === 'copied' ? 'border-status-success text-status-success hover:bg-status-success/10' : ''}`}
        >
          {copyStatus === 'copied' ? 'Copied! ✓' : 'Copy Template'}
        </Button>
      </div>
    </Card>
  );
}
