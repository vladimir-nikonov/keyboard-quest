import type { UserProfile } from '@/types';

const PROFILES_KEY = 'keyboard-quest-profiles';
const ACTIVE_PROFILE_KEY = 'keyboard-quest-active-profile';

export function loadProfiles(): UserProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // corrupted data
  }
  return [];
}

export function saveProfiles(profiles: UserProfile[]): void {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch {
    // storage full or unavailable
  }
}

export function loadActiveProfileId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_PROFILE_KEY);
  } catch {
    return null;
  }
}

export function saveActiveProfileId(id: string | null): void {
  try {
    if (id) {
      localStorage.setItem(ACTIVE_PROFILE_KEY, id);
    } else {
      localStorage.removeItem(ACTIVE_PROFILE_KEY);
    }
  } catch {
    // storage unavailable
  }
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
