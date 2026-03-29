export type Language = 'en' | 'uk' | 'pl' | 'ru';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  progress: LevelProgress[];
  totalStars: number;
  achievements: string[];
  createdAt: number;
}

export interface LevelProgress {
  levelId: number;
  completed: boolean;
  stars: number; // 0-3
  bestAccuracy: number; // 0-100
  bestWpm: number;
  attempts: number;
}

export interface Level {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  type: LevelType;
  language: Language | 'mixed';
  requiredStars: number; // stars needed to unlock
}

export type LevelType =
  | 'keyboard-intro'
  | 'find-letter'
  | 'type-word'
  | 'audio-typing'
  | 'dictation'
  | 'speed'
  | 'boss';

export interface Word {
  text: string;
  language: Language;
  difficulty: 1 | 2 | 3;
}

export interface AudioWord extends Word {
  audioUrl?: string; // optional custom audio, otherwise use TTS
}

export interface ResultComparison {
  expected: string;
  actual: string;
  letterResults: LetterResult[];
  isCorrect: boolean;
  accuracy: number;
}

export interface LetterResult {
  expected: string;
  actual: string | null;
  status: 'correct' | 'wrong' | 'missing' | 'extra';
}

export interface GameSession {
  levelId: number;
  language: Language;
  words: Word[];
  currentWordIndex: number;
  results: ResultComparison[];
  startTime: number;
  streak: number;
}

export type Screen =
  | 'start'
  | 'profile-select'
  | 'world-map'
  | 'level'
  | 'rewards'
  | 'parent-dashboard';
