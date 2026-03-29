import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { AchievementBadge } from '@/components/AchievementBadge';
import { achievements } from '@/data/achievements';

export function RewardsScreen() {
  const { activeProfile, language, setScreen } = useGame();

  if (!activeProfile) return null;

  return (
    <div className="flex flex-col items-center min-h-screen py-4 sm:py-8 px-4 gap-6">
      <div className="flex items-center justify-between w-full max-w-2xl">
        <button
          type="button"
          onClick={() => setScreen('world-map')}
          className="px-4 py-2 rounded-full bg-bg-card text-white/60 hover:text-white text-sm"
        >
          ← Map
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">🏆 Achievements</h2>
        <div className="text-sm text-accent font-bold">⭐ {activeProfile.totalStars}</div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl"
      >
        {achievements.map((a) => (
          <AchievementBadge
            key={a.id}
            achievementId={a.id}
            language={language}
            unlocked={activeProfile.achievements.includes(a.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}
