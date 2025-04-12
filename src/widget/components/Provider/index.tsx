import { getQueryClient } from '@/core/helpers/queryClient';
import baseTheme from '@/core/theme/base';
import darkTheme from '@/core/theme/dark';
import GlobalStyle from '@/core/theme/GlobalStyle';
import { Themes } from '@/core/theme/types';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface ProviderProps {
  themeName?: Themes;
  children: ReactNode;
}

export default function Provider({
  themeName = Themes.base, children
}: ProviderProps) {
  const queryClient = getQueryClient();

  const theme = useMemo(() => {
    if (themeName === 'dark') {
      return darkTheme;
    }
    return baseTheme;
  }, [themeName]);

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
