import ca from '@/core/i18n/locales/ca/translation.json';
import en from '@/core/i18n/locales/en/translation.json';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18nConfig: InitOptions = {
  returnNull: false,
  load: 'currentOnly',
  fallbackLng: 'en',
  parseMissingKeyHandler: () => '',
  missingInterpolationHandler: () => '',
  initImmediate: false,
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    ca: { translation: ca }
  }
};

i18n.use(initReactI18next);

export default i18n;