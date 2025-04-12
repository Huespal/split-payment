import Root from '@/components/Root';
import { Theme, Themes } from '@/core/theme/types';
import { createRoot, Root as RootType } from 'react-dom/client';

let root: RootType | undefined;
let price: number | undefined;
let theme: Theme | undefined;

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

const render = () => {
  try {
    const container = getContainer();

    if (container) {
      root = root || createRoot(container);
      theme = theme || validateTheme(container.dataset.theme);
      price = price || validatePrice(container.dataset.price);
      root.render(<Root theme={theme} price={price} />);
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

window.SplitPayment = { updatePrice, updateTheme };

init();
