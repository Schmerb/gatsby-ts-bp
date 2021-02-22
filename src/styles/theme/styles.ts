/**
 * Styles
 *
 * Place any reusable styles here.
 * They must be encapsulated by css``
 *
 */
import { css } from "styled-components"

import { Gradient, gradient } from "./colors"

// Level1 boxShadow
const boxShadowLevel1 = css`
  box-shadow: 0 0px 6px rgb(0 0 0 / 12%), 0 0px 2px rgb(0 0 0 / 24%);
`

const boxShadowLevel2 = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const boxShadowLevel3 = css`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`
const boxShadowLevel4 = css`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`
const boxShadowLevel5 = css`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
const boxShadowLevel6 = css`
  -webkit-box-shadow: 2px 8px 66px -19px rgba(170, 170, 170, 1);
  -moz-box-shadow: 2px 8px 66px -19px rgba(170, 170, 170, 1);
  box-shadow: 2px 8px 66px -19px rgba(170, 170, 170, 1);
`

const showhideStyles = (isOpen: boolean, dur = 0.3) => css`
  max-height: 0px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: max-height ${dur}s, opacity ${dur}s,
    visibility ${dur}s ease ${dur}s;
  ${isOpen &&
  css`
    max-height: 999px;
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transition: max-height ${dur}s, opacity ${dur}s, visibility ${dur}s ease 0s;
  `}
`
// commonly used styles
export const styles = {
  Gradient,
  gradient,
  grow: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  middle: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  boxShadows: [
    boxShadowLevel1,
    boxShadowLevel2,
    boxShadowLevel3,
    boxShadowLevel4,
    boxShadowLevel5,
    boxShadowLevel6,
  ],
  borderRadius: "5px",
  inputActive: css`
    box-shadow: 0 0 0 2px #2684ff;
    border-color: #2684ff;
  `,
  ellipsisMask: css`
    display: inline-block;
    font-size: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  showhideStyles,
}

export default styles
