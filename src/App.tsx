import Root from '@/components/Root';
import i18n from '@/core/i18n';
import { Langs } from '@/core/i18n/types';
import { Theme, Themes } from '@/core/theme/types';
import { useEffect, useState } from 'preact/hooks';

const App = () => {
  const [price, setPrice] = useState(39999);
  const [theme, setTheme] = useState<Theme>(Themes.base);
  const [lang, setLang] = useState<Langs>(Langs.en);
  const isDark = theme === Themes.dark;

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  // Some raw content have been added for development purposes.
  // A main wrapper div to center the widget in the screen.
  // A price input and label to defined the initial price of the widget.
  // A button's theme switch to switch the theme of the widget.
  // A language selector to switch the language of the widget.
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
          Initial price:
          <input
            style={{
              backgroundColor: 'transparent',
              marginLeft: '0.5rem'
            }}
            id="price"
            placeholder="39999"
            value={price}
            type="number"
            onChange={e => {
              setPrice(Number((e.target as HTMLSelectElement).value))
            }} />
        </label>
        <select
          style={{
            backgroundColor: 'transparent',
          }}
          onChange={e => {
            setLang((e.target as HTMLSelectElement).value as Langs)
          }}
        >
          {Object.values(Langs).map(lang => (
            <option value={lang}>{lang}</option>
          ))}
        </select>
        <button onClick={() => setTheme(isDark ? Themes.base : Themes.dark)}>
          {isDark ? '☀︎' : '⏾'}
        </button>
      </div>
      <Root price={price} theme={theme} />
    </div>
  );
}

export default App
