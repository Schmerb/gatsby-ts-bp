/**
 *
 *
 * ClinicTrends
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import WeightLossGraph from './WeightLossGraph';
import ActivePatientsGraph from './ActivePatientsGraph';

const ClinicTrends = ({}: ClinicTrendsProps) => {
  return (
    <Container>
      <Title>Clinic Trends</Title>
      <WeightLossGraph />
      <ActivePatientsGraph />
    </Container>
  );
};

export default memo(ClinicTrends);

export interface ClinicTrendsProps {}

const Container = styled.div`
  color: ${({ theme }) => theme.colors.Primary};
  margin-top: 57px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 100px;

  ${({ theme }) => theme.media.min.mobile`
    margin-top: 72px;
  `}
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: 26px;
  line-height: 25.48px;
  font-weight: 700px;
  font-weight: bolder;
  height: 48px;
`;
