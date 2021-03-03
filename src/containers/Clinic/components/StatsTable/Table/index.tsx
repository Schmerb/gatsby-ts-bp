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
        Header: () => <LeftAlign>First Name</LeftAlign>,
        accessor: 'firstName',
        disableFilters: true,
        Cell: ({ value }: any) => <PaddingLeft>{value}</PaddingLeft>,
      },
      {
        Header: () => <LeftAlign>Last Name</LeftAlign>,
        accessor: 'lastName',
        disableFilters: true,
        Cell: ({ value }: any) => <PaddingLeft>{value}</PaddingLeft>,
      },
      {
        Header: () => <Centered>Age</Centered>,
        accessor: 'age',
        disableFilters: true,
        // disableSortBy: true,
        // defaultCanFilter: false,
        Cell: ({ value }: any) => (
          <Centered>
            <Offset>{value}</Offset>
          </Centered>
        ),
      },
      {
        Header: () => (
          <Centered>
            Current <br /> Weight (lbs)
          </Centered>
        ),
        accessor: 'currentWeight',
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Centered>
            <Offset>{value}</Offset>
          </Centered>
        ),
      },
      {
        Header: () => (
          <Centered>
            Startingt <br /> Weight (lbs)
          </Centered>
        ),
        accessor: 'startingWeight',
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Centered>
            <Offset>{value}</Offset>
          </Centered>
        ),
      },
      {
        Header: () => <Centered>Weight Loss (lbs)</Centered>,
        accessor: 'weightLoss',
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Centered>
            <Offset>{value}</Offset>
          </Centered>
        ),
      },
      {
        Header: () => <Centered>TBWL %</Centered>,
        accessor: 'tbwl',
        disableFilters: true,
        Cell: ({ value }: any) => <Centered>{value}%</Centered>,
      },
      {
        Header: () => <Centered>Days since Balloon Placement</Centered>,
        accessor: 'daysSince',
        disableFilters: true,
        Cell: ({ value }: any) => (
          <Centered>
            <Offset>{value}</Offset>
          </Centered>
        ),
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
  }
`;

const PaddingLeft = styled.div`
  padding-left: 39px;
`;

const LeftAlign = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 39px;
`;

const Offset = styled.span`
  margin-left: 15px;
`;

const Centered = styled.div`
  width: 100%;
  text-align: center;
`;
