/**
 *
 *
 *  GlobalStyles
 *
 *
 */

import { createGlobalStyle } from 'styled-components';

import colors from 'styles/theme/colors';

import { FontStyles } from './fonts';
import { ResetStyles } from './reset';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }
  body {
    background-color: ${colors.OffWhite};
  }

  ${FontStyles}
  ${ResetStyles}
`;

export default GlobalStyles;
