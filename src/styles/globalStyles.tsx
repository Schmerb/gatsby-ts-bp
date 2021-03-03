/**
 *
 *
 *  GlobalStyles
 *
 *
 */

import { createGlobalStyle } from 'styled-components';

import { FontStyles } from './fonts';
import { ResetStyles } from './reset';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-size: 16px;
  }
  ${FontStyles}
  ${ResetStyles}
`;

export default GlobalStyles;
