/**
 *
 *
 * Arrow
 *
 *
 */

import React, { memo } from 'react';

const Arrow = ({ width = '11', height = '9', style = {} }: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.27686 8.38983L0.513719 0.139833L10.04 0.139833L5.27686 8.38983Z"
        fill="#111836"
      />
    </svg>
  );
};

export default memo(Arrow);

export interface ArrowProps {
  width?: string | number;
  height?: string | number;
  style?: any;
}
