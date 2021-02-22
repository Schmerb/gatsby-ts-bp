/**
 *
 * useWindowSize
 *
 *  */

import { useLayoutEffect, useState } from 'react';

import useEventListener from 'utils/hooks/useEventListener';

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const useThrottledWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  function updateSize() {
    setSize([window.innerWidth, window.innerHeight]);
  }
  useLayoutEffect(() => {
    updateSize();
  }, []);
  useEventListener('resize', updateSize);
  return size;
};

export default useWindowSize;
