/**
 *
 *
 * StatsSlider
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import Slider from 'components/lib/Slider';

import StatCard from '../StatCard';

const sliderSettings = {
  arrows: false,
  dots: false,
  // slidesToShow: 4.5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
  ],
};

const StatsSlider = ({ slides }: StatsSliderProps) => {
  return (
    <Container>
      <Slider
        settings={sliderSettings}
        slides={slides}
        renderSlide={(slide: any) => (
          <Slide>
            <StatCard isSlide data={slide} />
          </Slide>
        )}
      />
    </Container>
  );
};

export default memo(StatsSlider);

export interface StatsSliderProps {
  slides: any[];
}

const Container = styled.div`
  border: 1px solid #000;
`;

const Slide = styled.div`
  color: red;
  width: 120px;
  height: 84px;
  border: 1px solid #000;
`;
