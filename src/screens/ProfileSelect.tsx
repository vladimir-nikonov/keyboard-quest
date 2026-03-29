import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';

const avatars = ['🦊', '🐱', '🐶', '🐼', '🦄', '🐸', '🐯', '🦁', '🐰', '🐨'];

export function ProfileSelect() {
  const { profiles, selectProfile, addProfile, setScreen } = useGame();
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [avatar, setAvatar] = useState(avatars[0]);

  const handleCreate = () => {
    if (name.trim() && age) {
      addProfile(name.trim(), Number(age), avatar);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setScreen('start')}
          className="px-4 py-2 rounded-full bg-bg-card text-white/60 hover:text-white text-sm"
        >
          ← Back
        </button>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Who's playing?
        </motion.h2>
      </div>

      {/* Existing profiles */}
      <div className="flex flex-wrap justify-center gap-4">
        {profiles.map((profile) => (
          <motion.button
            key={profile.id}
            type="button"
            onClick={() => selectProfile(profile.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-bg-card hover:bg-bg-card/80 transition-colors"
          >
            <span className="text-5xl">{profile.avatar}</span>
            <span className="text-lg font-bold">{profile.name}</span>
            <span className="text-sm text-white/50">⭐ {profile.totalStars}</span>
          </motion.button>
        ))}
      </div>

      {!creating ? (
        <motion.button
          type="button"
          onClick={() => setCreating(true)}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-accent text-white font-bold text-lg"
        >
          + New Player
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-bg-light"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {avatars.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAvatar(a)}
                className={`text-4xl p-2 rounded-xl transition-colors ${avatar === a ? 'bg-primary/30 ring-2 ring-primary' : ''}`}
              >
                {a}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            className="w-64 px-4 py-3 rounded-xl bg-bg-card text-white text-center text-lg outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min={4}
            max={18}
            className="w-32 px-4 py-3 rounded-xl bg-bg-card text-white text-center text-lg outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setCreating(false)}
              className="px-6 py-2 rounded-full bg-bg-card text-white/60"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreate}
              disabled={!name.trim() || !age}
              className="px-6 py-2 rounded-full bg-primary text-white font-bold disabled:opacity-40"
            >
              Let's Go!
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
