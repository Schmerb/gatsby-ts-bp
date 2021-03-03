/**
 *
 *
 * StatCards
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import StatCard from './StatCard';

const StatCards = ({}: StatCardsProps) => {
  const data = [
    {
      label: 'Total Points',
      value: 190,
    },
    {
      label: 'Active Patients',
      value: 190,
    },
    {
      label: 'Avg. 5-Month TBWL%',
      value: '10.9%',
    },
    {
      label: 'Daily Weigh-In Rate',
      value: '59%',
    },
    {
      label: 'Weekly Weigh-In Rate',
      value: '76%',
    },
    {
      label: 'Monthly Weigh-In Rate',
      value: '83%',
    },
  ];

  return (
    <Container>
      <List>
        {data.map((dataItem: any) => (
          <li key={dataItem.label}>
            <StatCard data={dataItem} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default memo(StatCards);

export interface StatCardsProps {}

const Container = styled.div`
  margin-top: 40px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: calc(100% / 6);
    &:not(:last-of-type) {
      margin-right: 18px;
    }
  }
`;
