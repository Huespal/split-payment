import Root from '@/components/Root';
import { Theme, Themes } from '@/core/theme/types';
import { createRoot } from 'react-dom/client';

const init = () => {
  const isDomLoading = document.readyState === 'loading';
  if (isDomLoading) {
    document.addEventListener('DOMContentLoaded', appendContent);
  } else {
    appendContent();
  }
}

const checkPrice = (price?: string) => {
  if (!price) {
    throw new Error('Missing data-price attribute');
  }

  const isNumber = !isNaN(Number(price));
  if (!isNumber) {
    throw new Error('data-price attribute is not a number');
  }
}

const checkTheme = (theme?: string) => {
  if (!theme) {
    console.warn('Missing data-theme attribute. Using base theme.');
    return Themes.base;
  } else {
    const isValidTheme = Object.values(Themes).includes(theme as Theme);
    if (!isValidTheme) {
      console.warn('Invalid data-theme attribute. Using base theme.');
      return Themes.base;
    }
    return theme as Theme;
  }
}

const appendContent = () => {
  try {
    const containerId = 'split-payment';
    const container = containerId
      ? document.getElementById(containerId)
      : null;

    if (container) {
      const theme = checkTheme(container.dataset.theme);
      const price = container.dataset.price;
      checkPrice(price);
      createRoot(container)
        .render(<Root theme={theme} price={Number(price)} />);
    } else {
      console.warn('Split Payment initialization failed. Container not found.');
    }
  } catch (error) {
    console.warn('Split Payment initialization failed. ', error);
  }
}

init();