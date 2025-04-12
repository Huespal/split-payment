import Root from '@/components/Root';
import { Langs } from '@/core/i18n/types';
import { Theme, Themes } from '@/core/theme/types';
import { createRoot, Root as RootType } from 'react-dom/client';

let root: RootType | undefined;
let price: number | undefined;
let theme: Theme | undefined;
let lang: string | undefined;

const init = () => {
  const isDomLoading = document.readyState === 'loading';
  if (isDomLoading) {
    document.addEventListener('DOMContentLoaded', () => render());
  } else {
    render();
  }
}

const getContainer = () => {
  const containerId = 'split-payment';
  return containerId
    ? document.getElementById(containerId)
    : null;
}

const validatePrice = (price?: string) => {
  if (!price) {
    throw new Error('Missing price attribute');
  }

  const isNumber = !isNaN(Number(price));
  if (!isNumber) {
    throw new Error('Price attribute is not a number');
  }
  return Number(price);
}

const validateTheme = (theme?: string) => {
  if (!theme) {
    console.warn('Missing theme attribute. Using base theme.');
    return Themes.base;
  } else {
    const isValidTheme = Object.values(Themes).includes(theme as Theme);
    if (!isValidTheme) {
      console.warn('Invalid theme attribute. Using base theme.');
      return Themes.base;
    }
    return theme as Theme;
  }
}

const validateLang = (lang?: string) => {
  if (!lang) {
    console.warn('Missing language attribute. Using \'en\' language.');
    return Langs.en;
  }

  if (!Object.values(Langs).includes(lang as Langs)) {
    console.warn('Invalid language attribute. Using \'en\' language.');
    return Langs.en;
  }

  return lang as Langs;
}

const render = () => {
  try {
    const container = getContainer();

    if (container) {
      root = root || createRoot(container);
      price = price || validatePrice(container.dataset.price);
      theme = theme || validateTheme(container.dataset.theme);
      lang = lang || validateLang(container.dataset.lang);
      root.render(<Root price={price} theme={theme} lang={lang} />);
    } else {
      console.warn('Split Payment initialization failed. Container not found.');
    }
  } catch (error) {
    console.warn('Split Payment initialization failed. ', error);
  }
}

const updatePrice = (updatedPrice: number) => {
  price = validatePrice(updatedPrice.toString());
  render();
}

const updateTheme = (updatedTheme: Theme) => {
  theme = validateTheme(updatedTheme);
  render();
}

const updateLanguage = (updatedLang: Langs) => {
  lang = validateLang(updatedLang);
  render();
}

window.SplitPayment = { updatePrice, updateTheme, updateLanguage };

init();
