import { useGame } from '@/context/GameContext';
import { levels } from '@/data/levels';
import { KeyboardLesson } from './KeyboardLesson';
import { TypingGame } from './TypingGame';
import { AudioTypingGame } from './AudioTypingGame';

export function LevelScreen() {
  const { activeLevelId, setScreen, language } = useGame();

  const level = levels.find((l) => l.id === activeLevelId);
  if (!level) {
    setScreen('world-map');
    return null;
  }

  const levelLang = level.language === 'mixed' ? language : level.language;

  switch (level.type) {
    case 'keyboard-intro':
    case 'find-letter':
      return <KeyboardLesson level={level} language={levelLang} />;
    case 'type-word':
    case 'dictation':
    case 'speed':
    case 'boss':
      return <TypingGame level={level} language={levelLang} />;
    case 'audio-typing':
      return <AudioTypingGame level={level} language={levelLang} />;
    default:
      return <TypingGame level={level} language={levelLang} />;
  }
}
