import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Language, Level, ResultComparison } from '@/types';
import { useGame } from '@/context/GameContext';
import { Keyboard } from '@/components/Keyboard';
import { WordComparison } from '@/components/WordComparison';
import { ProgressBar } from '@/components/ProgressBar';
import { wordBank } from '@/data/words';
import { compareWords } from '@/utils/comparison';

interface Props {
  level: Level;
  language: Language;
}

function getWords(lang: Language, count: number) {
  const available = wordBank.filter((w) => w.language === lang);
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function TypingGame({ level, language }: Props) {
  const { setScreen } = useGame();
  const [words] = useState(() => getWords(language, 5));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ResultComparison | null>(null);
  const [results, setResults] = useState<ResultComparison[]>([]);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentIdx];

  const handleSubmit = useCallback(() => {
    if (!currentWord || !input.trim()) return;

    const comparison = compareWords(currentWord.text, input.trim());
    setResult(comparison);
    setResults((prev) => [...prev, comparison]);

    setTimeout(() => {
      setResult(null);
      setInput('');
      if (currentIdx + 1 >= words.length) {
        setDone(true);
      } else {
        setCurrentIdx((i) => i + 1);
      }
      inputRef.current?.focus();
    }, 1500);
  }, [currentWord, input, currentIdx, words.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (done) {
    const avgAccuracy = Math.round(
      results.reduce((sum, r) => sum + r.accuracy, 0) / results.length,
    );
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">
          🎉
        </motion.div>
        <h2 className="text-3xl font-bold text-success">Level Complete!</h2>
        <p className="text-white/60">
          Average accuracy: {avgAccuracy}%
        </p>
        <p className="text-white/60">
          Correct: {results.filter((r) => r.isCorrect).length}/{results.length}
        </p>
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

      <h2 className="text-2xl font-bold text-white">{level.title[language]}</h2>

      <ProgressBar current={currentIdx} total={words.length} label="Words" />

      {result ? (
        <WordComparison result={result} />
      ) : (
        <>
          <motion.div
            key={currentWord?.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-accent"
          >
            {currentWord?.text}
          </motion.div>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-72 px-6 py-4 rounded-xl bg-bg-card text-white text-center text-2xl font-mono outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type here..."
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="px-8 py-3 rounded-full bg-primary text-white font-bold disabled:opacity-40"
          >
            Check ✓
          </button>
        </>
      )}

      <Keyboard language={language} />
    </div>
  );
}
