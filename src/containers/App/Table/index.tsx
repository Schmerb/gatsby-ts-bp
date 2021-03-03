/**
 *
 *
 * Table
 *
 *
 */

import React, { memo, useMemo } from 'react';
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
import rawData from './data';
import makeData from './makeData';

const Table = ({}: TableProps) => {
  const data = useMemo(() => makeData(2000), []);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  return (
    <Container>
      <h2>Table</h2>
      <TableUI columns={columns} data={data} />
    </Container>
  );
};

export default memo(Table);

export interface TableProps {}

const Container = styled.div`
  color: #000;
  font-size: 16px;
  padding: 25px;
  overflow: auto;
  border: 1px solid red;
`;
