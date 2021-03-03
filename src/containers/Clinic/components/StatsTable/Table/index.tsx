/**
 *
 *
 * Table
 *
 *
 */

import React, { memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

import TableUI from './TableUI';
import makeData from './makeData';

import { SelectColumnFilter } from './filtering';

//
// filter types from lib
//
type filters = 'equals' | 'between' | 'includes';

const Table = ({}: TableProps) => {
  const [search, setSearch] = useState('');

  const data = useMemo(() => makeData(2000), []);

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        disableFilters: true,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        disableFilters: true,
      },
      {
        Header: 'Age',
        accessor: 'age',
        disableFilters: true,
        // disableSortBy: true,
        // defaultCanFilter: false,
      },
      {
        Header: 'Current Weight (lbs)',
        accessor: 'currentWeight',
        disableFilters: true,
      },
      {
        Header: 'Starting Weight',
        accessor: 'startingWeight',
        disableFilters: true,
      },
      {
        Header: 'Weight Loss (lbs)',
        accessor: 'weightLoss',
        disableFilters: true,
      },
      {
        Header: 'TBWL %',
        accessor: 'tbwl',
        Cell: ({ value }: any) => <span>{value}%</span>,
        disableFilters: true,
      },
      {
        Header: 'Days since Balloon Placement',
        accessor: 'daysSince',
        disableFilters: true,
      },
    ],
    [],
  );

  return (
    <Container>
      <div>
        <input
          placeholder="search"
          value={search}
          onChange={(evt: any) => setSearch(evt.target.value)}
        />
      </div>
      <TableUI columns={columns} data={data} search={search} />
    </Container>
  );
};

export default memo(Table);

export interface TableProps {}

const Container = styled.div`
  color: #000;
  font-size: 16px;
  overflow: auto;
  border: 1px solid red;
`;
