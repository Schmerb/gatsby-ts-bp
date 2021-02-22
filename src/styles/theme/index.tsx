/**
 *
 * Theme object
 *
 *
 */

/**
 * Colors
 *
 * List color constants here
 *
 * export const Offwhite = '#fdfdfd
 *
 */
import colors from "./colors"

/**
 * Styles
 *
 * Place any reusable styles here.
 * They must be encapsulated by css``
 *
 */
import styles from "./styles"

/**
 * Breakpoints
 *
 */
import { breakpoints, min, max, MAX_WIDTH } from "./breakpoints"

/**
 * Theme types
 *
 */
import { ThemeProps } from "./types"

const theme: ThemeProps = {
  colors,
  styles,
  breakpoints,
  media: {
    min,
    max,
    MAX_WIDTH,
  },
}

export default theme
