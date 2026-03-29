export interface KeyLayout {
  en: string;
  uk: string;
  pl: string;
  ru: string;
}

export interface KeyboardRow {
  keys: KeyLayout[];
  offset: number;
}

export const keyboardLayout: KeyboardRow[] = [
  {
    offset: 0,
    keys: [
      { en: 'q', uk: 'й', pl: 'q', ru: 'й' },
      { en: 'w', uk: 'ц', pl: 'w', ru: 'ц' },
      { en: 'e', uk: 'у', pl: 'e', ru: 'у' },
      { en: 'r', uk: 'к', pl: 'r', ru: 'к' },
      { en: 't', uk: 'е', pl: 't', ru: 'е' },
      { en: 'y', uk: 'н', pl: 'y', ru: 'н' },
      { en: 'u', uk: 'г', pl: 'u', ru: 'г' },
      { en: 'i', uk: 'ш', pl: 'i', ru: 'ш' },
      { en: 'o', uk: 'щ', pl: 'o', ru: 'щ' },
      { en: 'p', uk: 'з', pl: 'p', ru: 'з' },
      { en: '[', uk: 'х', pl: '[', ru: 'х' },
      { en: ']', uk: 'ї', pl: ']', ru: 'ъ' },
    ],
  },
  {
    offset: 0.5,
    keys: [
      { en: 'a', uk: 'ф', pl: 'a', ru: 'ф' },
      { en: 's', uk: 'і', pl: 's', ru: 'ы' },
      { en: 'd', uk: 'в', pl: 'd', ru: 'в' },
      { en: 'f', uk: 'а', pl: 'f', ru: 'а' },
      { en: 'g', uk: 'п', pl: 'g', ru: 'п' },
      { en: 'h', uk: 'р', pl: 'h', ru: 'р' },
      { en: 'j', uk: 'о', pl: 'j', ru: 'о' },
      { en: 'k', uk: 'л', pl: 'k', ru: 'л' },
      { en: 'l', uk: 'д', pl: 'l', ru: 'д' },
      { en: ';', uk: 'ж', pl: ';', ru: 'ж' },
      { en: "'", uk: 'є', pl: "'", ru: 'э' },
    ],
  },
  {
    offset: 1.25,
    keys: [
      { en: 'z', uk: 'я', pl: 'z', ru: 'я' },
      { en: 'x', uk: 'ч', pl: 'x', ru: 'ч' },
      { en: 'c', uk: 'с', pl: 'c', ru: 'с' },
      { en: 'v', uk: 'м', pl: 'v', ru: 'м' },
      { en: 'b', uk: 'и', pl: 'b', ru: 'и' },
      { en: 'n', uk: 'т', pl: 'n', ru: 'т' },
      { en: 'm', uk: 'ь', pl: 'm', ru: 'ь' },
      { en: ',', uk: 'б', pl: ',', ru: 'б' },
      { en: '.', uk: 'ю', pl: '.', ru: 'ю' },
    ],
  },
];

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

const enKeyToLayout: Record<string, KeyLayout> = {};
for (const row of keyboardLayout) {
  for (const key of row.keys) {
    enKeyToLayout[key.en] = key;
  }
}

export function codeToLetter(code: string, lang: 'en' | 'uk' | 'pl' | 'ru'): string | null {
  const enKey = codeToEnKey[code];
  if (!enKey) return null;
  const layout = enKeyToLayout[enKey];
  return layout ? layout[lang] : null;
}

export const polishHints: Record<string, string> = {
  'ш': 'sz', 'ч': 'cz', 'ж': 'ż', 'ц': 'c',
  'я': 'ja', 'ю': 'ju', 'ї': 'ji', 'є': 'je', 'щ': 'szcz',
};
