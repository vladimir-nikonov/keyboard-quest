const audioCtx = () => new (window.AudioContext || (window as any).webkitAudioContext)();

let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) ctx = audioCtx();
  return ctx;
}

export function playSuccess(): void {
  try {
    const c = getCtx();
    const g = c.createGain();
    g.connect(c.destination);
    g.gain.setValueAtTime(0.3, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.5);

    // Play a pleasant ascending chord: C5 -> E5 -> G5
    [523, 659, 784].forEach((freq, i) => {
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, c.currentTime + i * 0.1);
      o.connect(g);
      o.start(c.currentTime + i * 0.1);
      o.stop(c.currentTime + 0.5);
    });
  } catch {
    // Audio not available
  }
}

export function playError(): void {
  try {
    const c = getCtx();
    const g = c.createGain();
    g.connect(c.destination);
    g.gain.setValueAtTime(0.2, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.3);

    const o = c.createOscillator();
    o.type = 'square';
    o.frequency.setValueAtTime(200, c.currentTime);
    o.frequency.linearRampToValueAtTime(150, c.currentTime + 0.3);
    o.connect(g);
    o.start(c.currentTime);
    o.stop(c.currentTime + 0.3);
  } catch {
    // Audio not available
  }
}

export function playLevelComplete(): void {
  try {
    const c = getCtx();
    const g = c.createGain();
    g.connect(c.destination);
    g.gain.setValueAtTime(0.3, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 1.2);

    // Triumphant fanfare: C5 E5 G5 C6
    [523, 659, 784, 1047].forEach((freq, i) => {
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, c.currentTime + i * 0.15);
      o.connect(g);
      o.start(c.currentTime + i * 0.15);
      o.stop(c.currentTime + 1.2);
    });
  } catch {
    // Audio not available
  }
}
