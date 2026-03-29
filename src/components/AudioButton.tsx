import { motion } from 'framer-motion';
import type { Language } from '@/types';
import { speak } from '@/utils/tts';

interface AudioButtonProps {
  text: string;
  language: Language;
}

export function AudioButton({ text, language }: AudioButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={() => speak(text, language)}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary-light transition-colors"
    >
      <span className="text-2xl">🔊</span>
      Listen
    </motion.button>
  );
}
