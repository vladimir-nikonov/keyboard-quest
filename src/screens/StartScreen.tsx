import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';

export function StartScreen() {
  const { setScreen } = useGame();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.4 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-primary-light via-accent to-accent-light bg-clip-text text-transparent">
          Keyboard Quest
        </h1>
        <p className="text-xl text-white/60 mt-4">Learn to type — in 3 languages!</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', bounce: 0.5 }}
        className="text-8xl"
      >
        ⌨️
      </motion.div>

      <motion.button
        type="button"
        onClick={() => setScreen('profile-select')}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-2xl font-bold shadow-xl hover:shadow-primary/50 transition-shadow"
      >
        Start Game!
      </motion.button>
    </div>
  );
}
