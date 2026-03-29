export interface Achievement {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'first-key',
    title: { en: 'First Key', uk: 'Перша клавіша', pl: 'Pierwszy klawisz', ru: 'Первая клавиша' },
    description: { en: 'Press your first key!', uk: 'Натисни першу клавішу!', pl: 'Naciśnij pierwszy klawisz!', ru: 'Нажми первую клавишу!' },
    icon: '🔑',
  },
  {
    id: 'english-master',
    title: { en: 'English Master', uk: 'Майстер англійської', pl: 'Mistrz angielskiego', ru: 'Мастер английского' },
    description: { en: 'Complete all English levels', uk: 'Пройди всі англійські рівні', pl: 'Ukończ wszystkie angielskie poziomy', ru: 'Пройди все английские уровни' },
    icon: '🇺🇸',
  },
  {
    id: 'ukrainian-hero',
    title: { en: 'Ukrainian Hero', uk: 'Український герой', pl: 'Ukraiński bohater', ru: 'Украинский герой' },
    description: { en: 'Complete all Ukrainian levels', uk: 'Пройди всі українські рівні', pl: 'Ukończ wszystkie ukraińskie poziomy', ru: 'Пройди все украинские уровни' },
    icon: '🇺🇦',
  },
  {
    id: 'polish-champion',
    title: { en: 'Polish Champion', uk: 'Польський чемпіон', pl: 'Polski mistrz', ru: 'Польский чемпион' },
    description: { en: 'Complete all Polish levels', uk: 'Пройди всі польські рівні', pl: 'Ukończ wszystkie polskie poziomy', ru: 'Пройди все польские уровни' },
    icon: '🇵🇱',
  },
  {
    id: 'russian-explorer',
    title: { en: 'Russian Explorer', uk: 'Російський дослідник', pl: 'Rosyjski odkrywca', ru: 'Русский исследователь' },
    description: { en: 'Complete all Russian levels', uk: 'Пройди всі російські рівні', pl: 'Ukończ wszystkie rosyjskie poziomy', ru: 'Пройди все русские уровни' },
    icon: '🇷🇺',
  },
  {
    id: 'sound-detective',
    title: { en: 'Sound Detective', uk: 'Звуковий детектив', pl: 'Detektyw dźwięku', ru: 'Звуковой детектив' },
    description: { en: 'Complete an audio typing level', uk: 'Пройди рівень аудіо-набору', pl: 'Ukończ poziom ze słuchu', ru: 'Пройди уровень аудио-набора' },
    icon: '🔊',
  },
  {
    id: 'speed-demon',
    title: { en: 'Speed Demon', uk: 'Швидкісний демон', pl: 'Demon prędkości', ru: 'Скоростной демон' },
    description: { en: 'Type 20 WPM or faster', uk: 'Друкуй 20 слів/хв або швидше', pl: '20 słów/min lub szybciej', ru: '20 слов/мин или быстрее' },
    icon: '⚡',
  },
  {
    id: 'streak-5',
    title: { en: 'On Fire!', uk: 'У ударі!', pl: 'W ogniu!', ru: 'В ударе!' },
    description: { en: '5 correct in a row', uk: '5 правильних поспіль', pl: '5 poprawnych z rzędu', ru: '5 правильных подряд' },
    icon: '🔥',
  },
  {
    id: 'boss-winner',
    title: { en: 'Final Boss Winner', uk: 'Переможець Фінального Боса', pl: 'Zwycięzca Bossa', ru: 'Победитель Босса' },
    description: { en: 'Defeat the Final Boss!', uk: 'Перемож Фінального Боса!', pl: 'Pokonaj ostatecznego bossa!', ru: 'Победи Финального Босса!' },
    icon: '👑',
  },
];
