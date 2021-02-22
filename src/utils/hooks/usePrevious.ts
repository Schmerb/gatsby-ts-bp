/**
 *
 * usePrevious
 *
 *  */

import { useEffect, useRef } from 'react';

export const usePrevious = (value: any) => {
  // mutable, used like a class property
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

/**
 * ExampleUsage:
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 *
 */
export default usePrevious;
