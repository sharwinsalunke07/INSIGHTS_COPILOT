import React from 'react';
import { User, Layout, Server, BrainCircuit, LayoutDashboard, ArrowDown } from 'lucide-react';

const flow = [
  { id: 'user', label: 'User', icon: <User className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-blue-500/10', iconBg: 'bg-blue-500/20' },
  { id: 'frontend', label: 'Frontend', icon: <Layout className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-emerald-500/10', iconBg: 'bg-emerald-500/20' },
  { id: 'backend', label: 'Backend', icon: <Server className="w-6 h-6" />, color: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-amber-500/10', iconBg: 'bg-amber-500/20' },
  { id: 'openai', label: 'OpenAI', icon: <BrainCircuit className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-purple-500/10', iconBg: 'bg-purple-500/20' },
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-6 h-6" />, color: 'bg-pink-500/10 text-pink-400 border-pink-500/30 shadow-pink-500/10', iconBg: 'bg-pink-500/20' },
];

export const Architecture: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 w-full max-w-sm mx-auto relative">
      {/* Background glowing line connecting the nodes */}
      <div className="absolute top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 z-0"></div>
      
      {flow.map((node, index) => (
        <React.Fragment key={node.id}>
          <div 
            className={`relative z-10 w-full flex items-center gap-4 p-4 rounded-2xl border ${node.color} bg-dark-900/90 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-125 cursor-default backdrop-blur-md animate-in zoom-in-95 fill-mode-both`} 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`p-3 rounded-xl ${node.iconBg} shadow-inner`}>
              {node.icon}
            </div>
            <span className="text-xl font-extrabold tracking-wide text-gray-100">{node.label}</span>
          </div>
          
          {index < flow.length - 1 && (
            <div className="relative z-10 py-3 text-dark-500 flex flex-col items-center animate-pulse">
              <ArrowDown className="w-6 h-6 drop-shadow-md" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
