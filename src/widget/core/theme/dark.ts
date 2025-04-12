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
        100: 'rgba(198, 204, 218, 0.69)',
        200: 'rgba(176, 188, 213, 0.61)',
        500: 'rgba(162, 177, 210, 0.37)'
      }
    }
  }

} as const;

export default theme;
