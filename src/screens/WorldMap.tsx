import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { getLevelsForLanguage, getStarsForLanguage } from '@/data/levels';
import { LanguageSelector } from '@/components/LanguageSelector';
import { StarRating } from '@/components/StarRating';
import { languageFlags } from '@/utils/layout';

export function WorldMap() {
  const { activeProfile, language, setLanguage, setScreen, setActiveLevelId } = useGame();

  if (!activeProfile) return null;

  const totalStars = activeProfile.totalStars;
  const langStars = getStarsForLanguage(activeProfile.progress, language);
  const visibleLevels = getLevelsForLanguage(language);

  const handleLevelClick = (levelId: number, requiredStars: number) => {
    // For language-specific levels, use langStars; for mixed, use totalStars
    const level = visibleLevels.find((l) => l.id === levelId);
    const starsToCheck = level?.language === 'mixed' ? totalStars : langStars;
    if (starsToCheck >= requiredStars) {
      setActiveLevelId(levelId);
      setScreen('level');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-4 sm:py-8 px-3 sm:px-4 gap-4 sm:gap-6">
      {/* Header */}
      <div className="flex flex-col gap-3 w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{activeProfile.avatar}</span>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-lg">{activeProfile.name}</div>
              <div className="text-white/50 text-xs sm:text-sm">⭐ {totalStars} total</div>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" onClick={() => setScreen('rewards')}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-xs sm:text-sm">
              🏆
            </button>
            <button type="button" onClick={() => setScreen('parent-dashboard')}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-bg-card text-white/50 text-xs sm:text-sm">
              👨‍👩‍👧
            </button>
            <button type="button" onClick={() => setScreen('profile-select')}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-bg-card text-white/50 text-xs sm:text-sm">
              👤
            </button>
            <button type="button" onClick={() => setScreen('start')}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-bg-card text-white/50 text-xs sm:text-sm">
              🚪
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {languageFlags[language]} World Map
            </h2>
            <div className="text-white/40 text-xs">⭐ {langStars} in this language</div>
          </div>
          <LanguageSelector current={language} onChange={setLanguage} />
        </div>
      </div>

      {/* Levels */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        {visibleLevels.map((level, idx) => {
          const starsToCheck = level.language === 'mixed' ? totalStars : langStars;
          const unlocked = starsToCheck >= level.requiredStars;
          const progress = activeProfile.progress.find((p) => p.levelId === level.id);
          const stars = progress?.stars ?? 0;
          const levelNum = idx + 1;

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
                      {unlocked ? levelNum : '🔒'}
                    </span>
                    <span className="font-bold text-white">
                      {level.title[language] ?? level.title.en}
                    </span>
                    {level.language === 'mixed' && (
                      <span className="text-xs bg-primary/30 text-primary-light px-2 py-0.5 rounded-full">MIX</span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 mt-1">
                    {level.description[language] ?? level.description.en}
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
    </div>
  );
}
