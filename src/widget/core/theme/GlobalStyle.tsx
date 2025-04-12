import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
#split-payment {
  position: relative;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.neutral[900]};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
}
#split-payment button {
  cursor: pointer;
  background: transparent;
  font-size: 100%;
}
#split-payment button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
#split-payment input,
#split-payment select,
#split-payment button {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.neutral[900]};
}
#split-payment input,
#split-payment fieldset,
#split-payment button {
  outline: none;
  border: 0;
}
#split-payment h1 {
  margin: ${({ theme }) => theme.space.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.l};
}
#split-payment h1,
#split-payment h4 {
  font-weight: ${({ theme }) => theme.fontWeights.bold};
}
#split-payment h4,
#split-payment p {
  margin: 0;
}
#split-payment input,
#split-payment select {
  vertical-align: middle;
}
`;

export default GlobalStyle;
