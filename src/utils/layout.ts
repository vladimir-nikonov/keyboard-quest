import type { Language } from '@/types';

const cyrillicRange = /[\u0400-\u04FF]/;
const latinRange = /[a-zA-Z]/;

export function detectInputLanguage(text: string): 'latin' | 'cyrillic' | null {
  if (!text) return null;
  const lastChar = text[text.length - 1];
  if (cyrillicRange.test(lastChar)) return 'cyrillic';
  if (latinRange.test(lastChar)) return 'latin';
  return null;
}

export function isLayoutCorrect(input: string, targetLang: Language): boolean | null {
  const detected = detectInputLanguage(input);
  if (!detected) return null;
  if (targetLang === 'en' || targetLang === 'pl') return detected === 'latin';
  return detected === 'cyrillic'; // ru and uk need cyrillic
}

export const languageFlags: Record<Language, string> = {
  en: '🇺🇸',
  uk: '🇺🇦',
  pl: '🇵🇱',
  ru: '🇷🇺',
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  uk: 'Українська',
  pl: 'Polski',
  ru: 'Русский',
};
