// Types for Aman Kuzov React App

export interface CarAnalysis {
  success: boolean;
  filename: string;
  detections: Defect[];
  totalDefects: number;
  defectTypes: string[];
  classification: Classification;
  finalAnalysis: FinalAnalysis;
  imageSize: ImageSize;
}

export interface Defect {
  bbox: BoundingBox;
  confidence: number;
  class: string;
  classId: number;
  area: number;
}

export interface BoundingBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Classification {
  cleanliness: Cleanliness;
  integrity: Integrity;
  overallScore: number;
  recommendation: Recommendation;
  summary: Summary;
}

export interface Cleanliness {
  level: string;
  score: number;
  brightness: number;
  contrast: number;
  colorVariance: number;
  dirtScore: number;
  description: string;
}

export interface Integrity {
  level: string;
  score: number;
  severityScore: number;
  defectCount: number;
  coveragePercentage: number;
  defectCounts: Record<string, number>;
  description: string;
}

export interface Recommendation {
  driver: Message;
  passenger: Message;
  isClean: boolean;
  isIntact: boolean;
  overallCondition: string;
}

export interface Message {
  message: string;
  details: string;
  emoji: string;
}

export interface Summary {
  isClean: boolean;
  isIntact: boolean;
  totalDefects: number;
  damageSeverity: number;
}

export interface FinalAnalysis {
  rust: Record<string, any>;
  scratches: Record<string, any>;
  dents: Record<string, any>;
  cracks: Record<string, any>;
  cleanliness: Record<string, any>;
  overallCondition: Record<string, any>;
  recommendation: Record<string, any>;
}

export interface ImageSize {
  width: number;
  height: number;
}

export interface AnalysisState {
  state: 'idle' | 'analyzing' | 'completed' | 'error';
  analysis?: CarAnalysis;
  errorMessage?: string;
  selectedImage?: File;
}

export interface AppStrings {
  appName: string;
  appDescription: string;
  welcomeTitle: string;
  welcomeSubtitle: string;
  cameraTitle: string;
  cameraSubtitle: string;
  takePhoto: string;
  selectFromGallery: string;
  analyzing: string;
  analysisComplete: string;
  forDriver: string;
  forPassenger: string;
  retakePhoto: string;
  analyzeAgain: string;
  shareResult: string;
  saveResult: string;
  errorOccurred: string;
  tryAgain: string;
  noCameraPermission: string;
  loading: string;
}
