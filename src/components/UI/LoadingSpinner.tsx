import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC<{ text?: string; className?: string }> = ({ text = 'Generating...', className }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-8 animate-in fade-in duration-500 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full"></div>
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin relative z-10" />
      </div>
      <p className="text-sm text-gray-400 font-medium tracking-wide animate-pulse">{text}</p>
    </div>
  );
};
