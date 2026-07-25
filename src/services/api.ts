/**
 * API services for connecting to the AI backend.
 * Implementation pending business logic integration.
 */

import type { ProjectData } from '../types';

export const generateProjectPlan = async (_idea: string): Promise<ProjectData> => {
  // Mock delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    problemValidation: 'Mock problem validation data',
    // ... other fields will be implemented later
  };
};
