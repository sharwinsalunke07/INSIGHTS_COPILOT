import React from 'react';
import { LayoutDashboard, Rocket, Settings, LogOut, FolderClock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-dark-900 border-r border-dark-700 hidden md:flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-dark-700">
        <Rocket className="h-6 w-6 text-primary-500 mr-2" />
        <span className="text-xl font-bold text-white tracking-tight">Copilot</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 bg-primary-600/10 text-primary-400 rounded-lg border border-primary-500/20">
          <LayoutDashboard className="h-5 w-5" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link to="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-dark-800 rounded-lg transition-colors">
          <FolderClock className="h-5 w-5" />
          <span className="font-medium">Recent Projects</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-dark-700 space-y-2">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-gray-400 hover:text-gray-200 hover:bg-dark-800 rounded-lg transition-colors">
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2 w-full text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
};
