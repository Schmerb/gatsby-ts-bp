/**
 *
 * BurgerMenu
 *
 */

import React from 'react';
import styled, { css } from 'styled-components';

// Utils

export const BurgerMenu = ({ isOpen, onClick, ...props }: BurgerMenuProps) => {
  const classes = isOpen ? 'isOpen' : '';
  return (
    <Button onClick={onClick} type="button" {...props}>
      <InnerWrapper className={classes}>
        <Bars className={classes} />
        <Bar className={classes} />
      </InnerWrapper>
    </Button>
  );
};

export interface BurgerMenuProps {
  [key: string]: any;
  onClick: (evt: any) => void;
  isOpen: boolean;
}

export default BurgerMenu;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border: none;
  outline: none;
`;

const InnerWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.15s;
`;

const Bar = styled.div<any>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  width: 18px;
  height: 2px;
  transition: width 0.3s;

  &.isOpen {
    width: 0%;
    transition: width 0.15s;
    transform: translateX(4px);
  }
`;

const Bars = styled.div<any>`
  position: absolute;
  width: 18px;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    height: 2px;
    width: 100%;
    left: 0;
    transition: transform 0.3s;
  }
  &::before {
    top: 6px;
  }
  &::after {
    bottom: 6px;
  }
  &.isOpen {
    &::before {
      transform: rotate(45deg) translate(-4.5px, -4px);
    }
    &::after {
      transform: rotate(-45deg) translate(-4.5px, 4px);
    }
  }
`;
