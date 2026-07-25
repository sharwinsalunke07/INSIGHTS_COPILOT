import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const SubmitIdea = React.lazy(() => import('./pages/SubmitIdea').then(module => ({ default: module.SubmitIdea })));
const AIResults = React.lazy(() => import('./pages/AIResults').then(module => ({ default: module.AIResults })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

// Global Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-dark-900 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-dark-700 border-t-primary-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitIdea />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<AIResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
