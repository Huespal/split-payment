import baseTheme from '@/core/theme/base';

const theme = {
  ...baseTheme,
  name: 'Dark',

  colors: {
    ...baseTheme.colors,
    theme: baseTheme.colors.semantic.warning,
    neutral: {
      100: '#05070A',
      200: '#2A303D',
      300: '#717784',
      500: '#C6CAD2',
      700: '#E8EAED',
      800: '#F7F7F8',
      900: '#FFFFFF',
      alpha: {
        100: 'rgba(14, 18, 27, 0.32)',
        200: 'rgba(47, 56, 76, 0.16)',
        500: 'rgba(47, 56, 76, 0.08)'
      }
    }
  }

} as const;

export default theme;
