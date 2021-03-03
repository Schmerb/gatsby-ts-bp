/**
 *
 *
 * StatsScrollingList
 *
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import StatCard from '../StatCard';

// One item component
// selected prop will be passed
const MenuItem = ({ item }) => {
  return (
    <div className="menu-item ">
      <StatCard data={item} />
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list: any) =>
  list.map((item: any) => {
    const { label } = item;

    return <MenuItem key={label} item={item} />;
  });

const StatsScrollingList = ({ data }: StatsScrollingListProps) => {
  return (
    <Container>
      <ScrollMenu
        hideArrows
        inertiaScrolling
        alignCenter={false}
        data={Menu(data)}
        // onSelect={(...props) => {
        //   console.log({ props });
        //   console.log('selected');
        // }}
      />
    </Container>
  );
};

export default memo(StatsScrollingList);

export interface StatsScrollingListProps {
  data: any[];
}

const Container = styled.div`
  div {
    border: none !important;
    outline: none !important;
  }
  .menu-item {
    margin-right: 18px;
    user-select: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .scroll-menu-arrow {
    /* padding: 20px; */
    cursor: pointer;
  }
`;
