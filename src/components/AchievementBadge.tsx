import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import type { Language } from '@/types';

interface AchievementBadgeProps {
  achievementId: string;
  language: Language;
  unlocked?: boolean;
}

export function AchievementBadge({ achievementId, language, unlocked = false }: AchievementBadgeProps) {
  const achievement = achievements.find((a) => a.id === achievementId);
  if (!achievement) return null;

  return (
    <motion.div
      initial={unlocked ? { scale: 0, rotate: -180 } : {}}
      animate={unlocked ? { scale: 1, rotate: 0 } : {}}
      transition={{ type: 'spring', bounce: 0.5 }}
      className={`
        flex flex-col items-center gap-2 p-4 rounded-xl
        ${unlocked ? 'bg-accent/20 border border-accent/40' : 'bg-bg-card/50 opacity-40'}
      `}
    >
      <span className="text-4xl">{achievement.icon}</span>
      <span className="text-sm font-bold text-white">
        {achievement.title[language] ?? achievement.title.en}
      </span>
      <span className="text-xs text-white/50 text-center">
        {achievement.description[language] ?? achievement.description.en}
      </span>
    </motion.div>
  );
}
