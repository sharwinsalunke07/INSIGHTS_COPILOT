import React from 'react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';
import { Clock, SearchX } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { InsightCard } from '../components/UI/InsightCard';

const cards = [
  { id: 'problem', title: 'Problem Validation', status: 'completed', content: 'Validated: High demand in precision agriculture; current solutions are too expensive for smallholders.' },
  { id: 'summary', title: 'Research Summary', status: 'completed', content: 'Aggregated 15 recent papers on drone-based multispectral imaging and edge AI processing.' },
  { id: 'solutions', title: 'Existing Solutions', status: 'completed', content: 'Analyzed FarmBot, John Deere AutoTrac, and DJI Agras. Identified cost and connectivity as major barriers.' },
  { id: 'gap', title: 'Research Gap', status: 'in-progress', content: 'Lack of real-time, offline edge processing capabilities for smallholder farmers in remote areas.' },
  { id: 'innovation', title: 'Innovation', status: 'pending', content: 'Pending generation...' },
  { id: 'roadmap', title: 'Roadmap', status: 'pending', content: 'Pending generation...' },
];

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const idea = location.state?.idea || 'AI Crop Health System';

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
        
        {/* Top Section: Progress & Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 rounded-2xl bg-dark-800 border border-dark-700 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-600/10 blur-[60px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-sm font-semibold text-primary-400 mb-2 tracking-wide uppercase">Active Project</h2>
                <h3 className="text-3xl font-bold text-white mb-6 pr-12 leading-tight">"{idea}"</h3>
            </div>
            
            <div className="relative z-10">
                <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Generation Progress
                    </span>
                    <span className="text-primary-400 font-bold">50%</span>
                </div>
                <div className="w-full h-2.5 bg-dark-900 rounded-full overflow-hidden border border-dark-700">
                    <div className="h-full bg-gradient-to-r from-primary-600 to-primary-400 w-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] relative">
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-dark-800 border border-dark-700 shadow-xl flex flex-col h-full min-h-[300px]">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Projects</h3>
            <div className="flex-1 flex flex-col justify-center items-center opacity-70 mt-8 mb-4">
                <SearchX className="w-12 h-12 text-dark-500 mb-3" />
                <p className="text-gray-400 text-sm font-medium text-center">No recent projects found</p>
                <p className="text-gray-500 text-xs text-center mt-1 max-w-[200px]">Start a new research project to see it here.</p>
            </div>
          </div>
        </div>

        {/* Six Cards Grid */}
        <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Generated Insights
              <span className="px-2 py-0.5 rounded-md bg-dark-800 border border-dark-700 text-xs text-gray-400 font-normal">6 Sections</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
                <InsightCard 
                  key={card.id}
                  _id={card.id}
                  title={card.title}
                  status={card.status as 'completed' | 'in-progress' | 'pending'}
                  content={card.content}
                  delayIndex={i}
                />
            ))}
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
