/**
 *
 * Theme Colors
 *
 *  */
import { css } from 'styled-components';

import { hex2rgb } from 'utils/helpers/colors';

export const Primary = '#111836';
export const Secondary = '#D7E1DD';

export const OffWhite = '#FAF8F8';

export const Purple = '#2442C5';
export const DarkPurple = '#1C2858';
export const Blue = '#709BF0';

export const Grey = '#EAEAEA';

// export const Grey = {
//   extraLight: '#5c5c5c',
//   light: '#474747',
//   regular: '#2e2e2e',
//   medium: '#272727',
//   dark: '#212121',
//   extraDark: '#121212',
// };

export const PrimaryRed = '#FF6961';
export const SuccessGreen = '#c8ff97';

export const Gradient = (
  angle = 'to right',
  colorA = Primary,
  colorB = Secondary,
) => css`
  background: ${colorA}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    ${angle},
    ${colorA},
    ${colorB}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    ${angle},
    ${colorA},
    ${colorB}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// default footer gradient
export const gradient = Gradient('to right');

export const colors = {
  // values get cached in hex2rgb
  alphaMod: (val: string, opacity: any) => hex2rgb(val, opacity),
  Primary,
  Secondary,
  OffWhite,
  Purple,
  DarkPurple,
  Blue,
  PrimaryRed,
  Grey,
  // --------------
  Loader: Primary, // for hash spinner
  // --------------
  // brand colors
  Facebook: '#4469b0',
  Twitter: '#38A1F3',
  // button: {
  //   Primary,
  //   Text: '#fff',
  //   Hover: hex2rgb(Primary, 0.75),
  //   SecondaryHover: hex2rgb(Secondary, 0.75),
  //   Active: '#555',
  // },
  // system: {
  //   ERROR_DARK: '#d8000c',
  //   ERROR: '#ffbaba',
  //   SUCCESS: '#d5edda',
  //   WARNING: '#fff3cd',
  //   GENERAL: '#cae6fe',
  // },
};

export default colors;
