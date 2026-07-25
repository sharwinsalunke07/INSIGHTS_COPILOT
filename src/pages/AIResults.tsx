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
  const domain = location.state?.domain || 'Unknown Domain';
  const difficulty = location.state?.difficulty || 'Unknown Difficulty';

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
                    <p className="text-gray-400 text-lg">Domain: {domain} • Difficulty: {difficulty}</p>
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
                        <p>{realData?.problemValidation || 'Problem validation data missing.'}</p>
                        <p className="mt-4 font-semibold text-emerald-400">Market Need: {realData?.marketNeed || 'Not specified'}</p>
                    </div>
                )}
            </section>

            {/* Research Summary */}
            <section className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm">
                <SectionHeader icon={<Search />} title="Research Papers" />
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
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                            {realData?.researchPapers?.map((paper, i) => (
                                <li key={i}>{paper}</li>
                            ))}
                            {(!realData?.researchPapers || realData.researchPapers.length === 0) && (
                                <li>No recent research papers found.</li>
                            )}
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
                                {realData?.existingSolutions?.map((sol, i) => (
                                    <span key={i} className="px-3 py-1 bg-dark-700 rounded-md text-sm text-gray-300">{sol}</span>
                                ))}
                                {(!realData?.existingSolutions || realData.existingSolutions.length === 0) && (
                                    <span className="text-gray-500 italic text-sm">None identified</span>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">The Gap</h3>
                            <p className="text-gray-400 bg-dark-900/50 p-4 rounded-lg border border-red-900/30 border-l-2 border-l-red-500">
                                {realData?.researchGap || 'No significant research gap identified.'}
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
                        {realData?.innovationOpportunities?.map((opp, i) => (
                            <div key={i} className="p-4 bg-primary-900/10 border border-primary-500/20 rounded-xl flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">{i + 1}</div>
                                <div>
                                    <p className="text-sm text-gray-400">{opp}</p>
                                </div>
                            </div>
                        ))}
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
                            {realData?.recommendedTechnologyStack?.map((tech, i) => (
                                <span key={i} className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="lg:col-span-2">
                    <h3 className="text-white font-semibold mb-4">System Architecture</h3>
                    {isLoading ? (
                        <Skeleton className="h-64 w-full rounded-xl" />
                    ) : (
                        <div className="w-full bg-dark-900/50 border border-dark-700 rounded-xl p-6 relative overflow-hidden group flex flex-col justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 via-dark-900 to-dark-900"></div>
                            <div className="flex justify-center w-full mb-4 z-10"><Architecture /></div>
                            <p className="mt-4 text-sm text-gray-400 text-center relative z-10 max-w-lg mx-auto">{realData?.systemArchitecture || 'Architecture details pending.'}</p>
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
                        {realData?.datasets?.map((dataset, i) => (
                            <div key={i} className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                                <p className="text-sm text-gray-300">{dataset}</p>
                            </div>
                        ))}
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
                        {realData?.apis?.map((api, i) => (
                            <div key={i} className="p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                                <p className="text-sm text-gray-300">{api}</p>
                            </div>
                        ))}
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
                        {realData?.githubRepositories?.map((repo, i) => (
                            <div key={i} className="block p-3 bg-dark-900/50 border border-dark-700 rounded-lg">
                                <p className="text-primary-400 font-medium text-sm">{repo}</p>
                            </div>
                        ))}
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
                <Timeline items={realData?.sixWeekImplementationRoadmap} />
            )}
        </section>

      </div>
    </DashboardLayout>
  );
};
