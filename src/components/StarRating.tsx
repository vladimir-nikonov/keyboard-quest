import { motion } from 'framer-motion';

interface StarRatingProps {
  stars: number; // 0-3
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
};

export function StarRating({ stars, size = 'md' }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${sizeMap[size]}`}>
      {[1, 2, 3].map((n) => (
        <motion.span
          key={n}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: n * 0.15, type: 'spring', bounce: 0.6 }}
        >
          {n <= stars ? '⭐' : '☆'}
        </motion.span>
      ))}
    </div>
  );
}
