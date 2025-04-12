/// <reference types="vite/client" />

import { BaseTheme } from '@/core/theme/base';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme { }
}

declare global {
  interface Window {
    SplitPayment: {
      updatePrice: (price: number) => void
      updateTheme: (theme: Theme) => void
    }
  }
}