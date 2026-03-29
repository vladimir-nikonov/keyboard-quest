import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language, Level } from '@/types';
import { useGame } from '@/context/GameContext';
import { Keyboard } from '@/components/Keyboard';
import { useKeyPress } from '@/hooks/useKeyPress';
import { keyboardLayout } from '@/data/keyboards';

interface Props {
  level: Level;
  language: Language;
}

function getRandomLetter(lang: Language): string {
  const allKeys = keyboardLayout.flatMap((row) => row.keys);
  const idx = Math.floor(Math.random() * allKeys.length);
  return allKeys[idx][lang];
}

export function KeyboardLesson({ level, language }: Props) {
  const { setScreen } = useGame();
  const [targetLetter, setTargetLetter] = useState(() => getRandomLetter(language));
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const goal = 10;

  const handleKey = useCallback(
    (key: string) => {
      if (score >= goal) return;
      const isCorrect = key.toLowerCase() === targetLetter.toLowerCase();
      setTotal((t) => t + 1);
      if (isCorrect) {
        setScore((s) => s + 1);
        setFeedback('correct');
      } else {
        setFeedback('wrong');
      }
      setTimeout(() => {
        setFeedback(null);
        setTargetLetter(getRandomLetter(language));
      }, 500);
    },
    [targetLetter, language, score],
  );

  useKeyPress(handleKey);

  if (score >= goal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl"
        >
          🎉
        </motion.div>
        <h2 className="text-3xl font-bold text-success">Level Complete!</h2>
        <p className="text-white/60">Accuracy: {Math.round((score / total) * 100)}%</p>
        <button
          type="button"
          onClick={() => setScreen('world-map')}
          className="px-8 py-3 rounded-full bg-primary text-white font-bold text-lg"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <button
        type="button"
        onClick={() => setScreen('world-map')}
        className="absolute top-4 left-4 text-white/40 hover:text-white/60"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold text-white">
        {level.title[language]}
      </h2>

      <div className="text-white/50">
        Find the letter: ({score}/{goal})
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={targetLetter}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 20 }}
          className={`
            text-8xl font-bold uppercase
            ${feedback === 'correct' ? 'text-success' : feedback === 'wrong' ? 'text-error' : 'text-accent'}
          `}
        >
          {targetLetter}
        </motion.div>
      </AnimatePresence>

      <Keyboard
        language={language}
        highlightedKey={feedback === 'wrong' ? targetLetter : null}
        onKeyClick={handleKey}
      />
    </div>
  );
}
