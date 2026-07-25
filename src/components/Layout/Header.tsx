import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-700 bg-dark-900/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary-500" />
          <span className="text-xl font-semibold tracking-tight text-white">
            Hackathon Copilot
          </span>
        </div>
      </div>
    </header>
  );
};
