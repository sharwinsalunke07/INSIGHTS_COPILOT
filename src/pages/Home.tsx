import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { BrainCircuit, Rocket, Zap, Database } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/submit');
  };

  const features = [
    {
      title: 'Problem Validation',
      description: 'Instantly validate your idea against market needs and identify existing gaps.',
      icon: <BrainCircuit className="w-6 h-6 text-primary-400" />
    },
    {
      title: 'Architecture Design',
      description: 'Generate production-ready system architectures and precise API specifications.',
      icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Actionable Roadmap',
      description: 'Get a comprehensive, step-by-step implementation plan to build your project fast.',
      icon: <Rocket className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Tech Stack Selection',
      description: 'Receive optimal technology recommendations tailored specifically to your use case.',
      icon: <Zap className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 font-sans text-gray-200">
      <Header />
      <div className="w-full flex flex-col items-center pb-20">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative">
        {/* Background Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary-600/20 to-purple-600/20 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800/80 border border-dark-700 text-sm text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-xl backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
          </span>
          Data Axle Pune Hackathon Copilot
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="text-white block mb-2 drop-shadow-sm">
            INSIGHT COPILOT
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 block pb-4 drop-shadow-sm">
            Solve More.
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Transform your raw ideas into implementation-ready projects in seconds. 
          Stop endless research and start building.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:-translate-y-1 flex items-center gap-2"
          >
            Get Started
            <Rocket className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl px-4 py-20 relative animate-in fade-in duration-1000 delay-700 fill-mode-both">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-dark-800/40 border border-dark-700/50 backdrop-blur-md hover:bg-dark-800/80 transition-all duration-300 group cursor-default hover:-translate-y-1 hover:border-dark-600 shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};
