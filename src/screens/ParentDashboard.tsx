import { useGame } from '@/context/GameContext';
import { levels, getStarsForLanguage } from '@/data/levels';
import { languageFlags } from '@/utils/layout';
import type { Language } from '@/types';

export function ParentDashboard() {
  const { activeProfile, language, setScreen } = useGame();

  if (!activeProfile) return null;

  return (
    <div className="flex flex-col items-center min-h-screen py-4 sm:py-8 px-4 gap-6">
      <div className="flex items-center justify-between w-full max-w-lg">
        <button
          type="button"
          onClick={() => setScreen('world-map')}
          className="px-4 py-2 rounded-full bg-bg-card text-white/60 hover:text-white text-sm"
        >
          ← Map
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Parent Dashboard</h2>
        <div className="w-16" />
      </div>

      <div className="w-full max-w-lg bg-bg-light rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{activeProfile.avatar}</span>
          <div>
            <div className="font-bold text-lg">{activeProfile.name}</div>
            <div className="text-white/50 text-sm">Age: {activeProfile.age}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-bg-card p-3 rounded-xl">
            <div className="text-2xl font-bold text-accent">{activeProfile.totalStars}</div>
            <div className="text-xs text-white/50">Stars</div>
          </div>
          <div className="bg-bg-card p-3 rounded-xl">
            <div className="text-2xl font-bold text-primary-light">
              {activeProfile.progress.filter((p) => p.completed).length}
            </div>
            <div className="text-xs text-white/50">Levels</div>
          </div>
          <div className="bg-bg-card p-3 rounded-xl">
            <div className="text-2xl font-bold text-success">
              {activeProfile.achievements.length}
            </div>
            <div className="text-xs text-white/50">Badges</div>
          </div>
        </div>

        <h3 className="font-bold text-white mt-4">Stars by Language</h3>
        <div className="flex gap-3 flex-wrap">
          {(['en', 'uk', 'pl', 'ru'] as Language[]).map((lang) => (
            <div key={lang} className="bg-bg-card px-3 py-2 rounded-xl text-center">
              <div className="text-lg">{languageFlags[lang]}</div>
              <div className="text-sm font-bold">{getStarsForLanguage(activeProfile.progress, lang)}⭐</div>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-white mt-4">Level Progress</h3>
        <div className="space-y-2">
          {levels.map((level) => {
            const progress = activeProfile.progress.find((p) => p.levelId === level.id);
            return (
              <div key={level.id} className="flex justify-between items-center p-2 rounded-lg bg-bg-card">
                <span className="text-sm">{level.title[language] ?? level.title.en}</span>
                <span className="text-sm text-white/50">
                  {progress
                    ? `${progress.stars}⭐ · ${progress.bestAccuracy}% · ${progress.attempts} tries`
                    : '—'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
