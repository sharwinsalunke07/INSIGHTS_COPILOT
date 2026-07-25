import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { Rocket, AlertCircle } from 'lucide-react';
import { generateResearch } from '../services/ai';
import { LoadingSpinner } from '../components/UI/LoadingSpinner';

export const SubmitIdea: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    problem: '',
    domain: '',
    difficulty: 'Beginner'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Project Title is required';
    if (!formData.problem.trim()) newErrors.problem = 'Problem Statement is required';
    else if (formData.problem.length < 20) newErrors.problem = 'Problem Statement must be at least 20 characters for a good result';
    if (!formData.domain.trim()) newErrors.domain = 'Domain is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    
    if (validate()) {
      setIsLoading(true);
      try {
        const result = await generateResearch(
          formData.title,
          formData.domain,
          formData.problem,
          formData.difficulty
        );
        // Navigate to results page with the full structured JSON result
        navigate('/results', { state: { projectData: result, idea: formData.title, domain: formData.domain, difficulty: formData.difficulty } });
      } catch (error) {
        if (error instanceof Error) {
          setApiError(error.message);
        } else {
          setApiError('An unexpected error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 font-sans text-gray-200">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="w-full max-w-2xl bg-dark-800/80 backdrop-blur border border-dark-700 rounded-2xl p-8 sm:p-10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary-500/20 blur-[50px] rounded-full pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Submit Your Idea</h2>
            <p className="text-gray-400">Fill in the details below to generate a comprehensive research plan.</p>
          </div>
          
          {isLoading ? (
            <div className="py-12 relative z-10">
              <LoadingSpinner text="Searching with Tavily & Synthesizing with Groq..." />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 animate-in fade-in duration-500">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Title</label>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. AI-Powered Crop Health Monitor"
                  className={`w-full bg-dark-900/50 border ${errors.title ? 'border-red-500' : 'border-dark-600 focus:border-primary-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all shadow-inner`}
                />
                {errors.title && <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5"><AlertCircle className="w-4 h-4"/>{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Problem Statement</label>
                <textarea 
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Describe the core problem you are trying to solve..."
                  rows={4}
                  className={`w-full bg-dark-900/50 border ${errors.problem ? 'border-red-500' : 'border-dark-600 focus:border-primary-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none transition-all shadow-inner`}
                />
                {errors.problem && <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5"><AlertCircle className="w-4 h-4"/>{errors.problem}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Domain</label>
                  <input 
                    type="text"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    placeholder="e.g. Agriculture, FinTech..."
                    className={`w-full bg-dark-900/50 border ${errors.domain ? 'border-red-500' : 'border-dark-600 focus:border-primary-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all shadow-inner`}
                  />
                  {errors.domain && <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5"><AlertCircle className="w-4 h-4"/>{errors.domain}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Difficulty Level</label>
                  <div className="relative">
                    <select 
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleChange}
                      className="w-full bg-dark-900/50 border border-dark-600 focus:border-primary-500 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all appearance-none shadow-inner cursor-pointer"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {apiError && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200 leading-relaxed">{apiError}</p>
                </div>
              )}

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 mt-4"
              >
                <Rocket className="w-5 h-5" />
                Generate Research
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
