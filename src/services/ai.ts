import type { ProjectData } from '../types';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const TAVILY_API_KEY = import.meta.env.VITE_TAVILY_API_KEY;

export const generateResearch = async (
  projectIdea: string,
  domain: string,
  problem: string,
  difficulty: string
): Promise<ProjectData> => {
  if (!GROQ_API_KEY || !TAVILY_API_KEY) {
    throw new Error('API keys are missing. Please set VITE_GROQ_API_KEY and VITE_TAVILY_API_KEY in your .env file.');
  }

  // 1. Tavily Search
  let tavilyContext = '';
  try {
    const searchResponse = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: TAVILY_API_KEY,
        query: `Current market solutions, research papers, and apis for project: ${projectIdea}. Domain: ${domain}. Problem: ${problem}.`,
        search_depth: 'basic',
        max_results: 4,
      }),
    });

    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      const results = searchData.results || [];
      tavilyContext = results.map((r: any) => `Title: ${r.title}\nContent: ${r.content}`).join('\n\n');
    } else {
      console.warn('Tavily search failed. Proceeding with limited context.');
    }
  } catch (error) {
    console.warn('Tavily request error:', error);
  }

  // 2. Groq LLM Synthesis
  const promptTemplate = `You are an expert research assistant.

Given the following project idea:
Title: ${projectIdea}
Domain: ${domain}
Target Difficulty: ${difficulty}
Core Problem: ${problem}

Here is live research data retrieved from the web (Tavily API) to help you formulate the plan:
---
${tavilyContext || 'No web data available.'}
---

Using the context above and your own expertise, generate a comprehensive project roadmap.
You MUST output ONLY valid JSON using exactly this structure, with no extra text outside the JSON block.

Required JSON Structure:
{
  "problemValidation": "string",
  "marketNeed": "string",
  "existingSolutions": ["string"],
  "researchGap": "string",
  "innovationOpportunities": ["string"],
  "recommendedTechnologyStack": ["string"],
  "systemArchitecture": "string",
  "apis": ["string"],
  "datasets": ["string"],
  "githubRepositories": ["string"],
  "researchPapers": ["string"],
  "sixWeekImplementationRoadmap": ["string"]
}
`;

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: promptTemplate }],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      })
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.json();
      throw new Error(errorData.error?.message || 'Failed to fetch from Groq API.');
    }

    const data = await groqResponse.json();
    const content = data.choices[0].message.content;
    
    const parsedData: ProjectData = JSON.parse(content);
    return parsedData;

  } catch (error) {
    console.error('Error generating research:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred while generating your project plan.');
  }
};
