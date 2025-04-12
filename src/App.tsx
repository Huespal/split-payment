import Root from '@/components/Root';
import { Theme, Themes } from '@/core/theme/types';
import { useState } from 'react';

const App = () => {
  // price is mocked for development purposes.
  const price = 39999;
  const [theme, setTheme] = useState<Theme>(Themes.base);
  const isDark = theme === Themes.dark;

  // The wrapper div and button are added for development purposes.
  // The div is just to center the widget in the screen.
  // The button's theme switch is just to switch the theme of the widget.
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <button onClick={() => setTheme(isDark ? Themes.base : Themes.dark)}>
        {isDark ? '☀︎' : '⏾'}
      </button>
      <Root price={price} theme={theme} />
    </div>
  );
}

export default App
