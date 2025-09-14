import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CarAnalysis, AnalysisState } from '../types';
import apiService from './apiService';

interface AnalysisContextType {
  state: AnalysisState;
  analyzeImage: (imageFile: File) => Promise<void>;
  reset: () => void;
  retry: () => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

type AnalysisAction =
  | { type: 'SET_ANALYZING' }
  | { type: 'SET_ANALYSIS'; payload: CarAnalysis }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_IMAGE'; payload: File }
  | { type: 'RESET' };

const initialState: AnalysisState = {
  state: 'idle',
  analysis: undefined,
  errorMessage: undefined,
  selectedImage: undefined,
};

function analysisReducer(state: AnalysisState, action: AnalysisAction): AnalysisState {
  switch (action.type) {
    case 'SET_ANALYZING':
      return {
        ...state,
        state: 'analyzing',
        errorMessage: undefined,
      };
    case 'SET_ANALYSIS':
      return {
        ...state,
        state: 'completed',
        analysis: action.payload,
        errorMessage: undefined,
      };
    case 'SET_ERROR':
      return {
        ...state,
        state: 'error',
        errorMessage: action.payload,
      };
    case 'SET_IMAGE':
      return {
        ...state,
        selectedImage: action.payload,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  const analyzeImage = async (imageFile: File) => {
    dispatch({ type: 'SET_IMAGE', payload: imageFile });
    dispatch({ type: 'SET_ANALYZING' });

    try {
      // Check API health first
      const isApiHealthy = await apiService.checkApiHealth();
      if (!isApiHealthy) {
        throw new Error('API сервер недоступен. Убедитесь, что Python сервер запущен.');
      }

      const analysis = await apiService.analyzeCarImage(imageFile);
      dispatch({ type: 'SET_ANALYSIS', payload: analysis });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
    }
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const retry = () => {
    if (state.selectedImage) {
      analyzeImage(state.selectedImage);
    }
  };

  return (
    <AnalysisContext.Provider value={{ state, analyzeImage, reset, retry }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
}
