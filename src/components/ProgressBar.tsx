import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-white/60 mb-1">
          <span>{label}</span>
          <span>{current}/{total}</span>
        </div>
      )}
      <div className="w-full h-3 bg-bg-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}
