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
  onClick?: () => void;
}

export function Keycap({
  keyData,
  language,
  showAll = false,
  highlighted = false,
  pressed = false,
  correct = null,
  onClick,
}: KeycapProps) {
  const bgColor = correct === true
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
      whileTap={{ scale: 0.9 }}
      animate={pressed ? { scale: [1, 0.9, 1] } : {}}
      transition={{ duration: 0.15 }}
      className={`
        ${bgColor}
        relative flex flex-col items-center justify-center
        w-12 h-12 sm:w-14 sm:h-14
        rounded-lg border-b-[3px] border-black/30
        text-white font-bold cursor-pointer
        hover:brightness-110 transition-colors
        shadow-md
      `}
    >
      {showAll ? (
        <>
          <span className="text-[10px] leading-none text-blue-300">{keyData.en}</span>
          <span className="text-[10px] leading-none text-red-300">{keyData.ru}</span>
          <span className="text-[10px] leading-none text-yellow-300">{keyData.uk}</span>
        </>
      ) : (
        <span className="text-lg uppercase">{keyData[language]}</span>
      )}
    </motion.button>
  );
}
