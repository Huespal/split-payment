import '@testing-library/jest-dom';
import { screen, render as tlrender } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { ComponentChildren } from 'preact';
import { describe, expect, test, vitest } from 'vitest';
import Provider from './src/widget/components/Provider';
import i18n from './src/widget/core/i18n';
import { Langs } from './src/widget/core/i18n/types';

const mocki18n = () => {
  i18n.init({
    lng: Langs.en,
    parseMissingKeyHandler: key => key,
    resources: { en: {} }
  });
};

const render = (children: ComponentChildren) => {
  mocki18n();
  return tlrender(<Provider>{children}</Provider>);
}

export {
  describe, expect, render, screen, test, userEvent, vitest
};

