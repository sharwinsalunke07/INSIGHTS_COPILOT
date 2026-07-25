import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface PromptInputProps {
  onSubmit: (idea: string) => void;
  isGenerating: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isGenerating }) => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim() && !isGenerating) {
      onSubmit(idea);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex items-center bg-dark-800 rounded-2xl border border-dark-700 p-2 shadow-2xl focus-within:border-primary-500/50 transition-colors">
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your project idea (e.g., 'An AI system to monitor crop health using drone imagery...')"
          className="w-full bg-transparent text-gray-200 placeholder-gray-500 outline-none resize-none px-4 py-3 h-24"
          disabled={isGenerating}
        />
        <div className="absolute bottom-4 right-4 flex items-center">
          <button
            type="submit"
            disabled={!idea.trim() || isGenerating}
            className="flex items-center justify-center p-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isGenerating ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
