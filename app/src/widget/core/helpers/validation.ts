import { Langs } from '@/core/i18n/types';
import { Theme, Themes } from '@/core/theme/types';

export const validatePrice = (price?: string) => {
  if (!price) {
    throw new Error('Missing price attribute');
  }

  const isNumber = !isNaN(Number(price));
  if (!isNumber) {
    throw new Error('Price attribute is not a number');
  }

  if (Number(price) < 0) {
    throw new Error('Price attribute should be positive');
  }

  return Number(price);
}

export const validateTheme = (theme?: string) => {
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

export const validateLang = (lang?: string) => {
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