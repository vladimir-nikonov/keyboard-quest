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
