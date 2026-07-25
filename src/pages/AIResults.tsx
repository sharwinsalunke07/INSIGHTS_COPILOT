import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';
import { Skeleton } from '../components/UI/Skeleton';
import { Timeline } from '../components/UI/Timeline';
import { Architecture } from '../components/UI/Architecture';
import { CheckCircle2, ChevronRight, GitBranch, Database, Code, Lightbulb, Search, Layers, LayoutTemplate, Map } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import type { ProjectData } from '../types';

export const AIResults: React.FC = () => {
  const location = useLocation();
  const ideaTitle = location.state?.idea || 'AI-Powered Crop Health Monitor';
  const realData = location.state?.projectData as ProjectData | undefined;

  // If realData is passed from SubmitIdea, skip loading simulation
  const [isLoading, setIsLoading] = useState(!realData);

  useEffect(() => {
    if (!realData) {
      // Simulate loading delay for demonstration if no data is passed
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [realData]);

  const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex items-center gap-3 mb-6 border-b border-dark-700 pb-4">
      <div className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-primary-400">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-r from-dark-800 to-dark-900 p-8 rounded-2xl border border-dark-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
                <p className="text-primary-400 font-semibold mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Generation Complete
                </p>
                {isLoading ? (
                    <Skeleton className="h-10 w-96 mb-4" />
                ) : (
                    <h1 className="text-4xl font-extrabold text-white mb-4">{ideaTitle}</h1>
                )}
                {isLoading ? (
                    <Skeleton className="h-6 w-64" />
                ) : (
                    <p className="text-gray-400 text-lg">Domain: Agriculture • Difficulty: Intermediate</p>
                )}
            </div>
            <div className="relative z-10">
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2">
                    Export to PDF <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Text-heavy sections row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Validation */}
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<CheckCircle2 />} title="Problem Validation" />
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/6" />
                        <Skeleton className="h-4 w-full mt-4" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ) : (
                    <div className="prose prose-invert max-w-none text-gray-300">
                        <p>The problem of crop disease detection is highly validated. According to the FAO, up to 40% of global crop production is lost to pests annually. Current drone-based solutions are prohibitively expensive for smallholder farmers, and internet connectivity in rural areas prevents reliance on cloud-based AI inference.</p>
                        <p className="mt-4 font-semibold text-emerald-400">Verdict: Strong Market Need</p>
                    </div>
                )}
            </section>

            {/* Research Summary */}
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Search />} title="Research Summary" />
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-11/12" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-full mt-4" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                ) : (
                    <div className="prose prose-invert max-w-none text-gray-300">
                        <p>Recent studies (2023-2025) indicate a shift towards edge computing in precision agriculture. Lightweight models like YOLOv8n can run efficiently on devices like Raspberry Pi or Jetson Nano attached directly to commercial drones, eliminating the need for cloud uploads.</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                            <li>Multispectral imaging improves early detection by 30%</li>
                            <li>Offline inference reduces power consumption</li>
                        </ul>
                    </div>
                )}
            </section>

            {/* Research Gap & Existing Solutions */}
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Layers />} title="Research Gap & Solutions" />
                {isLoading ? (
                    <div className="space-y-6">
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-6 w-1/3 mt-4" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2">Existing Solutions</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-dark-700 rounded-md text-sm text-gray-300">FarmBot</span>
                                <span className="px-3 py-1 bg-dark-700 rounded-md text-sm text-gray-300">DJI Agras</span>
                                <span className="px-3 py-1 bg-dark-700 rounded-md text-sm text-gray-300">Sentera</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">The Gap</h3>
                            <p className="text-gray-400 bg-dark-900/50 p-4 rounded-lg border border-red-900/30 border-l-2 border-l-red-500">
                                Existing platforms are closed-ecosystem, require expensive proprietary hardware, and rely heavily on continuous 5G/4G connectivity which is unavailable in 70% of developing nation farmlands.
                            </p>
                        </div>
                    </div>
                )}
            </section>

            {/* Innovation Opportunities */}
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Lightbulb />} title="Innovation Opportunities" />
                {isLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="p-4 bg-primary-900/10 border border-primary-500/20 rounded-xl flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">1</div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Open-Source Edge AI Payload</h4>
                                <p className="text-sm text-gray-400">Design a universal 3D-printed mount with a Raspberry Pi that can attach to any cheap consumer drone (like DJI Mini) for offline inference.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">2</div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Federated Learning Sync</h4>
                                <p className="text-sm text-gray-400">Drones sync their localized learnings with a central hub via LoRaWAN or when they return to a Wi-Fi zone, improving the global model without sending heavy image data.</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>

        {/* Tech Stack & Architecture */}
        <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
            <SectionHeader icon={<LayoutTemplate />} title="Architecture & Tech Stack" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
                    {isLoading ? (
                        <div className="flex flex-wrap gap-2">
                            <Skeleton className="h-8 w-24 rounded-full" />
                            <Skeleton className="h-8 w-32 rounded-full" />
                            <Skeleton className="h-8 w-20 rounded-full" />
                            <Skeleton className="h-8 w-28 rounded-full" />
                            <Skeleton className="h-8 w-24 rounded-full" />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">React Native</span>
                            <span className="px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-medium">FastAPI</span>
                            <span className="px-4 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-sm font-medium">Python</span>
                            <span className="px-4 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-sm font-medium">YOLOv8</span>
                            <span className="px-4 py-1.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-sm font-medium">Docker</span>
                        </div>
                    )}
                </div>
                <div className="lg:col-span-2">
                    <h3 className="text-white font-semibold mb-4">System Architecture</h3>
                    {isLoading ? (
                        <Skeleton className="h-64 w-full rounded-xl" />
                    ) : (
                        <div className="w-full bg-dark-900/50 border border-dark-700 rounded-xl p-6 relative overflow-hidden group flex justify-center">
                            {/* Abstract placeholder for architecture diagram */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 via-dark-900 to-dark-900"></div>
                            <Architecture />
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* Resources Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Database />} title="Datasets" />
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                            <p className="text-white font-medium text-sm">PlantVillage Dataset</p>
                            <p className="text-xs text-gray-400">54,306 images of plant leaves</p>
                        </div>
                        <div className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                            <p className="text-white font-medium text-sm">CGIAR Crop Disease</p>
                            <p className="text-xs text-gray-400">African field imagery datasets</p>
                        </div>
                    </div>
                )}
            </section>
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Code />} title="APIs" />
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                            <p className="text-white font-medium text-sm">OpenWeather API</p>
                            <p className="text-xs text-gray-400">Correlate weather with disease spread</p>
                        </div>
                        <div className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                            <p className="text-white font-medium text-sm">Twilio API</p>
                            <p className="text-xs text-gray-400">SMS alerts for offline farmers</p>
                        </div>
                    </div>
                )}
            </section>
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<GitBranch />} title="GitHub Repos" />
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                ) : (
                    <div className="space-y-3">
                        <a href="#" className="block p-3 bg-dark-900/50 border border-dark-700 rounded-lg hover:border-primary-500 transition-colors">
                            <p className="text-primary-400 font-medium text-sm">ultralytics/yolov8</p>
                            <p className="text-xs text-gray-400">State-of-the-art vision models</p>
                        </a>
                        <a href="#" className="block p-3 bg-dark-900/50 border border-dark-700 rounded-lg hover:border-primary-500 transition-colors">
                            <p className="text-primary-400 font-medium text-sm">farmOS/farmOS</p>
                            <p className="text-xs text-gray-400">Open source farm management</p>
                        </a>
                    </div>
                )}
            </section>
        </div>

        {/* Roadmap */}
        <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
            <SectionHeader icon={<Map />} title="Implementation Roadmap" />
            {isLoading ? (
                <div className="space-y-6 pl-4 border-l border-dark-700 ml-4">
                    <Skeleton className="h-16 w-full max-w-md" />
                    <Skeleton className="h-16 w-full max-w-md" />
                    <Skeleton className="h-16 w-full max-w-md" />
                </div>
            ) : (
                <Timeline />
            )}
        </section>

      </div>
    </DashboardLayout>
  );
};
