import Root from '@/components/Root';
import { Theme, Themes } from '@/core/theme/types';
import { useState } from 'react';

const App = () => {
  const [price, setPrice] = useState(39999);
  const [theme, setTheme] = useState<Theme>(Themes.base);
  const isDark = theme === Themes.dark;

  // Some raw content have been added for development purposes.
  // A main wrapper div to center the widget in the screen.
  // A price input and label to defined the initial price of the widget.
  // A button's theme switch to switch the theme of the widget.
  return (
    <div
      id="split-payment"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        gap: '1rem'
      }}>
        <label htmlFor="price">
          Price input:   
          <input
            style={{
              backgroundColor: 'transparent',
              marginLeft: '0.5rem'
            }}
            id="price"
            placeholder="39999"
            value={price}
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))} />
        </label>
        <button onClick={() => setTheme(isDark ? Themes.base : Themes.dark)}>
          {isDark ? '☀︎' : '⏾'}
        </button>
      </div>
      <Root price={price} theme={theme} />
    </div>
  );
}

export default App
