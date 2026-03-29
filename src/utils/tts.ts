import type { Language } from '@/types';

const langMap: Record<Language, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
};

export function speak(text: string, language: Language): void {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langMap[language];
  utterance.rate = 0.8;
  utterance.pitch = 1.1;

  window.speechSynthesis.speak(utterance);
}
