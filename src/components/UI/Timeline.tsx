import React from 'react';

const steps = [
  { week: 'Week 1', title: 'Research', desc: 'Market analysis, feasibility study, and requirements gathering' },
  { week: 'Week 2', title: 'Frontend', desc: 'UI/UX design, component creation, and React implementation' },
  { week: 'Week 3', title: 'Backend', desc: 'API development, database setup, and core business logic' },
  { week: 'Week 4', title: 'AI', desc: 'OpenAI integration, prompt engineering, and model tuning' },
  { week: 'Week 5', title: 'Testing', desc: 'QA, unit testing, user acceptance, and bug fixes' },
  { week: 'Week 6', title: 'Deployment', desc: 'Production release, CI/CD pipeline setup, and monitoring' },
];

export const Timeline: React.FC = () => {
  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-600 before:via-dark-600 before:to-transparent">
      {steps.map((item, idx) => (
        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-dark-900 text-primary-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            {idx + 1}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-dark-700 bg-dark-800/80 shadow-lg hover:border-primary-500/50 transition-colors backdrop-blur-sm cursor-default">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-100 text-lg">{item.title}</h4>
              <span className="text-xs font-bold tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-1 rounded-md uppercase">{item.week}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
