import type { Language } from '@/types';

const langMap: Record<Language, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
};

// Fallback chain: if the primary language voice is unavailable, try these
const fallbackMap: Record<Language, string[]> = {
  en: ['en-GB', 'en'],
  ru: ['ru'],
  uk: ['ru-RU', 'ru'], // Ukrainian → Russian as fallback (kids understand both)
};

function findVoice(lang: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  // Exact match first
  const exact = voices.find((v) => v.lang === lang);
  if (exact) return exact;
  // Prefix match (e.g. 'uk' matches 'uk-UA')
  const prefix = voices.find((v) => v.lang.startsWith(lang.split('-')[0]));
  return prefix ?? null;
}

export function speak(text: string, language: Language): void {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8;
  utterance.pitch = 1.1;

  // Try primary language, then fallbacks
  const primary = langMap[language];
  const candidates = [primary, ...fallbackMap[language]];

  for (const lang of candidates) {
    const voice = findVoice(lang);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
      break;
    }
  }

  // If no voice found, still set the lang and let the browser try
  if (!utterance.voice) {
    utterance.lang = primary;
  }

  window.speechSynthesis.speak(utterance);
}
