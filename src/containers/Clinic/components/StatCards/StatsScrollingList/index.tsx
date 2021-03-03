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
const MenuItem = ({ item, selected }) => {
  return (
    <div className={`menu-item ${selected ? 'active' : ''}`}>
      <StatCard data={item} />
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(item => {
    const { label } = item;

    return <MenuItem key={label} item={item} selected={selected} />;
  });

const defaultSelected = 'item1';

const StatsScrollingList = ({ data }: StatsScrollingListProps) => {
  const [selected, setSelected] = useState(defaultSelected);
  return (
    <Container>
      <ScrollMenu
        hideArrows
        alignCenter={false}
        data={Menu(data, selected)}
        selected={selected}
        onSelect={(...props) => {
          console.log({ props });
          console.log('selected');
        }}
      />
    </Container>
  );
};

export default memo(StatsScrollingList);

export interface StatsScrollingListProps {
  data: any[];
}

const Container = styled.div`
  .menu-item {
    margin-right: 18px;
    user-select: none;
    cursor: pointer;
    border: none;
  }

  .scroll-menu-arrow {
    /* padding: 20px; */
    cursor: pointer;
  }
`;
