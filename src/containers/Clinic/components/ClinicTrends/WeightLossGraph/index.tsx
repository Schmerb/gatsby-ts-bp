/**
 *
 *
 * WeightLossGraph
 *
 *
 */

import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-charts';

import { MobileBR } from 'components/Utils';

const WeightLossGraph = ({}: WeightLossGraphProps) => {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: 'Series 2',
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: 'Series 3',
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
    ],
    [],
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  return (
    <Container>
      <h2>
        Weight Loss Distribution
        <MobileBR /> by Percentile
      </h2>
      <Chart data={data} axes={axes} />
    </Container>
  );
};

export default memo(WeightLossGraph);

export interface WeightLossGraphProps {}

const Container = styled.div`
  background-color: #fff;
  height: 222px;
  padding-top: 15px;
  padding-left: 22px;
  padding-right: 22px;
  border: 1px solid #000;
  ${({ theme }) => theme.media.min.tablet`
    height: 436px;
  `}
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: 11px;
  line-height: 16px;
  font-weight: 700px;
  font-weight: bolder;

  ${({ theme }) => theme.media.min.tablet`
    font-size: 20px;
    line-height: 19.6pxpx;
  `}
`;
