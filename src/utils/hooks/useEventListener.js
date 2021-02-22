/**
 *
 * useEventListener
 *
 */
import { useEffect, useRef } from 'react';

/**
 * useEventListener
 */
export const useEventListener = (
  eventName,
  handler,
  throttle = 66,
  useWindow = true, // window | document
) => {
  const savedHandler = useRef();
  const resizeTimeout = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = useWindow ? window : document;
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    // Create event listener that calls handler function stored in ref
    const eventListener = event => {
      if (!resizeTimeout.current) {
        resizeTimeout.current = setTimeout(() => {
          resizeTimeout.current = null;
          // The setDimensions will execute at a rate of 15fps@66ms
          savedHandler.current(event);
        }, throttle);
      }
    };

    // Add event listener
    element.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    // eslint-disable-next-line
    return () => {
      element.removeEventListener(eventName, eventListener);
      clearTimeout(resizeTimeout.current);
    };
  }, [eventName]);
};

export default useEventListener;
