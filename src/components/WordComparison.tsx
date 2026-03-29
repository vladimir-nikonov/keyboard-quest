import { motion } from 'framer-motion';
import type { ResultComparison } from '@/types';

interface WordComparisonProps {
  result: ResultComparison;
}

const statusColors: Record<string, string> = {
  correct: 'text-success',
  wrong: 'text-error',
  missing: 'text-error/50',
  extra: 'text-orange-400',
};

const statusBg: Record<string, string> = {
  correct: 'bg-success/20',
  wrong: 'bg-error/20',
  missing: 'bg-error/10',
  extra: 'bg-orange-400/20',
};

export function WordComparison({ result }: WordComparisonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4"
    >
      {result.isCorrect ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="text-4xl font-bold text-success"
        >
          ✨ Great! ✨
        </motion.div>
      ) : (
        <div className="text-xl text-white/80">Try again!</div>
      )}

      <div className="flex gap-1 text-3xl font-mono">
        {result.letterResults.map((lr, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`${statusColors[lr.status]} ${statusBg[lr.status]} px-1.5 py-0.5 rounded`}
          >
            {lr.status === 'missing' ? '·' : (lr.actual ?? '')}
          </motion.span>
        ))}
      </div>

      {!result.isCorrect && (
        <div className="text-lg text-white/50">
          Correct: <span className="text-success font-bold">{result.expected}</span>
        </div>
      )}

      <div className="text-sm text-white/40">
        Accuracy: {result.accuracy}%
      </div>
    </motion.div>
  );
}
