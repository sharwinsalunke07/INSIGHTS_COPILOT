import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 animate-in fade-in zoom-in-95 duration-700">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-purple-600 mb-6 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-100 mb-4 tracking-tight">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          The research trajectory you are looking for has deviated into uncharted space.
        </p>
        
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 bg-dark-800 hover:bg-dark-700 text-white font-medium px-8 py-4 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-all shadow-lg hover:shadow-primary-500/20 mx-auto"
        >
          <Home className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
          Return to Base
        </button>
      </div>
    </div>
  );
};
