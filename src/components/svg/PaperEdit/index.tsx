/**
 *
 *
 * PaperEdit
 *
 *
 */

import React, { memo } from 'react';

const PaperEdit = ({ width = '1em', height = '1em' }: PaperEditProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.8225 12.7944L13.3819 19.2375L10.2153 19.8709L10.8486 16.7042L17.2926 10.2611C17.6273 9.92575 18.0816 9.7373 18.5554 9.7373C19.0292 9.7373 19.4836 9.92575 19.8183 10.2611L19.8259 10.2678C20.5225 10.9665 20.521 12.0976 19.8225 12.7944Z"
        stroke="white"
        stroke-width="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.67855 17.3375H2.61188C1.91232 17.3375 1.34521 16.7704 1.34521 16.0708V2.13752C1.34521 1.43796 1.91232 0.87085 2.61188 0.87085H15.2785C15.9781 0.87085 16.5452 1.43796 16.5452 2.13752V7.83752"
        stroke="white"
        stroke-width="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.67856 4.67078H12.7452"
        stroke="white"
        stroke-width="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.1452 8.47083H12.7452"
        stroke="white"
        stroke-width="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.1452 12.2709H11.4785"
        stroke="white"
        stroke-width="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(PaperEdit);

export interface PaperEditProps {
  width?: string | number;
  height?: string | number;
}
