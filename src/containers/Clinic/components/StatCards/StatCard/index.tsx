/**
 *
 *
 * StatCard
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const StatCard = ({ data }: StatCardProps) => {
  return (
    <Container>
      <Label>{data.label}</Label>
      <Value>{data.value}</Value>
    </Container>
  );
};

export default memo(StatCard);

export interface StatCardProps {
  data: {
    label: string;
    value: string | number;
  };
}

const Container = styled.div`
  color: #111836;
  background-color: #fff;
  width: 187px;
  height: 80px;
  padding-left: 17px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const Label = styled.div`
  font-family: 'Brown';
  font-weight: 700;
  font-weight: bolder;
  font-size: 15px;
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.Purple};
  font-family: 'Brown';
  font-weight: 700;
  font-weight: bolder;
  font-size: 22px;
  line-height: 22px;
  margin-top: 7px;
`;
