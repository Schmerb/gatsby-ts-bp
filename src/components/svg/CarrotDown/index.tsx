/**
 *
 *
 * CarrotDown
 *
 *
 */

import React, { memo } from 'react';

export const CarrotDown = ({
  width = '10',
  height = '7',
  stroke = '#111836',
  style = {},
}: CarrotProps) => {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50938 1.42483L4.75469 5.33862L1 1.42483"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CarrotUp = (props: CarrotProps) => (
  <CarrotDown
    {...props}
    style={{ ...(props.style || {}), transform: 'rotate(180deg)' }}
  />
);

export default memo(CarrotDown);

export interface CarrotProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  style?: any;
}
