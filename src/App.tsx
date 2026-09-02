import Dashboard from './materi/1-useEffect';
import { FocusInput } from './materi/2-useRef';
import ListRendering from './materi/3-useMemo';
import { WithoutUseCallback, WithUseCallback } from './materi/4-useCallback';
import LiftingState from './materi/5-Lifting-State';

function App() {
  return (
    <div style={{ height: '500dvh' }}>
      <h1>Materi 10 - Hooks Lanjutan</h1>

      <h2>1. useEffect</h2>
      <Dashboard />

      <h2>2. useRef</h2>
      <FocusInput />

      <h2>3. useMemo</h2>
      <ListRendering />

      <h2>4. useCallback</h2>
      <WithoutUseCallback />
      <WithUseCallback />

      <h2>5. Lifting State</h2>
      <LiftingState />
    </div>
  );
}

export default App;
