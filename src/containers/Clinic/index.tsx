/**
 *
 *
 * Clinic
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import StateCards from './components/StatCards';

const Clinic = ({}: ClinicProps) => {
  return (
    <Container>
      <Title>Allurion Central London Weight Loss Clinic</Title>
      <SubTitle>You are an admin</SubTitle>
      <StateCards />
    </Container>
  );
};

export default memo(Clinic);

export interface ClinicProps {}

const Container = styled.div``;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700px;
  font-weight: bolder;
  margin-top: 40px;
  margin-bottom: 30px;

  ${({ theme }) => theme.media.max.tablet`
    margin-top: 28px;
  `}
`;

const SubTitle = styled.h4``;
