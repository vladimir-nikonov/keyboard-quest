import type { UserProfile, LevelProgress } from '@/types';

export function calcStars(accuracy: number): number {
  if (accuracy >= 90) return 3;
  if (accuracy >= 70) return 2;
  if (accuracy >= 40) return 1;
  return 1; // always at least 1 star for completing
}

export function saveLevelProgress(
  profile: UserProfile,
  levelId: number,
  accuracy: number,
  wpm: number = 0,
): UserProfile {
  const stars = calcStars(accuracy);
  const existing = profile.progress.find((p) => p.levelId === levelId);

  let updatedProgress: LevelProgress[];

  if (existing) {
    updatedProgress = profile.progress.map((p) =>
      p.levelId === levelId
        ? {
            ...p,
            completed: true,
            stars: Math.max(p.stars, stars),
            bestAccuracy: Math.max(p.bestAccuracy, accuracy),
            bestWpm: Math.max(p.bestWpm, wpm),
            attempts: p.attempts + 1,
          }
        : p,
    );
  } else {
    updatedProgress = [
      ...profile.progress,
      {
        levelId,
        completed: true,
        stars,
        bestAccuracy: accuracy,
        bestWpm: wpm,
        attempts: 1,
      },
    ];
  }

  const totalStars = updatedProgress.reduce((sum, p) => sum + p.stars, 0);

  return {
    ...profile,
    progress: updatedProgress,
    totalStars,
  };
}
