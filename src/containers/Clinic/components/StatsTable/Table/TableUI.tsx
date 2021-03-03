/**
 *
 *
 * TableUI
 *
 *
 */

import React, { memo, useMemo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  // useGroupBy,
  // useExpanded,
} from 'react-table';

import Arrow from 'components/svg/Arrow';

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
                  <THWrapper isSorted={column.isSorted}>
                    <HeaderTextWrapper {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                    </HeaderTextWrapper>
                    {/* {column.canFilter ? (
                      <div>{column.render('Filter')}</div>
                    ) : null} */}
                    <SortingWrapper isSorted={column.isSorted}>
                      <Arrow
                        style={
                          !column.isSortedDesc
                            ? { transform: 'rotate(180deg)' }
                            : {}
                        }
                      />
                    </SortingWrapper>
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

const THWrapper = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 15px;

  ${({ isSorted }) =>
    isSorted &&
    css`
      background-color: #d5dcd8;
    `}
`;

const HeaderTextWrapper = styled.div`
  width: 100%;
`;

const SortingWrapper = styled.span<any>`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0;
  transition: opacity 0.15s;

  ${({ isSorted }) =>
    isSorted &&
    css`
      opacity: 1;
    `}
`;

const Container = styled.div`
  table {
    width: 100%;

    thead {
      font-size: 16px;
      padding: 5px;
      height: 66px;
    }

    th {
      position: relative;
      background-color: rgba(215, 225, 221, 0.66);
      color: black;
      font-weight: bold;
      font-size: 14px;
      width: 150px;
      height: 60px;
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
      font-size: 16px;
      padding: 15px;
      /* border: solid 1px gray; */
    }

    th,
    td {
      margin: 0;

      :last-child {
        border-right: 0;
      }
    }

    tbody {
      tr {
        &:nth-of-type(2n) {
          td {
            background-color: rgba(234, 234, 234, 0.5);
          }
        }
      }
    }
  }
`;