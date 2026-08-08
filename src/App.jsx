import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDayPage';
import StyleGuideSandbox from './pages/StyleGuideSandbox';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/day/:dayId" element={<ChallengeDayPage />} />
          <Route path="/style-guide" element={<StyleGuideSandbox />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
