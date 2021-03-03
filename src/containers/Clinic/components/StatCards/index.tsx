/**
 *
 *
 * StatCards
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import { Mobile, Desktop } from 'components/Utils';

import StatCard from './StatCard';
import StatsSlider from './StatsSlider';
import StatsScrollingList from './StatsScrollingList';

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
      <StatsScrollingList data={data} />
      {/* <HorizontalList>
        {data.map((dataItem: any) => (
          <li key={dataItem.label}>
            <StatCard data={dataItem} />
          </li>
        ))}
      </HorizontalList> */}
      {/* <StatsSlider slides={data} /> */}
      {/* <Mobile>
        <StatsSlider slides={data} />
      </Mobile>
      <Desktop>
        <List>
          {data.map((dataItem: any) => (
            <li key={dataItem.label}>
              <StatCard data={dataItem} />
            </li>
          ))}
        </List>
      </Desktop> */}
    </Container>
  );
};

export default memo(StatCards);

export interface StatCardsProps {}

const Container = styled.div`
  margin-top: 40px;
  padding-left: 25px;
  @media screen and (min-width: 1290px) {
    padding-left: 0;
  }
`;

const HorizontalList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1239px) {
    overflow-x: scroll;
  }

  li {
    &:not(:last-of-type) {
      margin-right: 18px;
    }
  }
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
