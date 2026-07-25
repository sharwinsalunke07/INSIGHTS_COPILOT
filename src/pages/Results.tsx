import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Results: React.FC = () => {
  const location = useLocation();
  const idea = location.state?.idea || 'No idea provided';

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Generated Project Plan</h2>
        <Link 
          to="/" 
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors"
        >
          New Idea
        </Link>
      </div>
      
      <div className="p-6 rounded-2xl bg-dark-800 border border-dark-700 shadow-xl">
        <h3 className="text-lg text-primary-400 font-semibold mb-2">Original Idea:</h3>
        <p className="text-gray-300 italic">"{idea}"</p>
      </div>
      
      <div className="p-6 rounded-2xl bg-dark-800 border border-dark-700 shadow-xl text-center">
        <p className="text-gray-400">Results content will be implemented here.</p>
      </div>
    </div>
  );
};
