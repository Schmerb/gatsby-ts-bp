/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 *
 *    SliderBase
 *
 *
 */

import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';

const defaultSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderBase = ({
  slides,
  renderSlide,
  getRef,
  settings,
  overflowSlickList,
  onSlideClick,
  onSlideHover,
  ...props
}: SliderBaseProps) => (
  <StyledSlider
    ref={getRef}
    overflowSlickList={overflowSlickList}
    {...defaultSettings}
    {...settings}
    {...props}
  >
    {slides &&
      slides.length > 0 &&
      slides.map((slide: any, index: number) => (
        <SlideWrapperDiv
          key={index}
          onClick={() => onSlideClick && onSlideClick(index)}
          onMouseEnter={() => onSlideHover && onSlideHover(index)}
          onMouseLeave={() => onSlideHover && onSlideHover(null)}
        >
          {renderSlide(slide, index)}
        </SlideWrapperDiv>
      ))}
  </StyledSlider>
);

export default memo(SliderBase);

type Slide = any;

export interface SliderBaseProps {
  [key: string]: any;
  slides: Slide[];
  renderSlide: (slide: Slide, index: number) => React.ReactNode;
  getRef?: any;
  settings?: any;
  overflowSlickList?: boolean;
  onSlideClick?: (index: number) => void;
  onSlideHover?: (index: number | null) => void;
}

const StyledSlider = styled(Slider)<any>`
  height: 100%;
  margin: 0px auto;

  .slick-track {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  ${({ overflowSlickList }) =>
    overflowSlickList &&
    css`
      .slick-list {
        overflow: visible;
      }
    `}

  /* .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
    border: 1px solid #000;
  } */

  .slick-slide {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    outline: none;
    > div {
      outline: none;
      > div {
        outline: none;
      }
    }
    > div {
      height: 100%;
      width: 100%;
    }
  }

  ${({ highlightCurrent }) =>
    highlightCurrent &&
    css`
      ${({ theme }) => theme.media.max.tablet`
        .slick-slide {
          opacity: 0.3;
          transition: opacity 0.3s;
          &.slick-current {
            opacity: 1;
          }
        }
     `}
    `}
`;

const SlideWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;
