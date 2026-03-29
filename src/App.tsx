import { GameProvider, useGame } from '@/context/GameContext';
import { StartScreen } from '@/screens/StartScreen';
import { ProfileSelect } from '@/screens/ProfileSelect';
import { WorldMap } from '@/screens/WorldMap';
import { LevelScreen } from '@/screens/LevelScreen';
import { RewardsScreen } from '@/screens/RewardsScreen';
import { ParentDashboard } from '@/screens/ParentDashboard';

function Router() {
  const { screen } = useGame();

  switch (screen) {
    case 'start':
      return <StartScreen />;
    case 'profile-select':
      return <ProfileSelect />;
    case 'world-map':
      return <WorldMap />;
    case 'level':
      return <LevelScreen />;
    case 'rewards':
      return <RewardsScreen />;
    case 'parent-dashboard':
      return <ParentDashboard />;
    default:
      return <StartScreen />;
  }
}

export default function App() {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
}
