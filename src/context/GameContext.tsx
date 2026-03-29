import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { Language, UserProfile, Screen } from '@/types';
import { loadProfiles, saveProfiles, createProfile, loadActiveProfileId, saveActiveProfileId } from '@/utils/storage';

interface GameContextType {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  activeLevelId: number | null;
  setActiveLevelId: (id: number | null) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  profiles: UserProfile[];
  activeProfile: UserProfile | null;
  selectProfile: (id: string) => void;
  addProfile: (name: string, age: number, avatar: string) => void;
  updateProfile: (profile: UserProfile) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>(() => {
    // If we have a saved profile, skip start screen
    const savedId = loadActiveProfileId();
    const profiles = loadProfiles();
    if (savedId && profiles.some((p) => p.id === savedId)) {
      return 'world-map';
    }
    return 'start';
  });
  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [profiles, setProfiles] = useState<UserProfile[]>(() => loadProfiles());
  const [activeProfileId, setActiveProfileId] = useState<string | null>(() => {
    const savedId = loadActiveProfileId();
    const profiles = loadProfiles();
    // Only restore if profile still exists
    return savedId && profiles.some((p) => p.id === savedId) ? savedId : null;
  });

  const activeProfile = profiles.find((p) => p.id === activeProfileId) ?? null;

  // Save profiles to localStorage on every change as backup
  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);

  // Save active profile ID when it changes
  useEffect(() => {
    saveActiveProfileId(activeProfileId);
  }, [activeProfileId]);

  // Save on page close/hide
  useEffect(() => {
    function handleBeforeUnload() {
      saveProfiles(profiles);
      saveActiveProfileId(activeProfileId);
    }
    function handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        saveProfiles(profiles);
        saveActiveProfileId(activeProfileId);
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [profiles, activeProfileId]);

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
    saveActiveProfileId(profile.id);
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
