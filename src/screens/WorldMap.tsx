import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { levels } from '@/data/levels';
import { LanguageSelector } from '@/components/LanguageSelector';
import { StarRating } from '@/components/StarRating';

export function WorldMap() {
  const { activeProfile, language, setLanguage, setScreen, setActiveLevelId } = useGame();

  if (!activeProfile) return null;

  const totalStars = activeProfile.totalStars;

  const handleLevelClick = (levelId: number, requiredStars: number) => {
    if (totalStars >= requiredStars) {
      setActiveLevelId(levelId);
      setScreen('level');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-4 sm:py-8 px-3 sm:px-4 gap-4 sm:gap-6">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{activeProfile.avatar}</span>
          <div className="text-left">
            <div className="font-bold text-lg">{activeProfile.name}</div>
            <div className="text-white/50 text-sm">⭐ {totalStars} stars</div>
          </div>
        </div>
        <LanguageSelector current={language} onChange={setLanguage} />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-white">World Map</h2>

      {/* Levels */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        {levels.map((level, idx) => {
          const unlocked = totalStars >= level.requiredStars;
          const progress = activeProfile.progress.find((p) => p.levelId === level.id);
          const stars = progress?.stars ?? 0;

          return (
            <motion.button
              key={level.id}
              type="button"
              onClick={() => handleLevelClick(level.id, level.requiredStars)}
              disabled={!unlocked}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={unlocked ? { scale: 1.03 } : {}}
              whileTap={unlocked ? { scale: 0.97 } : {}}
              className={`
                w-full p-5 rounded-2xl text-left transition-all
                ${unlocked
                  ? 'bg-bg-card hover:bg-bg-card/80 cursor-pointer'
                  : 'bg-bg-light/50 opacity-40 cursor-not-allowed'}
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white/80">
                      {unlocked ? level.id : '🔒'}
                    </span>
                    <span className="font-bold text-white">
                      {level.title[language]}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 mt-1">
                    {level.description[language]}
                  </p>
                </div>
                {progress && <StarRating stars={stars} size="sm" />}
              </div>
              {!unlocked && (
                <div className="text-xs text-white/30 mt-2">
                  Need {level.requiredStars} ⭐ to unlock
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Footer nav */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
        <button
          type="button"
          onClick={() => setScreen('rewards')}
          className="px-6 py-2 rounded-full bg-accent/20 text-accent font-bold"
        >
          🏆 Rewards
        </button>
        <button
          type="button"
          onClick={() => setScreen('parent-dashboard')}
          className="px-6 py-2 rounded-full bg-bg-card text-white/50"
        >
          👨‍👩‍👧 Parents
        </button>
        <button
          type="button"
          onClick={() => setScreen('profile-select')}
          className="px-6 py-2 rounded-full bg-bg-card text-white/50"
        >
          👤 Switch
        </button>
        <button
          type="button"
          onClick={() => setScreen('start')}
          className="px-6 py-2 rounded-full bg-bg-card text-white/50"
        >
          🚪 Exit
        </button>
      </div>
    </div>
  );
}
