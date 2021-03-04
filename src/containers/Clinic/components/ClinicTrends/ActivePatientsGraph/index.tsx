/**
 *
 *
 * ActivePatientsGraph
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const ActivePatientsGraph = ({}: ActivePatientsGraphProps) => {
  return (
    <Container>
      <Title>Active Patients on Elipse Program</Title>
    </Container>
  );
};

export default memo(ActivePatientsGraph);

export interface ActivePatientsGraphProps {}

const Container = styled.div`
  background-color: #fff;
  height: 222px;
  margin-top: 32px;
  padding-top: 15px;
  padding-left: 22px;
  padding-right: 22px;
  border: 1px solid #000;

  ${({ theme }) => theme.media.min.tablet`
    height: 436px;
    margin-top: 55px;
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
