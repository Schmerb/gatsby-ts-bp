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

import LineChart from 'components/lib/ChartJS';

import { MobileBR } from 'components/Utils';

const WeightLossGraph = ({}: WeightLossGraphProps) => {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 5 },
          { x: 3, y: 10 },
          { x: 4, y: 15 },
          { x: 5, y: 20 },
          { x: 6, y: 25 },
        ],
      },
      {
        label: 'Series 2',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 5 },
          { x: 5, y: 10 },
          { x: 6, y: 12 },
        ],
      },
      {
        label: 'Series 2',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 14 },
          { x: 6, y: 16 },
        ],
      },
      {
        label: 'Series 3',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 6 },
          { x: 3, y: 12 },
          { x: 4, y: 18 },
          { x: 5, y: 23 },
          { x: 6, y: 25 },
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
      <Title>
        Weight Loss Distribution
        <MobileBR /> by Percentile
      </Title>
      <div
        style={{
          width: '90%',
          height: '90%',
        }}
      >
        <LineChart />
      </div>
      {/* <div
        style={{
          width: '90%',
          height: '90%',
        }}
      >
        <Chart data={data} axes={axes} />
      </div> */}
    </Container>
  );
};

export default memo(WeightLossGraph);

export interface WeightLossGraphProps {}

const Container = styled.div`
  background-color: #fff;
  /* height: 222px; */
  width: 100%;
  padding-top: 15px;
  padding-left: 22px;
  padding-right: 22px;
  border: 1px solid #000;
  /* ${({ theme }) => theme.media.min.tablet`
    height: 436px;
  `} */
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: 11px;
  line-height: 16px;
  font-weight: 700px;
  font-weight: bolder;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.min.tablet`
    font-size: 20px;
    line-height: 19.6px;
  `}
`;
