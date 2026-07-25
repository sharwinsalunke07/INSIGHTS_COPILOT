import React, { memo } from 'react';
import { CheckCircle2, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsightCardProps {
  _id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  content: string;
  delayIndex: number;
}

export const InsightCard: React.FC<InsightCardProps> = memo(({ title, status, content, delayIndex }) => {
  return (
    <div 
      className={`p-6 rounded-2xl border transition-all duration-300 shadow-md flex flex-col h-56 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 fill-mode-both
        ${status === 'completed' ? 'bg-dark-800 border-dark-600 hover:border-emerald-500/50' : 
          status === 'in-progress' ? 'bg-dark-800 border-primary-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 
          'bg-dark-800/50 border-dark-700 opacity-70'}
      `}
      style={{ animationDelay: `${delayIndex * 100}ms` }}
    >
        {/* Subtle gradient overlay for completed cards */}
        {status === 'completed' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        )}
        
        <div className="flex items-center justify-between mb-4 relative z-10">
            <h4 className="font-semibold text-gray-100 text-lg">{title}</h4>
            {status === 'completed' && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
            {status === 'in-progress' && <CircleDashed className="w-6 h-6 text-primary-500 animate-spin-slow" />}
            {status === 'pending' && <CircleDashed className="w-6 h-6 text-gray-600" />}
        </div>
        <p className={`text-sm flex-1 leading-relaxed relative z-10 
            ${status === 'pending' ? 'text-gray-600 italic' : 'text-gray-300'} 
        `}>
            {content}
        </p>
        <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center justify-between relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider">
                {status === 'completed' && <span className="text-emerald-500">Ready</span>}
                {status === 'in-progress' && <span className="text-primary-400">Generating</span>}
                {status === 'pending' && <span className="text-gray-600">Waiting</span>}
            </span>
            {status === 'completed' && (
              <Link to="/results" className="text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded px-1 -mx-1 py-0.5 relative z-20">
                View Details &rarr;
              </Link>
            )}
        </div>
    </div>
  );
});

InsightCard.displayName = 'InsightCard';
