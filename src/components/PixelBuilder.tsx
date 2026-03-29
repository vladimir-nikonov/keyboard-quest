import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PixelArtImage } from '@/data/pixelArt';
import { getBlockOrder } from '@/data/pixelArt';

interface PixelBuilderProps {
  image: PixelArtImage;
  /** How many blocks are "built" (based on correct answers) */
  builtCount: number;
  /** How many blocks are "crumbling" (from timeout penalty) */
  crumbleCount: number;
}

export function PixelBuilder({ image, builtCount, crumbleCount }: PixelBuilderProps) {
  const blocks = useRef(getBlockOrder(image)).current;
  const visibleCount = Math.max(0, Math.min(builtCount - crumbleCount, blocks.length));
  const cols = image.grid[0].length;
  const rows = image.grid.length;
  const blockSize = Math.min(24, Math.floor(200 / Math.max(cols, rows)));

  // Track which blocks were recently added for animation
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    setPrevCount(visibleCount);
  }, [visibleCount]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative rounded-xl overflow-hidden bg-bg-light/50 p-2"
        style={{
          width: cols * blockSize + 16,
          height: rows * blockSize + 16,
        }}
      >
        {/* Ghost grid */}
        {image.grid.map((row, r) =>
          row.map((cell, c) =>
            cell ? (
              <div
                key={`ghost-${r}-${c}`}
                className="absolute rounded-[2px] bg-white/5"
                style={{
                  left: c * blockSize + 8,
                  top: r * blockSize + 8,
                  width: blockSize - 1,
                  height: blockSize - 1,
                }}
              />
            ) : null,
          ),
        )}

        {/* Built blocks */}
        <AnimatePresence>
          {blocks.slice(0, visibleCount).map(({ row, col, color }, i) => {
            const isNew = i >= prevCount;
            return (
              <motion.div
                key={`${row}-${col}`}
                initial={isNew ? { scale: 0, opacity: 0, y: -20 } : false}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  y: 30,
                  rotate: Math.random() * 60 - 30,
                  transition: { duration: 0.4 },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
                  delay: isNew ? 0.05 : 0,
                }}
                className="absolute rounded-[2px]"
                style={{
                  left: col * blockSize + 8,
                  top: row * blockSize + 8,
                  width: blockSize - 1,
                  height: blockSize - 1,
                  backgroundColor: color,
                  boxShadow: `inset -1px -1px 0 rgba(0,0,0,0.2), inset 1px 1px 0 rgba(255,255,255,0.2)`,
                }}
              />
            );
          })}
        </AnimatePresence>

        {/* Crumbling particles */}
        <AnimatePresence>
          {crumbleCount > 0 &&
            blocks
              .slice(Math.max(0, visibleCount), Math.max(0, visibleCount) + crumbleCount)
              .map(({ row, col, color }) => (
                <motion.div
                  key={`crumble-${row}-${col}`}
                  initial={{
                    left: col * blockSize + 8,
                    top: row * blockSize + 8,
                    opacity: 1,
                  }}
                  animate={{
                    y: [0, -10, 60],
                    x: [0, (Math.random() - 0.5) * 40],
                    opacity: [1, 0.8, 0],
                    rotate: Math.random() * 180 - 90,
                    scale: [1, 0.8, 0.3],
                  }}
                  transition={{ duration: 0.8, ease: 'easeIn' }}
                  className="absolute rounded-[2px]"
                  style={{
                    width: blockSize - 1,
                    height: blockSize - 1,
                    backgroundColor: color,
                  }}
                />
              ))}
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <div className="text-xs text-white/40">
        {visibleCount}/{blocks.length} blocks
      </div>
    </div>
  );
}
