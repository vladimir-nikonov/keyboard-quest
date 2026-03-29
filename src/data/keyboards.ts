export interface KeyLayout {
  en: string;
  ru: string;
  uk: string;
}

export interface KeyboardRow {
  keys: KeyLayout[];
  offset: number; // CSS left offset in rem for stagger
}

export const keyboardLayout: KeyboardRow[] = [
  {
    offset: 0,
    keys: [
      { en: 'q', ru: 'й', uk: 'й' },
      { en: 'w', ru: 'ц', uk: 'ц' },
      { en: 'e', ru: 'у', uk: 'у' },
      { en: 'r', ru: 'к', uk: 'к' },
      { en: 't', ru: 'е', uk: 'е' },
      { en: 'y', ru: 'н', uk: 'н' },
      { en: 'u', ru: 'г', uk: 'г' },
      { en: 'i', ru: 'ш', uk: 'ш' },
      { en: 'o', ru: 'щ', uk: 'щ' },
      { en: 'p', ru: 'з', uk: 'з' },
      { en: '[', ru: 'х', uk: 'х' },
      { en: ']', ru: 'ъ', uk: 'ї' },
    ],
  },
  {
    offset: 0.5,
    keys: [
      { en: 'a', ru: 'ф', uk: 'ф' },
      { en: 's', ru: 'ы', uk: 'і' },
      { en: 'd', ru: 'в', uk: 'в' },
      { en: 'f', ru: 'а', uk: 'а' },
      { en: 'g', ru: 'п', uk: 'п' },
      { en: 'h', ru: 'р', uk: 'р' },
      { en: 'j', ru: 'о', uk: 'о' },
      { en: 'k', ru: 'л', uk: 'л' },
      { en: 'l', ru: 'д', uk: 'д' },
      { en: ';', ru: 'ж', uk: 'ж' },
      { en: "'", ru: 'э', uk: 'є' },
    ],
  },
  {
    offset: 1.25,
    keys: [
      { en: 'z', ru: 'я', uk: 'я' },
      { en: 'x', ru: 'ч', uk: 'ч' },
      { en: 'c', ru: 'с', uk: 'с' },
      { en: 'v', ru: 'м', uk: 'м' },
      { en: 'b', ru: 'и', uk: 'и' },
      { en: 'n', ru: 'т', uk: 'т' },
      { en: 'm', ru: 'ь', uk: 'ь' },
      { en: ',', ru: 'б', uk: 'б' },
      { en: '.', ru: 'ю', uk: 'ю' },
    ],
  },
];

// Finger assignment by English key position
// 👆 = index, 🖕 = middle, 💍 = ring, 🤙 = pinky
export type Finger = 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky';

export const fingerMap: Record<string, Finger> = {
  q: 'left-pinky', a: 'left-pinky', z: 'left-pinky',
  w: 'left-ring',  s: 'left-ring',  x: 'left-ring',
  e: 'left-middle', d: 'left-middle', c: 'left-middle',
  r: 'left-index', f: 'left-index', v: 'left-index',
  t: 'left-index', g: 'left-index', b: 'left-index',
  y: 'right-index', h: 'right-index', n: 'right-index',
  u: 'right-index', j: 'right-index', m: 'right-index',
  i: 'right-middle', k: 'right-middle', ',': 'right-middle',
  o: 'right-ring', l: 'right-ring', '.': 'right-ring',
  p: 'right-pinky', ';': 'right-pinky',
  '[': 'right-pinky', ']': 'right-pinky',
  "'": 'right-pinky',
};

export const fingerLabels: Record<Finger, string> = {
  'left-pinky': '🤙 Left pinky',
  'left-ring': '💍 Left ring',
  'left-middle': '🖕 Left middle',
  'left-index': '👆 Left index',
  'right-index': '👆 Right index',
  'right-middle': '🖕 Right middle',
  'right-ring': '💍 Right ring',
  'right-pinky': '🤙 Right pinky',
};

export const fingerColors: Record<Finger, string> = {
  'left-pinky': 'bg-rose-500/70',
  'left-ring': 'bg-orange-500/70',
  'left-middle': 'bg-yellow-500/70',
  'left-index': 'bg-green-500/70',
  'right-index': 'bg-cyan-500/70',
  'right-middle': 'bg-blue-500/70',
  'right-ring': 'bg-violet-500/70',
  'right-pinky': 'bg-pink-500/70',
};

// Map physical key code (e.g. 'KeyA') to key position in layout
const codeToEnKey: Record<string, string> = {
  KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't',
  KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p',
  BracketLeft: '[', BracketRight: ']',
  KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g',
  KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l',
  Semicolon: ';', Quote: "'",
  KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b',
  KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.',
};

// Build a lookup: enKey -> { en, ru, uk }
const enKeyToLayout: Record<string, KeyLayout> = {};
for (const row of keyboardLayout) {
  for (const key of row.keys) {
    enKeyToLayout[key.en] = key;
  }
}

/** Given a physical keyboard event code, return the letter for the given language */
export function codeToLetter(code: string, lang: 'en' | 'ru' | 'uk'): string | null {
  const enKey = codeToEnKey[code];
  if (!enKey) return null;
  const layout = enKeyToLayout[enKey];
  return layout ? layout[lang] : null;
}

export const polishHints: Record<string, string> = {
  'ш': 'sz',
  'ч': 'cz',
  'ж': 'ż',
  'ц': 'c',
  'я': 'ja',
  'ю': 'ju',
  'ї': 'ji',
  'є': 'je',
  'щ': 'szcz',
};
