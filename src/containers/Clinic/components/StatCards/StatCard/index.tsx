/**
 *
 *
 * StatCard
 *
 *
 */

import React, { memo } from 'react';
import styled, { css } from 'styled-components';

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
  // isSlide?: boolean;
  data: {
    label: string;
    value: string | number;
  };
}

const Container = styled.div`
  color: #111836;
  background-color: #fff;
  width: 150px;
  height: 80px;
  padding-left: 17px;
  padding-top: 14px;
  padding-bottom: 14px;

  ${({ theme }) => theme.media.min.tablet`
    width: 188px;
  `}
`;

const Label = styled.div`
  font-family: 'Brown';
  font-weight: 700;
  font-weight: bolder;
  font-size: 12px;
  ${({ theme }) => theme.media.min.tablet`
    font-size: 15px;
  `}
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.Purple};
  font-family: 'Brown';
  font-weight: 700;
  font-weight: bolder;
  font-size: 16px;
  line-height: 22px;
  margin-top: 7px;
  ${({ theme }) => theme.media.min.tablet`
    font-size: 22px;
  `}
`;
