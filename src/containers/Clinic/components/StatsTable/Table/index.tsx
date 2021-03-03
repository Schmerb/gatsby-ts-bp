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
        accessor: 'age',
        disableFilters: true,
        // disableSortBy: true,
        // defaultCanFilter: false,
        Header: () => <Centered>Age</Centered>,
        Cell: ({ value }: any) => <Centered>{value}</Centered>,
      },
      {
        accessor: 'currentWeight',
        disableFilters: true,
        Header: () => <Centered>Current Weight (lbs)</Centered>,
        Cell: ({ value }: any) => <Centered>{value}</Centered>,
      },
      {
        accessor: 'startingWeight',
        disableFilters: true,
        Header: () => <Centered>Starting Weight</Centered>,
        Cell: ({ value }: any) => <Centered>{value}</Centered>,
      },
      {
        accessor: 'weightLoss',
        disableFilters: true,
        Header: () => <Centered>Weight Loss (lbs)</Centered>,
        Cell: ({ value }: any) => <Centered>{value}</Centered>,
      },
      {
        accessor: 'tbwl',
        disableFilters: true,
        Header: () => <Centered>TBWL %</Centered>,
        Cell: ({ value }: any) => <Centered>{value}%</Centered>,
      },
      {
        accessor: 'daysSince',
        disableFilters: true,
        Header: () => <Centered>Days since Balloon Placement</Centered>,
        Cell: ({ value }: any) => <Centered>{value}</Centered>,
      },
    ],
    [],
  );

  return (
    <Container>
      <SearchWrapper>
        <input
          placeholder="search"
          value={search}
          onChange={(evt: any) => setSearch(evt.target.value)}
        />
      </SearchWrapper>
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
`;

const SearchWrapper = styled.div`
  margin-bottom: 15px;

  input {
    min-width: 200px;
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    outline: none;
    border: 1px solid lightgrey;
    /* ${({ theme }) => theme.styles.boxShadows['0']}; */
  }
`;

const Centered = styled.div`
  width: 100%;
  text-align: center;
  /* border: 1px solid red; */
`;
