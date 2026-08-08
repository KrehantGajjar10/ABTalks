import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-app text-text-primary transition-colors duration-200">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
