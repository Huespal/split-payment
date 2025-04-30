import { apolloClient } from '@/core/helpers/apolloClient';
import baseTheme from '@/core/theme/base';
import darkTheme from '@/core/theme/dark';
import GlobalStyle from '@/core/theme/GlobalStyle';
import { Themes } from '@/core/theme/types';
import { ApolloProvider } from '@apollo/client';
import { ReactNode, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface ProviderProps {
  themeName?: Themes;
  children: ReactNode;
}

export default function Provider({
  themeName = Themes.base, children
}: ProviderProps) {

  const theme = useMemo(() => {
    if (themeName === Themes.dark) {
      return darkTheme;
    }
    return baseTheme;
  }, [themeName]);

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        {children}
      </ApolloProvider>
    </ThemeProvider>
  )
}
