import type { Language } from '@/types';
import { keyboardLayout } from '@/data/keyboards';
import { Keycap } from './Keycap';

interface KeyboardProps {
  language: Language;
  showAll?: boolean;
  highlightedKey?: string | null;
  pressedKey?: string | null;
  onKeyClick?: (key: string) => void;
}

export function Keyboard({
  language,
  showAll = false,
  highlightedKey = null,
  pressedKey = null,
  onKeyClick,
}: KeyboardProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-4">
      {keyboardLayout.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-1.5"
          style={{ paddingLeft: `${row.offset}rem` }}
        >
          {row.keys.map((keyData, keyIdx) => {
            const keyChar = keyData[language];
            return (
              <Keycap
                key={keyIdx}
                keyData={keyData}
                language={language}
                showAll={showAll}
                highlighted={highlightedKey === keyChar}
                pressed={pressedKey === keyChar}
                onClick={() => onKeyClick?.(keyChar)}
              />
            );
          })}
        </div>
      ))}
      {/* Spacebar */}
      <div className="flex gap-1.5" style={{ paddingLeft: '1.25rem' }}>
        <button
          type="button"
          onClick={() => onKeyClick?.(' ')}
          className="w-64 h-12 sm:h-14 rounded-lg bg-bg-card border-b-[3px] border-black/30 text-white font-bold shadow-md hover:brightness-110 transition-colors"
        >
          ␣
        </button>
      </div>
    </div>
  );
}
