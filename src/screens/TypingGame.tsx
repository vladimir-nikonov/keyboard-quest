import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language, Level, ResultComparison } from '@/types';
import { useGame } from '@/context/GameContext';
import { Keyboard } from '@/components/Keyboard';
import { WordComparison } from '@/components/WordComparison';
import { ProgressBar } from '@/components/ProgressBar';
import { wordBank } from '@/data/words';
import { compareWords } from '@/utils/comparison';
import { saveLevelProgress } from '@/utils/progress';
import { speak } from '@/utils/tts';
import { isLayoutCorrect, languageFlags, languageNames } from '@/utils/layout';
import { playSuccess, playError, playLevelComplete } from '@/utils/sounds';

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
  const { setScreen, activeProfile, updateProfile } = useGame();
  const [words] = useState(() => getWords(language, 5));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ResultComparison | null>(null);
  const [results, setResults] = useState<ResultComparison[]>([]);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentIdx];
  const layoutOk = isLayoutCorrect(input, language);

  // Auto-speak word when it appears
  useEffect(() => {
    if (currentWord && !result && !done) {
      speak(currentWord.text, language);
    }
  }, [currentIdx, done]);

  useEffect(() => {
    if (done && activeProfile && results.length > 0) {
      const avgAccuracy = Math.round(
        results.reduce((sum, r) => sum + r.accuracy, 0) / results.length,
      );
      updateProfile(saveLevelProgress(activeProfile, level.id, avgAccuracy));
      playLevelComplete();
    }
  }, [done]);

  const handleSubmit = useCallback(() => {
    if (!currentWord || !input.trim()) return;

    const comparison = compareWords(currentWord.text, input.trim());
    setResult(comparison);
    setResults((prev) => [...prev, comparison]);

    if (comparison.isCorrect) {
      playSuccess();
    } else {
      playError();
    }

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

  const handleScreenKey = useCallback((key: string) => {
    if (result || done) return;
    setInput((prev) => prev + key);
  }, [result, done]);

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 sm:gap-6 px-2 sm:px-4 py-4">
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
            className="flex items-center gap-3"
          >
            <span className="text-3xl sm:text-5xl font-bold text-accent">{currentWord?.text}</span>
            <motion.button
              type="button"
              onClick={() => currentWord && speak(currentWord.text, language)}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              className="text-3xl p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Listen"
            >
              🔊
            </motion.button>
          </motion.div>

          <div className="flex items-center gap-2">
            <span className="text-2xl" title={languageNames[language]}>{languageFlags[language]}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className={`w-48 sm:w-72 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-bg-card text-white text-center text-xl sm:text-2xl font-mono outline-none focus:ring-2 ${layoutOk === false ? 'focus:ring-error ring-2 ring-error' : 'focus:ring-primary'}`}
              placeholder="Type here..."
            />
            {input.length > 0 && (
              <button
                type="button"
                onClick={() => setInput((prev) => prev.slice(0, -1))}
                className="px-3 py-3 rounded-xl bg-bg-card text-white/60 text-lg hover:text-white"
              >
                ⌫
              </button>
            )}
          </div>

          <AnimatePresence>
            {layoutOk === false && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-error text-sm font-bold"
              >
                Switch keyboard to {languageNames[language]} {languageFlags[language]}
              </motion.div>
            )}
          </AnimatePresence>

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

      <Keyboard
        language={language}
        showFingerHint
        highlightedKey={currentWord ? currentWord.text[input.length] ?? null : null}
        onKeyClick={handleScreenKey}
      />
    </div>
  );
}
