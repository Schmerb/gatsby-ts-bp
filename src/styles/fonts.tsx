/**
 *
 *
 *  FontStyles
 *
 *
 */

import { css } from 'styled-components';

// @ts-ignore
import Mont from 'fonts/Montserrat/Montserrat-Regular.ttf';

export const FontStyles = css`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('${Mont}');
  }
`;

export default FontStyles;
