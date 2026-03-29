import { useEffect, useState } from 'react';

export function useKeyPress(onKey?: (key: string) => void) {
  const [lastKey, setLastKey] = useState<string | null>(null);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.repeat) return;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      setLastKey(key);
      onKey?.(key);
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onKey]);

  return lastKey;
}
