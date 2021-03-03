/**
 *
 *
 *    SideMenu
 *
 *
 */

import React, { useLayoutEffect, memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'components/Header/styles';

import { useThrottledWindowSize } from 'utils/hooks/useWindowSize';

import { breakpoints } from 'styles/theme/breakpoints';

const SideMenu = ({ isOpen, right = false, children }: SideMenuProps) => {
  // issue with mobile browsers, bottom nav pops up and covers screen content
  // so we need to listen for resize event and set explicit height
  // of side menu so that browser nav does not obfuscate our nev menu
  const [width, height] = useThrottledWindowSize();

  const isMobileView = width <= breakpoints.tablet;

  const springProps: any = {
    top: isMobileView ? MOBILE_HEADER_HEIGHT : HEADER_HEIGHT,
    transform: `translate3d(${isOpen ? '5%' : `${right ? '' : '-'}105%`},0,0)`,
  };
  const bgSpringProps: any = {
    opacity: isOpen ? 1 : 0,
  };
  if (right) {
    springProps.right = 0;
  } else {
    springProps.left = 0;
  }
  const props = useSpring(springProps);
  const bgProps = useSpring(bgSpringProps);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <AnimatedDiv style={bgProps} />
      <AnimatedContainer style={props} className="SIDE-MENU" height={height}>
        {children}
      </AnimatedContainer>
    </>
  );
};

export default memo(SideMenu);

export interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  right?: boolean;
  children?: any;
}

const AnimatedDiv = styled<any>(animated.div)`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;

  ${({ theme }) => theme.media.max.tablet`
    top: ${MOBILE_HEADER_HEIGHT}px;
  `}
`;

const AnimatedContainer = styled<any>(animated.div)`
  background-color: ${({ theme }: any) => theme.colors.PrimaryGrey};
  color: #eee;
  position: absolute;
  top: 0;
  bottom: -1px;
  height: ${({ height }) => height - HEADER_HEIGHT}px;
  max-width: 400px;
  box-shadow: 0 6px 5px 1px rgba(0, 0, 0, 0.35);
  z-index: 10;

  ul {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }: any) => theme.colors.Green.dark};
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
