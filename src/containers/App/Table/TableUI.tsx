/**
 *
 *
 * TableUI
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

const TableUI = ({ data, columns }: TableUIProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </Container>
  );
};

export default memo(TableUI);

export interface TableUIProps {
  data: any;
  columns: any;
}

const Container = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    border: 1px solid lightgrey;

    thead {
      font-size: 16px;
      padding: 5px;
      width: 33.33%;
    }

    th {
      background: aliceblue;
      color: black;
      font-weight: bold;
      padding: 15px;
      padding-left: 10px;
      border-right: 1px solid #000;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      background: papayawhip;
      font-size: 16px;
      padding: 15px;
      border: solid 1px gray;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
