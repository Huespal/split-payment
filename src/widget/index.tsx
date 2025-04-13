import Root from '@/components/Root';
import {
  validateLang, validatePrice, validateTheme
} from '@/core/helpers/validation';
import { Langs } from '@/core/i18n/types';
import { Theme } from '@/core/theme/types';
import { createRoot, Root as RootType } from 'react-dom/client';

const containerId = 'split-payment';

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

const render = () => {
  try {
    const container = containerId
      ? document.getElementById(containerId)
      : null;

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
