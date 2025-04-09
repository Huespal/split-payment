import { screen, render as tlrender } from '@testing-library/react';
import { ReactElement } from 'react';
import { describe, expect, test } from 'vitest';

const render = (children: ReactElement) => tlrender(children);

export { describe, expect, render, screen, test };
