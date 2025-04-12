import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  box-sizing: border-box;
  font-weight: normal;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
html {
  height: 100%;
}
body {
  position: relative;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.neutral[900]};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}
ul {
  list-style: none;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  color: inherit;
}
a:link,
a:hover,
a:active,
a:visited {
  text-decoration: none;
}
input,
select,
textarea,
button {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.default};
  outline: none;
  color: ${({ theme }) => theme.colors.neutral[900]};
}
input,
select {
  vertical-align: middle;
}
:root {
  --container: 92vw;
}
`;

export default GlobalStyle;
