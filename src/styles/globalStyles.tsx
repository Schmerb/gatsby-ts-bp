/**
 *
 *
 *  GlobalStyles
 *
 *
 */

import { createGlobalStyle } from 'styled-components';

import { FontStyles } from './fonts';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-y: hidden !important;
  }
  ${FontStyles}
`;

export default GlobalStyles;
