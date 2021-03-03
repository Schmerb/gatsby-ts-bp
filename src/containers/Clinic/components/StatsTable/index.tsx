/**
 *
 *
 * StatsTable
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import Table from './Table';

const StatsTable = ({}: StatsTableProps) => {
  return (
    <Container>
      <Title>Clinic Patients</Title>
      <Table />
    </Container>
  );
};

export default memo(StatsTable);

export interface StatsTableProps {}

const Container = styled.div`
  margin-top: 60px;
  padding-left: 25px;
  /* padding-right: 25px; */

  @media screen and (min-width: 1290px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`;
