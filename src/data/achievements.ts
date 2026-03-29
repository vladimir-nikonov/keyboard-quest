export interface Achievement {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'first-key',
    title: { en: 'First Key', ru: 'Первая клавиша', uk: 'Перша клавіша' },
    description: { en: 'Press your first key!', ru: 'Нажми свою первую клавишу!', uk: 'Натисни свою першу клавішу!' },
    icon: '🔑',
  },
  {
    id: 'english-master',
    title: { en: 'English Master', ru: 'Мастер английского', uk: 'Майстер англійської' },
    description: { en: 'Complete all English levels', ru: 'Пройди все английские уровни', uk: 'Пройди всі англійські рівні' },
    icon: '🇬🇧',
  },
  {
    id: 'russian-explorer',
    title: { en: 'Russian Explorer', ru: 'Русский исследователь', uk: 'Російський дослідник' },
    description: { en: 'Complete all Russian levels', ru: 'Пройди все русские уровни', uk: 'Пройди всі російські рівні' },
    icon: '🇷🇺',
  },
  {
    id: 'ukrainian-hero',
    title: { en: 'Ukrainian Hero', ru: 'Украинский герой', uk: 'Український герой' },
    description: { en: 'Complete all Ukrainian levels', ru: 'Пройди всі українські рівні', uk: 'Пройди всі українські рівні' },
    icon: '🇺🇦',
  },
  {
    id: 'sound-detective',
    title: { en: 'Sound Detective', ru: 'Звуковой детектив', uk: 'Звуковий детектив' },
    description: { en: 'Complete the audio typing level', ru: 'Пройди уровень аудио-набора', uk: 'Пройди рівень аудіо-набору' },
    icon: '🔊',
  },
  {
    id: 'speed-demon',
    title: { en: 'Speed Demon', ru: 'Скоростной демон', uk: 'Швидкісний демон' },
    description: { en: 'Type 20 WPM or faster', ru: 'Печатай 20 слов в минуту или быстрее', uk: 'Друкуй 20 слів на хвилину або швидше' },
    icon: '⚡',
  },
  {
    id: 'streak-5',
    title: { en: 'On Fire!', ru: 'В ударе!', uk: 'У ударі!' },
    description: { en: 'Get 5 correct answers in a row', ru: 'Ответь правильно 5 раз подряд', uk: 'Відповідай правильно 5 разів поспіль' },
    icon: '🔥',
  },
  {
    id: 'boss-winner',
    title: { en: 'Final Boss Winner', ru: 'Победитель Финального Босса', uk: 'Переможець Фінального Боса' },
    description: { en: 'Defeat the Final Boss!', ru: 'Победи Финального Босса!', uk: 'Перемож Фінального Боса!' },
    icon: '👑',
  },
];
