export interface PixelArtImage {
  id: string;
  name: string;
  theme: string;
  difficulty: number; // 1-3, higher = more blocks
  grid: (string | null)[][]; // rows of color hex or null for empty
}

// Theme: Flowers — difficulty 1 (simple)
const tulip: PixelArtImage = {
  id: 'tulip',
  name: 'Tulip',
  theme: 'flowers',
  difficulty: 1,
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
  id: 'daisy',
  name: 'Daisy',
  theme: 'flowers',
  difficulty: 1,
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

// Theme: Flowers — difficulty 2 (medium)
const rose: PixelArtImage = {
  id: 'rose',
  name: 'Rose',
  theme: 'flowers',
  difficulty: 2,
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
  id: 'sunflower',
  name: 'Sunflower',
  theme: 'flowers',
  difficulty: 2,
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

// Theme: Flowers — difficulty 3 (complex bouquet)
const bouquet: PixelArtImage = {
  id: 'bouquet',
  name: 'Bouquet',
  theme: 'flowers',
  difficulty: 3,
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
  id: 'orchid',
  name: 'Orchid',
  theme: 'flowers',
  difficulty: 3,
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

export const flowerImages: PixelArtImage[] = [
  tulip, daisy, rose, sunflower, bouquet, orchid,
];

export function getImageForLevel(levelId: number, totalStars: number): PixelArtImage {
  // Pick complexity based on stars
  let difficulty: number;
  if (totalStars >= 12) difficulty = 3;
  else if (totalStars >= 5) difficulty = 2;
  else difficulty = 1;

  const matching = flowerImages.filter((img) => img.difficulty === difficulty);
  // Use levelId to pick deterministically
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

/** Get blocks in order (top-left to bottom-right) */
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
