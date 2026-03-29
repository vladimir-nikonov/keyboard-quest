export interface PixelArtImage {
  id: string;
  name: string;
  theme: string;
  difficulty: number;
  grid: (string | null)[][];
}

export type ArtTheme = 'flowers' | 'knights' | 'ninja';

export const themeInfo: Record<ArtTheme, { label: string; icon: string }> = {
  flowers: { label: 'Flowers', icon: '🌸' },
  knights: { label: 'Knights', icon: '⚔️' },
  ninja:   { label: 'Ninja',   icon: '🥷' },
};

// ============ FLOWERS ============

const tulip: PixelArtImage = {
  id: 'tulip', name: 'Tulip', theme: 'flowers', difficulty: 1,
  grid: [
    [null, null, '#e74c3c', '#e74c3c', null, null],
    [null, '#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c', null],
    [null, '#e74c3c', '#c0392b', '#c0392b', '#e74c3c', null],
    [null, null, '#27ae60', '#27ae60', null, null],
    [null, null, '#27ae60', '#27ae60', null, null],
    [null, '#2ecc71', '#27ae60', '#27ae60', '#2ecc71', null],
    [null, null, '#27ae60', '#27ae60', null, null],
    [null, null, '#27ae60', '#27ae60', null, null],
  ],
};

const daisy: PixelArtImage = {
  id: 'daisy', name: 'Daisy', theme: 'flowers', difficulty: 1,
  grid: [
    [null, null, '#fff', null, null],
    [null, '#fff', '#f1c40f', '#fff', null],
    ['#fff', '#f1c40f', '#f39c12', '#f1c40f', '#fff'],
    [null, '#fff', '#f1c40f', '#fff', null],
    [null, null, '#fff', null, null],
    [null, null, '#27ae60', null, null],
    [null, '#2ecc71', '#27ae60', null, null],
    [null, null, '#27ae60', null, null],
  ],
};

const rose: PixelArtImage = {
  id: 'rose', name: 'Rose', theme: 'flowers', difficulty: 2,
  grid: [
    [null, null, null, '#e74c3c', '#e74c3c', null, null, null],
    [null, null, '#e74c3c', '#c0392b', '#c0392b', '#e74c3c', null, null],
    [null, '#e74c3c', '#c0392b', '#e74c3c', '#e74c3c', '#c0392b', '#e74c3c', null],
    [null, '#e74c3c', '#e74c3c', '#c0392b', '#c0392b', '#e74c3c', '#e74c3c', null],
    ['#e74c3c', '#c0392b', '#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c', '#c0392b', '#e74c3c'],
    [null, '#e74c3c', '#e74c3c', '#c0392b', '#c0392b', '#e74c3c', '#e74c3c', null],
    [null, null, null, '#27ae60', '#27ae60', null, null, null],
    [null, null, '#2ecc71', '#27ae60', '#27ae60', '#2ecc71', null, null],
    [null, '#2ecc71', null, '#27ae60', '#27ae60', null, '#2ecc71', null],
    [null, null, null, '#27ae60', '#27ae60', null, null, null],
  ],
};

const sunflower: PixelArtImage = {
  id: 'sunflower', name: 'Sunflower', theme: 'flowers', difficulty: 2,
  grid: [
    [null, null, '#f1c40f', '#f1c40f', '#f1c40f', null, null],
    [null, '#f1c40f', '#f39c12', '#8B4513', '#f39c12', '#f1c40f', null],
    ['#f1c40f', '#f39c12', '#8B4513', '#654321', '#8B4513', '#f39c12', '#f1c40f'],
    ['#f1c40f', '#8B4513', '#654321', '#8B4513', '#654321', '#8B4513', '#f1c40f'],
    ['#f1c40f', '#f39c12', '#8B4513', '#654321', '#8B4513', '#f39c12', '#f1c40f'],
    [null, '#f1c40f', '#f39c12', '#8B4513', '#f39c12', '#f1c40f', null],
    [null, null, '#f1c40f', '#f1c40f', '#f1c40f', null, null],
    [null, null, null, '#27ae60', null, null, null],
    [null, null, '#2ecc71', '#27ae60', null, null, null],
    [null, null, null, '#27ae60', '#2ecc71', null, null],
    [null, null, null, '#27ae60', null, null, null],
  ],
};

const bouquet: PixelArtImage = {
  id: 'bouquet', name: 'Bouquet', theme: 'flowers', difficulty: 3,
  grid: [
    [null, '#e74c3c', '#e74c3c', null, null, '#9b59b6', '#9b59b6', null, null, '#f1c40f'],
    ['#e74c3c', '#c0392b', '#e74c3c', null, '#9b59b6', '#8e44ad', '#9b59b6', null, '#f1c40f', '#f39c12'],
    ['#e74c3c', '#e74c3c', '#c0392b', null, '#9b59b6', '#9b59b6', '#8e44ad', null, '#f39c12', '#f1c40f'],
    [null, '#e74c3c', null, '#e67e22', null, '#9b59b6', null, '#3498db', null, '#f1c40f'],
    [null, null, '#e67e22', '#d35400', '#e67e22', null, '#3498db', '#2980b9', '#3498db', null],
    [null, '#e67e22', '#d35400', '#e67e22', null, '#3498db', '#2980b9', '#3498db', null, null],
    [null, null, '#27ae60', '#2ecc71', '#27ae60', '#27ae60', '#2ecc71', '#27ae60', null, null],
    [null, null, null, '#27ae60', '#2ecc71', '#2ecc71', '#27ae60', null, null, null],
    [null, null, null, null, '#27ae60', '#27ae60', null, null, null, null],
    [null, null, '#f5b7b1', '#f5b7b1', '#27ae60', '#27ae60', '#f5b7b1', '#f5b7b1', null, null],
    [null, null, null, '#f5b7b1', '#f5b7b1', '#f5b7b1', '#f5b7b1', null, null, null],
  ],
};

const orchid: PixelArtImage = {
  id: 'orchid', name: 'Orchid', theme: 'flowers', difficulty: 3,
  grid: [
    [null, null, '#af7ac5', null, null, null, '#af7ac5', null, null],
    [null, '#af7ac5', '#9b59b6', '#af7ac5', null, '#af7ac5', '#9b59b6', '#af7ac5', null],
    ['#af7ac5', '#9b59b6', '#8e44ad', '#9b59b6', '#fff', '#9b59b6', '#8e44ad', '#9b59b6', '#af7ac5'],
    [null, '#af7ac5', '#9b59b6', '#f1c40f', '#fff', '#f1c40f', '#9b59b6', '#af7ac5', null],
    [null, null, '#af7ac5', '#9b59b6', '#fff', '#9b59b6', '#af7ac5', null, null],
    [null, null, null, null, '#27ae60', null, null, null, null],
    [null, null, null, '#2ecc71', '#27ae60', null, null, null, null],
    [null, null, '#2ecc71', null, '#27ae60', '#2ecc71', null, null, null],
    [null, null, null, null, '#27ae60', null, null, null, null],
  ],
};

// ============ KNIGHTS ============

const sword: PixelArtImage = {
  id: 'sword', name: 'Sword', theme: 'knights', difficulty: 1,
  grid: [
    [null, null, null, null, null, '#bdc3c7'],
    [null, null, null, null, '#bdc3c7', '#95a5a6'],
    [null, null, null, '#bdc3c7', '#95a5a6', null],
    [null, null, '#bdc3c7', '#95a5a6', null, null],
    [null, '#bdc3c7', '#95a5a6', null, null, null],
    ['#8B4513', '#f1c40f', '#95a5a6', null, null, null],
    [null, '#8B4513', '#f1c40f', null, null, null],
    [null, null, '#654321', null, null, null],
  ],
};

const shield: PixelArtImage = {
  id: 'shield', name: 'Shield', theme: 'knights', difficulty: 1,
  grid: [
    [null, '#3498db', '#3498db', '#3498db', '#3498db', '#3498db', null],
    ['#3498db', '#2980b9', '#f1c40f', '#f1c40f', '#f1c40f', '#2980b9', '#3498db'],
    ['#3498db', '#f1c40f', '#e74c3c', '#e74c3c', '#e74c3c', '#f1c40f', '#3498db'],
    ['#3498db', '#f1c40f', '#e74c3c', '#c0392b', '#e74c3c', '#f1c40f', '#3498db'],
    ['#3498db', '#f1c40f', '#e74c3c', '#e74c3c', '#e74c3c', '#f1c40f', '#3498db'],
    [null, '#3498db', '#2980b9', '#f1c40f', '#2980b9', '#3498db', null],
    [null, null, '#3498db', '#2980b9', '#3498db', null, null],
    [null, null, null, '#3498db', null, null, null],
  ],
};

const knight: PixelArtImage = {
  id: 'knight', name: 'Knight', theme: 'knights', difficulty: 2,
  grid: [
    [null, null, '#bdc3c7', '#bdc3c7', '#bdc3c7', null, null],
    [null, '#bdc3c7', '#95a5a6', '#95a5a6', '#95a5a6', '#bdc3c7', null],
    [null, '#bdc3c7', '#3498db', '#bdc3c7', '#3498db', '#bdc3c7', null],
    [null, null, '#bdc3c7', '#bdc3c7', '#bdc3c7', null, null],
    [null, '#e74c3c', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#e74c3c', null],
    ['#bdc3c7', '#e74c3c', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#e74c3c', '#bdc3c7'],
    [null, null, '#bdc3c7', '#bdc3c7', '#bdc3c7', null, null],
    [null, null, '#bdc3c7', null, '#bdc3c7', null, null],
    [null, null, '#8B4513', null, '#8B4513', null, null],
  ],
};

const castle: PixelArtImage = {
  id: 'castle', name: 'Castle', theme: 'knights', difficulty: 2,
  grid: [
    ['#95a5a6', null, null, '#95a5a6', null, null, '#95a5a6'],
    ['#bdc3c7', null, null, '#bdc3c7', null, null, '#bdc3c7'],
    ['#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7'],
    ['#bdc3c7', '#95a5a6', '#bdc3c7', '#95a5a6', '#bdc3c7', '#95a5a6', '#bdc3c7'],
    ['#bdc3c7', '#95a5a6', '#bdc3c7', '#95a5a6', '#bdc3c7', '#95a5a6', '#bdc3c7'],
    ['#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#bdc3c7'],
    ['#bdc3c7', '#bdc3c7', null, '#8B4513', null, '#bdc3c7', '#bdc3c7'],
    ['#bdc3c7', '#bdc3c7', null, '#8B4513', null, '#bdc3c7', '#bdc3c7'],
  ],
};

const dragon: PixelArtImage = {
  id: 'dragon', name: 'Dragon', theme: 'knights', difficulty: 3,
  grid: [
    [null, null, '#27ae60', null, null, null, null, '#27ae60', null],
    [null, '#27ae60', '#2ecc71', '#27ae60', null, '#27ae60', '#2ecc71', '#27ae60', null],
    ['#27ae60', '#e74c3c', '#2ecc71', '#2ecc71', '#27ae60', '#2ecc71', '#2ecc71', '#e74c3c', '#27ae60'],
    [null, '#27ae60', '#2ecc71', '#2ecc71', '#2ecc71', '#2ecc71', '#2ecc71', '#27ae60', null],
    [null, null, '#27ae60', '#f1c40f', '#2ecc71', '#f1c40f', '#27ae60', null, null],
    [null, null, null, '#27ae60', '#27ae60', '#27ae60', null, null, null],
    [null, '#27ae60', '#2ecc71', '#2ecc71', '#2ecc71', '#2ecc71', '#2ecc71', '#27ae60', null],
    ['#27ae60', null, '#27ae60', '#2ecc71', '#2ecc71', '#2ecc71', '#27ae60', null, '#27ae60'],
    [null, null, null, '#27ae60', null, '#27ae60', null, null, null],
  ],
};

const knightBoss: PixelArtImage = {
  id: 'knight-boss', name: 'King', theme: 'knights', difficulty: 3,
  grid: [
    [null, null, '#f1c40f', '#f39c12', '#f1c40f', null, null],
    [null, '#f1c40f', '#e74c3c', '#f1c40f', '#e74c3c', '#f1c40f', null],
    [null, null, '#f1c40f', '#f1c40f', '#f1c40f', null, null],
    [null, '#bdc3c7', '#95a5a6', '#95a5a6', '#95a5a6', '#bdc3c7', null],
    [null, '#bdc3c7', '#3498db', '#bdc3c7', '#3498db', '#bdc3c7', null],
    [null, null, '#bdc3c7', '#bdc3c7', '#bdc3c7', null, null],
    ['#bdc3c7', '#9b59b6', '#bdc3c7', '#bdc3c7', '#bdc3c7', '#9b59b6', '#bdc3c7'],
    [null, null, '#9b59b6', '#bdc3c7', '#9b59b6', null, null],
    [null, null, '#bdc3c7', null, '#bdc3c7', null, null],
    [null, null, '#f1c40f', null, '#f1c40f', null, null],
  ],
};

// ============ NINJA ============

const shuriken: PixelArtImage = {
  id: 'shuriken', name: 'Shuriken', theme: 'ninja', difficulty: 1,
  grid: [
    [null, null, '#95a5a6', null, null],
    [null, '#95a5a6', '#bdc3c7', '#95a5a6', null],
    ['#95a5a6', '#bdc3c7', '#2c3e50', '#bdc3c7', '#95a5a6'],
    [null, '#95a5a6', '#bdc3c7', '#95a5a6', null],
    [null, null, '#95a5a6', null, null],
  ],
};

const katana: PixelArtImage = {
  id: 'katana', name: 'Katana', theme: 'ninja', difficulty: 1,
  grid: [
    [null, null, null, null, null, null, '#bdc3c7'],
    [null, null, null, null, null, '#bdc3c7', '#95a5a6'],
    [null, null, null, null, '#bdc3c7', '#95a5a6', null],
    [null, null, null, '#bdc3c7', '#95a5a6', null, null],
    [null, null, '#bdc3c7', '#95a5a6', null, null, null],
    [null, '#e74c3c', '#f1c40f', null, null, null, null],
    ['#e74c3c', '#8B4513', null, null, null, null, null],
  ],
};

const ninjaFigure: PixelArtImage = {
  id: 'ninja', name: 'Ninja', theme: 'ninja', difficulty: 2,
  grid: [
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    [null, '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', null],
    [null, '#2c3e50', '#fff', '#2c3e50', '#fff', '#2c3e50', null],
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    [null, '#e74c3c', '#2c3e50', '#2c3e50', '#2c3e50', '#e74c3c', null],
    ['#2c3e50', null, '#2c3e50', '#2c3e50', '#2c3e50', null, '#2c3e50'],
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    [null, null, '#2c3e50', null, '#2c3e50', null, null],
    [null, null, '#2c3e50', null, '#2c3e50', null, null],
  ],
};

const temple: PixelArtImage = {
  id: 'temple', name: 'Temple', theme: 'ninja', difficulty: 2,
  grid: [
    [null, null, null, '#e74c3c', null, null, null],
    [null, null, '#e74c3c', '#c0392b', '#e74c3c', null, null],
    [null, '#e74c3c', '#c0392b', '#c0392b', '#c0392b', '#e74c3c', null],
    ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513'],
    [null, '#8B4513', null, '#654321', null, '#8B4513', null],
    [null, '#8B4513', null, '#654321', null, '#8B4513', null],
    [null, '#8B4513', null, '#654321', null, '#8B4513', null],
    ['#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513', '#8B4513'],
  ],
};

const ninjaBoss: PixelArtImage = {
  id: 'ninja-boss', name: 'Shadow Master', theme: 'ninja', difficulty: 3,
  grid: [
    [null, '#9b59b6', null, null, null, null, null, '#9b59b6', null],
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    [null, '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', null],
    [null, '#2c3e50', '#9b59b6', '#2c3e50', '#2c3e50', '#2c3e50', '#9b59b6', '#2c3e50', null],
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    ['#bdc3c7', '#9b59b6', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#9b59b6', '#bdc3c7'],
    [null, null, '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', null, null],
    [null, null, null, '#2c3e50', '#2c3e50', '#2c3e50', null, null, null],
    [null, null, '#2c3e50', null, null, null, '#2c3e50', null, null],
  ],
};

const ninjaScroll: PixelArtImage = {
  id: 'ninja-scroll', name: 'Scroll', theme: 'ninja', difficulty: 3,
  grid: [
    [null, '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', null],
    ['#d4ac0d', '#fdebd0', '#2c3e50', '#2c3e50', '#fdebd0', '#2c3e50', '#fdebd0', '#d4ac0d'],
    ['#d4ac0d', '#fdebd0', '#fdebd0', '#2c3e50', '#2c3e50', '#fdebd0', '#fdebd0', '#d4ac0d'],
    ['#d4ac0d', '#fdebd0', '#2c3e50', '#fdebd0', '#fdebd0', '#2c3e50', '#fdebd0', '#d4ac0d'],
    ['#d4ac0d', '#fdebd0', '#fdebd0', '#2c3e50', '#2c3e50', '#fdebd0', '#fdebd0', '#d4ac0d'],
    ['#d4ac0d', '#fdebd0', '#2c3e50', '#fdebd0', '#fdebd0', '#fdebd0', '#fdebd0', '#d4ac0d'],
    [null, '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', '#f5cba7', null],
  ],
};

// ============ EXPORTS ============

const allImages: Record<ArtTheme, PixelArtImage[]> = {
  flowers: [tulip, daisy, rose, sunflower, bouquet, orchid],
  knights: [sword, shield, knight, castle, dragon, knightBoss],
  ninja:   [shuriken, katana, ninjaFigure, temple, ninjaBoss, ninjaScroll],
};

export function getImageForLevel(levelId: number, totalStars: number, theme: ArtTheme = 'flowers'): PixelArtImage {
  let difficulty: number;
  if (totalStars >= 12) difficulty = 3;
  else if (totalStars >= 5) difficulty = 2;
  else difficulty = 1;

  const images = allImages[theme] ?? allImages.flowers;
  const matching = images.filter((img) => img.difficulty === difficulty);
  return matching[(levelId - 1) % matching.length];
}

export function getTotalBlocks(image: PixelArtImage): number {
  let count = 0;
  for (const row of image.grid) {
    for (const cell of row) {
      if (cell !== null) count++;
    }
  }
  return count;
}

export function getBlockOrder(image: PixelArtImage): { row: number; col: number; color: string }[] {
  const blocks: { row: number; col: number; color: string }[] = [];
  for (let r = 0; r < image.grid.length; r++) {
    for (let c = 0; c < image.grid[r].length; c++) {
      const color = image.grid[r][c];
      if (color) blocks.push({ row: r, col: c, color });
    }
  }
  return blocks;
}
