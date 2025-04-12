/// <reference types="vite/client" />

import { BaseTheme } from '@/core/theme/base';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme { }
}