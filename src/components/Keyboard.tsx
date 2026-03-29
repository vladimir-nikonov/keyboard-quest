import { useState, useEffect } from 'react';
import type { Language } from '@/types';
import { keyboardLayout, fingerMap, fingerLabels, fingerColors, type Finger } from '@/data/keyboards';
import { Keycap } from './Keycap';

interface KeyboardProps {
  language: Language;
  showAll?: boolean;
  highlightedKey?: string | null;
  showFingerHint?: boolean;
  onKeyClick?: (key: string) => void;
}

export function Keyboard({
  language,
  showAll = false,
  highlightedKey = null,
  showFingerHint = false,
  onKeyClick,
}: KeyboardProps) {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    function onDown(e: KeyboardEvent) {
      if (e.repeat || e.key.length !== 1) return;
      setPressedKey(e.key.toLowerCase());
    }
    function onUp() {
      setPressedKey(null);
    }
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  // Find the finger for the highlighted key
  let highlightFinger: Finger | null = null;
  if (showFingerHint && highlightedKey) {
    for (const row of keyboardLayout) {
      for (const keyData of row.keys) {
        if (keyData[language] === highlightedKey) {
          highlightFinger = fingerMap[keyData.en] ?? null;
          break;
        }
      }
      if (highlightFinger) break;
    }
  }

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-4 w-full max-w-2xl">
      {/* Finger hint */}
      {showFingerHint && highlightFinger && (
        <div className="text-sm text-white/60 mb-1">
          Use: <span className="font-bold text-white">{fingerLabels[highlightFinger]}</span>
        </div>
      )}

      {keyboardLayout.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-0.5 sm:gap-1.5"
          style={{ paddingLeft: `${row.offset}rem` }}
        >
          {row.keys.map((keyData, keyIdx) => {
            const keyChar = keyData[language];
            const isPressed =
              pressedKey === keyData.en ||
              pressedKey === keyChar;
            const finger = fingerMap[keyData.en] ?? null;
            const isHighlightedFinger = showFingerHint && highlightFinger && finger === highlightFinger;
            return (
              <Keycap
                key={keyIdx}
                keyData={keyData}
                language={language}
                showAll={showAll}
                highlighted={highlightedKey === keyChar}
                pressed={isPressed}
                fingerColor={isHighlightedFinger ? fingerColors[finger] : undefined}
                onClick={() => onKeyClick?.(keyChar)}
              />
            );
          })}
        </div>
      ))}
      {/* Spacebar */}
      <div className="flex gap-0.5 sm:gap-1.5" style={{ paddingLeft: '1.25rem' }}>
        <button
          type="button"
          onClick={() => onKeyClick?.(' ')}
          className={`w-40 sm:w-64 h-8 sm:h-12 md:h-14 rounded-md sm:rounded-lg bg-bg-card border-b-2 sm:border-b-[3px] border-black/30 text-white font-bold shadow-md hover:brightness-110 transition-colors ${pressedKey === ' ' ? '!bg-primary shadow-none translate-y-[2px]' : ''}`}
        >
          ␣
        </button>
      </div>
    </div>
  );
}
