import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  position: relative;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.neutral[900]};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
}
button {
  cursor: pointer;
  background: transparent;
  font-size: 100%;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
input,
select,
button {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.neutral[900]};
}
input,
fieldset,
button {
  outline: none;
  border: 0;
}
margin: ${({ theme }) => theme.space.xs} 0;
h1 {
  font-size: ${({ theme }) => theme.fontSizes.l};
}
h1,
h4 {
  font-weight: ${({ theme }) => theme.fontWeights.bold};
}
h4,
p {
  margin: 0;
}
input,
select {
  vertical-align: middle;
}
`;

export default GlobalStyle;
