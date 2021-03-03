/**
 *
 *
 * TableUI
 *
 *
 */

import React, { memo, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  // useGroupBy,
  // useExpanded,
} from 'react-table';

import {
  GlobalFilter,
  DefaultColumnFilter,
  SelectColumnFilter,
} from './filtering';

const TableUI = ({ data, columns, search }: TableUIProps) => {
  // const filterTypes: any = useMemo(
  //   () => ({
  //     // Add a new fuzzyTextFilterFn filter type.
  //     // fuzzyText: fuzzyTextFilterFn,
  //     // Or, override the default text filter to use
  //     // "startWith"
  //     text: (rows, id, filterValue) => {
  //       return rows.filter(row => {
  //         const rowValue = row.values[id];
  //         return rowValue !== undefined
  //           ? String(rowValue)
  //               .toLowerCase()
  //               .startsWith(String(filterValue).toLowerCase())
  //           : true;
  //       });
  //     },
  //   }),
  //   [],
  // );

  const defaultColumn: any = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page, // Instead of using 'rows', we'll use page,
    prepareRow,
    // filtering props
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  }: any = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
  );

  useEffect(() => {
    setGlobalFilter(search);
  }, [search]);

  // We don't want to render all 2000 rows for this example, so cap
  // it at 10 for this use case
  const firstPageRows = rows.slice(0, 10);

  console.log({ firstPageRows });

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}>
                  <THWrapper>
                    <span {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                    </span>
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </THWrapper>
                </th>
              ))}
            </tr>
          ))}
          {/* <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr> */}
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
    </Container>
  );
};

export default memo(TableUI);

export interface TableUIProps {
  data: any;
  columns: any;
  search: string;
}

const THWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  width: 100%;
  height: 66px;
  padding: 15px;
  padding-left: 10px;
`;

const Container = styled.div`
  table {
    width: 100%;
    border: 1px solid lightgrey;

    thead {
      font-size: 16px;
      padding: 5px;
      height: 66px;
    }

    th {
      background-color: rgba(215, 225, 221, 0.66);
      color: black;
      font-weight: bold;
      width: 150px;
      height: 66px;
      padding: 0px;
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

      :last-child {
        border-right: 0;
      }
    }
  }
`;
