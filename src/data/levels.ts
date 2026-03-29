import type { Level } from '@/types';

export const levels: Level[] = [
  // ===== ENGLISH =====
  {
    id: 101,
    title: { en: 'Meet the Keyboard', uk: 'Знайомство з клавіатурою', pl: 'Poznaj klawiaturę', ru: 'Знакомство с клавиатурой' },
    description: { en: 'Find the English letters', uk: 'Знайди англійські літери', pl: 'Znajdź angielskie litery', ru: 'Найди английские буквы' },
    type: 'keyboard-intro',
    language: 'en',
    requiredStars: 0,
  },
  {
    id: 102,
    title: { en: 'English Words', uk: 'Англійські слова', pl: 'Angielskie słowa', ru: 'Английские слова' },
    description: { en: 'Type simple English words', uk: 'Набирай англійські слова', pl: 'Pisz angielskie słowa', ru: 'Набирай английские слова' },
    type: 'type-word',
    language: 'en',
    requiredStars: 1,
  },
  {
    id: 103,
    title: { en: 'English Listening', uk: 'Англійське аудіо', pl: 'Angielski ze słuchu', ru: 'Английское аудио' },
    description: { en: 'Type what you hear!', uk: 'Набери те, що чуєш!', pl: 'Napisz co słyszysz!', ru: 'Набери то, что слышишь!' },
    type: 'audio-typing',
    language: 'en',
    requiredStars: 3,
  },

  // ===== UKRAINIAN =====
  {
    id: 201,
    title: { en: 'Ukrainian Keyboard', uk: 'Українська клавіатура', pl: 'Klawiatura ukraińska', ru: 'Украинская клавиатура' },
    description: { en: 'Learn Ukrainian letters', uk: 'Вивчи українські літери', pl: 'Poznaj ukraińskie litery', ru: 'Изучи украинские буквы' },
    type: 'keyboard-intro',
    language: 'uk',
    requiredStars: 0,
  },
  {
    id: 202,
    title: { en: 'Ukrainian Words', uk: 'Українські слова', pl: 'Ukraińskie słowa', ru: 'Украинские слова' },
    description: { en: 'Type Ukrainian words', uk: 'Набирай українські слова', pl: 'Pisz ukraińskie słowa', ru: 'Набирай украинские слова' },
    type: 'type-word',
    language: 'uk',
    requiredStars: 1,
  },
  {
    id: 203,
    title: { en: 'Ukrainian Listening', uk: 'Українське аудіо', pl: 'Ukraiński ze słuchu', ru: 'Украинское аудио' },
    description: { en: 'Type what you hear!', uk: 'Набери те, що чуєш!', pl: 'Napisz co słyszysz!', ru: 'Набери то, что слышишь!' },
    type: 'audio-typing',
    language: 'uk',
    requiredStars: 3,
  },

  // ===== POLISH =====
  {
    id: 301,
    title: { en: 'Polish Keyboard', uk: 'Польська клавіатура', pl: 'Klawiatura polska', ru: 'Польская клавиатура' },
    description: { en: 'Learn Polish letters', uk: 'Вивчи польські літери', pl: 'Poznaj polskie litery', ru: 'Изучи польские буквы' },
    type: 'keyboard-intro',
    language: 'pl',
    requiredStars: 0,
  },
  {
    id: 302,
    title: { en: 'Polish Words', uk: 'Польські слова', pl: 'Polskie słowa', ru: 'Польские слова' },
    description: { en: 'Type Polish words', uk: 'Набирай польські слова', pl: 'Pisz polskie słowa', ru: 'Набирай польские слова' },
    type: 'type-word',
    language: 'pl',
    requiredStars: 1,
  },
  {
    id: 303,
    title: { en: 'Polish Listening', uk: 'Польське аудіо', pl: 'Polski ze słuchu', ru: 'Польское аудио' },
    description: { en: 'Type what you hear!', uk: 'Набери те, що чуєш!', pl: 'Napisz co słyszysz!', ru: 'Набери то, что слышишь!' },
    type: 'audio-typing',
    language: 'pl',
    requiredStars: 3,
  },

  // ===== RUSSIAN =====
  {
    id: 401,
    title: { en: 'Russian Keyboard', uk: 'Російська клавіатура', pl: 'Klawiatura rosyjska', ru: 'Русская клавиатура' },
    description: { en: 'Learn Russian letters', uk: 'Вивчи російські літери', pl: 'Poznaj rosyjskie litery', ru: 'Изучи русские буквы' },
    type: 'keyboard-intro',
    language: 'ru',
    requiredStars: 0,
  },
  {
    id: 402,
    title: { en: 'Russian Words', uk: 'Російські слова', pl: 'Rosyjskie słowa', ru: 'Русские слова' },
    description: { en: 'Type Russian words', uk: 'Набирай російські слова', pl: 'Pisz rosyjskie słowa', ru: 'Набирай русские слова' },
    type: 'type-word',
    language: 'ru',
    requiredStars: 1,
  },
  {
    id: 403,
    title: { en: 'Russian Listening', uk: 'Російське аудіо', pl: 'Rosyjski ze słuchu', ru: 'Русское аудио' },
    description: { en: 'Type what you hear!', uk: 'Набери те, що чуєш!', pl: 'Napisz co słyszysz!', ru: 'Набери то, что слышишь!' },
    type: 'audio-typing',
    language: 'ru',
    requiredStars: 3,
  },

  // ===== MIXED =====
  {
    id: 901,
    title: { en: 'Speed Challenge', uk: 'Швидкісний виклик', pl: 'Wyzwanie szybkości', ru: 'Скоростной вызов' },
    description: { en: 'Type as fast as you can!', uk: 'Друкуй якнайшвидше!', pl: 'Pisz najszybciej jak potrafisz!', ru: 'Печатай быстрее!' },
    type: 'speed',
    language: 'mixed',
    requiredStars: 5,
  },
  {
    id: 902,
    title: { en: 'Final Boss', uk: 'Фінальний бос', pl: 'Ostateczny boss', ru: 'Финальный босс' },
    description: { en: 'The ultimate challenge!', uk: 'Головне випробування!', pl: 'Ostateczne wyzwanie!', ru: 'Главное испытание!' },
    type: 'boss',
    language: 'mixed',
    requiredStars: 8,
  },
];

/** Get levels for a specific language (its own + mixed) */
export function getLevelsForLanguage(lang: string): Level[] {
  return levels.filter((l) => l.language === lang || l.language === 'mixed');
}

/** Get stars earned for a specific language */
export function getStarsForLanguage(progress: { levelId: number; stars: number }[], lang: string): number {
  const langLevelIds = levels.filter((l) => l.language === lang).map((l) => l.id);
  return progress
    .filter((p) => langLevelIds.includes(p.levelId))
    .reduce((sum, p) => sum + p.stars, 0);
}
