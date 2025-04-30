export enum Themes {
  base = 'base',
  dark = 'dark'
}

export type Theme = typeof Themes[keyof typeof Themes];
