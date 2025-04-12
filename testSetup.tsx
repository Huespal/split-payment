import '@testing-library/jest-dom';
import { screen, render as tlrender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { describe, expect, test, vitest } from 'vitest';
import Provider from './src/widget/components/Provider';

const render = (children: ReactElement) => tlrender(
  <Provider>{children}</Provider>
);

export { describe, expect, render, screen, test, userEvent, vitest };

