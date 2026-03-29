import type { UserProfile } from '@/types';

const PROFILES_KEY = 'keyboard-quest-profiles';

export function loadProfiles(): UserProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveProfiles(profiles: UserProfile[]): void {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

export function createProfile(name: string, age: number, avatar: string): UserProfile {
  return {
    id: crypto.randomUUID(),
    name,
    age,
    avatar,
    progress: [],
    totalStars: 0,
    achievements: [],
    createdAt: Date.now(),
  };
}
