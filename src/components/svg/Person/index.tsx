/**
 *
 *
 * Person
 *
 *
 */

import React, { memo } from 'react';

const Person = ({ width = '1em', height = '1em' }: PersonProps) => {
  return (
    <svg
      width="21"
      height="25"
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7359 12.9485C13.833 12.9485 16.3438 10.4378 16.3438 7.3406C16.3438 4.24343 13.833 1.73267 10.7359 1.73267C7.63869 1.73267 5.12793 4.24343 5.12793 7.3406C5.12793 10.4378 7.63869 12.9485 10.7359 12.9485Z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2061 23.7326C18.5337 21.9622 17.3095 20.4328 15.6994 19.3522C14.0894 18.2715 12.1715 17.6919 10.2061 17.6919C8.2406 17.6919 6.32272 18.2715 4.71268 19.3522C3.10264 20.4328 1.87839 21.9622 1.20605 23.7326"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(Person);

export interface PersonProps {
  width?: string | number;
  height?: string | number;
}
