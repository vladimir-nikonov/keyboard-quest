import { motion } from 'framer-motion';
import type { Language } from '@/types';

interface LanguageSelectorProps {
  current: Language;
  onChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'uk', label: 'UA', flag: '🇺🇦' },
];

export function LanguageSelector({ current, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-2">
      {languages.map(({ code, label, flag }) => (
        <motion.button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          whileTap={{ scale: 0.9 }}
          className={`
            flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold
            transition-colors
            ${current === code
              ? 'bg-primary text-white shadow-lg'
              : 'bg-bg-card text-white/60 hover:text-white'}
          `}
        >
          <span>{flag}</span>
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
}
