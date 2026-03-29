import { motion } from 'framer-motion';
import type { Language } from '@/types';
import type { KeyLayout } from '@/data/keyboards';

interface KeycapProps {
  keyData: KeyLayout;
  language: Language;
  showAll?: boolean;
  highlighted?: boolean;
  pressed?: boolean;
  correct?: boolean | null;
  fingerColor?: string;
  onClick?: () => void;
}

export function Keycap({
  keyData,
  language,
  showAll = false,
  highlighted = false,
  pressed = false,
  correct = null,
  fingerColor,
  onClick,
}: KeycapProps) {
  const bgColor = pressed
    ? 'bg-primary'
    : correct === true
      ? 'bg-success'
      : correct === false
        ? 'bg-error'
        : highlighted
          ? 'bg-accent'
          : 'bg-bg-card';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.92, y: 3 }}
      animate={
        pressed
          ? { scale: 0.92, y: 3 }
          : { scale: 1, y: 0 }
      }
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`
        ${bgColor}
        relative flex flex-col items-center justify-center
        w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14
        rounded-md sm:rounded-lg border-b-2 sm:border-b-[3px] border-black/30
        text-white font-bold cursor-pointer
        hover:brightness-110
        ${pressed ? 'shadow-none !border-b-[1px] ring-2 ring-white/40' : 'shadow-md'}
        ${fingerColor && !pressed && !highlighted ? fingerColor : ''}
      `}
    >
      {showAll ? (
        <>
          <span className="text-[7px] sm:text-[10px] leading-none text-blue-300">{keyData.en}</span>
          <span className="text-[7px] sm:text-[10px] leading-none text-red-300">{keyData.ru}</span>
          <span className="text-[7px] sm:text-[10px] leading-none text-yellow-300">{keyData.uk}</span>
        </>
      ) : (
        <span className="text-sm sm:text-lg uppercase">{keyData[language]}</span>
      )}
    </motion.button>
  );
}
