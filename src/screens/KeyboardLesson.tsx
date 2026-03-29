import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language, Level } from '@/types';
import { useGame } from '@/context/GameContext';
import { Keyboard } from '@/components/Keyboard';
import { keyboardLayout, codeToLetter } from '@/data/keyboards';
import { saveLevelProgress } from '@/utils/progress';
import { speak } from '@/utils/tts';
import { playSuccess, playError, playLevelComplete } from '@/utils/sounds';
import { PixelBuilder } from '@/components/PixelBuilder';
import { getImageForLevel, getTotalBlocks } from '@/data/pixelArt';

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
  const { setScreen, activeProfile, updateProfile } = useGame();
  const [targetLetter, setTargetLetter] = useState(() => getRandomLetter(language));
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [saved, setSaved] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(2);

  const goal = 10;
  const maxAttempts = 2;

  // Pixel art state
  const pixelImage = getImageForLevel(level.id, activeProfile?.totalStars ?? 0);
  const totalBlocks = getTotalBlocks(pixelImage);
  const blocksPerCorrect = Math.ceil(totalBlocks / goal);
  const [builtBlocks, setBuiltBlocks] = useState(0);
  const [crumbleCount, setCrumbleCount] = useState(0);
  const lastActivityRef = useRef(Date.now());

  // Crumble timer
  useEffect(() => {
    if (score >= goal) return;
    const timer = setInterval(() => {
      const idle = Date.now() - lastActivityRef.current;
      if (idle > 8000) {
        const blocks = Math.floor((idle - 8000) / 2500) + 1;
        setCrumbleCount(Math.min(blocks, builtBlocks));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [score, builtBlocks]);

  // Auto-speak the target letter when it changes (but not after level complete)
  useEffect(() => {
    if (targetLetter && feedback === null && score < goal) {
      speak(targetLetter, language);
    }
  }, [targetLetter, feedback === null]);

  const checkKey = useCallback(
    (pressedLetter: string) => {
      if (score >= goal || feedback) return;
      const isCorrect = pressedLetter.toLowerCase() === targetLetter.toLowerCase();
      setTotal((t) => t + 1);
      lastActivityRef.current = Date.now();
      setCrumbleCount(0);
      if (isCorrect) {
        setScore((s) => s + 1);
        setFeedback('correct');
        playSuccess();
        setBuiltBlocks((prev) => Math.min(prev + blocksPerCorrect, totalBlocks));
        setTimeout(() => {
          setFeedback(null);
          setTargetLetter(getRandomLetter(language));
          setAttemptsLeft(maxAttempts);
        }, 500);
      } else {
        const remaining = attemptsLeft - 1;
        setAttemptsLeft(remaining);
        setFeedback('wrong');
        playError();
        if (remaining <= 0) {
          // Out of attempts — show correct key, then move on
          setTimeout(() => {
            setFeedback(null);
            setTargetLetter(getRandomLetter(language));
            setAttemptsLeft(maxAttempts);
          }, 1000);
        } else {
          // Still has attempts — let them try again
          setTimeout(() => {
            setFeedback(null);
          }, 400);
        }
      }
    },
    [targetLetter, language, score, feedback, attemptsLeft],
  );

  // Listen to physical keyboard via e.code -> map to game language
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.repeat) return;
      // Try mapping by physical key position
      const mapped = codeToLetter(e.code, language);
      if (mapped) {
        checkKey(mapped);
      } else if (e.key.length === 1) {
        // Fallback: use the raw key (works when system layout matches game language)
        checkKey(e.key);
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [checkKey, language]);

  // Handle on-screen keyboard clicks
  const handleClick = useCallback(
    (key: string) => {
      checkKey(key);
    },
    [checkKey],
  );

  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  useEffect(() => {
    if (score >= goal && activeProfile && !saved) {
      setSaved(true);
      updateProfile(saveLevelProgress(activeProfile, level.id, accuracy));
      playLevelComplete();
    }
  }, [score, goal, activeProfile, saved, accuracy, level.id, updateProfile]);

  if (score >= goal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl"
        >
          🎉
        </motion.div>
        <PixelBuilder image={pixelImage} builtCount={builtBlocks} crumbleCount={0} />
        <h2 className="text-3xl font-bold text-success">Level Complete!</h2>
        <p className="text-white/60">Accuracy: {accuracy}%</p>
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

      <h2 className="text-2xl font-bold text-white">
        {level.title[language]}
      </h2>

      <div className="flex items-center gap-4">
        <PixelBuilder image={pixelImage} builtCount={builtBlocks} crumbleCount={crumbleCount} />
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/50 text-sm">
            ({score}/{goal})
          </div>
          <div className="flex gap-1">
            {Array.from({ length: maxAttempts }).map((_, i) => (
              <span key={i} className={`text-lg ${i < attemptsLeft ? 'text-error' : 'text-white/20'}`}>
                ♥
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={targetLetter}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 20 }}
            className={`
              text-5xl sm:text-8xl font-bold uppercase
              ${feedback === 'correct' ? 'text-success' : feedback === 'wrong' ? 'text-error' : 'text-accent'}
            `}
          >
            {targetLetter}
          </motion.div>
        </AnimatePresence>
        <motion.button
          type="button"
          onClick={() => speak(targetLetter, language)}
          whileTap={{ scale: 0.85 }}
          className="text-2xl sm:text-3xl p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          🔊
        </motion.button>
      </div>

      <Keyboard
        language={language}
        highlightedKey={targetLetter}
        showFingerHint
        onKeyClick={handleClick}
      />
    </div>
  );
}
