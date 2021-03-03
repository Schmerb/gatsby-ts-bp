/**
 *
 *
 * Clinic
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import StatCards from './components/StatCards';
import StatsTable from './components/StatsTable';

const Clinic = ({}: ClinicProps) => {
  return (
    <Container>
      <TextWrapper>
        <Title>Allurion Central London Weight Loss Clinic</Title>
        <SubTitle>You are an admin</SubTitle>
      </TextWrapper>
      <StatCards />
      <StatsTable />
    </Container>
  );
};

export default memo(Clinic);

export interface ClinicProps {}

const Container = styled.div``;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: 26px;
  line-height: 24px;
  font-weight: 700px;
  font-weight: bolder;
  margin-top: 40px;
  margin-bottom: 30px;

  ${({ theme }) => theme.media.max.tablet`
    margin-top: 28px;
  `}
`;

const TextWrapper = styled.div`
  padding-left: 25px;
  padding-right: 25px;

  @media screen and (min-width: 1290px) {
    padding: 0;
  }
`;

const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.Primary};
`;
