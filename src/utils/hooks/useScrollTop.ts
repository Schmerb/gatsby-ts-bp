/**
 *
 * useScrollTop
 *
 *  */

import { useState, useEffect } from 'react';

// useScroll
export const useScrollTop = ({}: any) => {
  const [scrollTop, setScrollTop] = useState(0);

  let scrollTimeout: any;
  let scrollThrottler: any;

  const updateScrollTop = () => {
    const el: any =
      document.documentElement || document.body.parentNode || document.body;
    const currentScrollTop: number = window.pageYOffset || el.scrollTop;
    setScrollTop(currentScrollTop);
  };

  useEffect(() => {
    scrollThrottler = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null;
          // The updateScrollTop will execute at a rate of 15fps
          updateScrollTop();
        }, 66);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollThrottler);
    updateScrollTop();

    return () => {
      window.removeEventListener('scroll', scrollThrottler);
      clearInterval(scrollTimeout);
    };
  }, []);

  return scrollTop;
};

export default useScrollTop;
