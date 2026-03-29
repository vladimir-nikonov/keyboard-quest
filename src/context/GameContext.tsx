import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language, UserProfile, Screen } from '@/types';
import { loadProfiles, saveProfiles, createProfile } from '@/utils/storage';

interface GameContextType {
  // Navigation
  screen: Screen;
  setScreen: (screen: Screen) => void;
  activeLevelId: number | null;
  setActiveLevelId: (id: number | null) => void;

  // Language
  language: Language;
  setLanguage: (lang: Language) => void;

  // Profiles
  profiles: UserProfile[];
  activeProfile: UserProfile | null;
  selectProfile: (id: string) => void;
  addProfile: (name: string, age: number, avatar: string) => void;
  updateProfile: (profile: UserProfile) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>('start');
  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [profiles, setProfiles] = useState<UserProfile[]>(() => loadProfiles());
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);

  const activeProfile = profiles.find((p) => p.id === activeProfileId) ?? null;

  const selectProfile = useCallback((id: string) => {
    setActiveProfileId(id);
    setScreen('world-map');
  }, []);

  const addProfile = useCallback((name: string, age: number, avatar: string) => {
    const profile = createProfile(name, age, avatar);
    setProfiles((prev) => {
      const next = [...prev, profile];
      saveProfiles(next);
      return next;
    });
    setActiveProfileId(profile.id);
    setScreen('world-map');
  }, []);

  const updateProfile = useCallback((updated: UserProfile) => {
    setProfiles((prev) => {
      const next = prev.map((p) => (p.id === updated.id ? updated : p));
      saveProfiles(next);
      return next;
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        activeLevelId,
        setActiveLevelId,
        language,
        setLanguage,
        profiles,
        activeProfile,
        selectProfile,
        addProfile,
        updateProfile,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextType {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
