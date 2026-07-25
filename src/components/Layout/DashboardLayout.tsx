import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, Search } from 'lucide-react';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-dark-900 overflow-hidden font-sans text-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 border-b border-dark-700 bg-dark-900/90 backdrop-blur flex items-center px-6 justify-between sticky top-0 z-10">
            <h1 className="text-xl font-semibold text-white">Project Dashboard</h1>
            
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center relative">
                    <Search className="w-4 h-4 text-gray-500 absolute left-3" />
                    <input 
                        type="text" 
                        placeholder="Search insights..." 
                        className="bg-dark-800 border border-dark-700 rounded-lg pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-primary-500/50 text-gray-200 w-64"
                    />
                </div>
                <button className="text-gray-400 hover:text-white transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md cursor-pointer border border-white/10">
                    DA
                </div>
            </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-dark-900/50">
          {children}
        </main>
      </div>
    </div>
  );
};
