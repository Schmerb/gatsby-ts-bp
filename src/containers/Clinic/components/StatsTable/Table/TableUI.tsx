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
} from './utils/filtering';

const TableUI = ({ data, columns, search, showAll }: TableUIProps) => {
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
  const firstPageRows = showAll ? rows : rows.slice(0, 10);

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
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <THWrapper isSorted={column.isSorted}>
                    {column.render('Header')}
                    {/* <HeaderTextWrapper {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                    </HeaderTextWrapper> */}
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
                    <td
                      {...cell.getCellProps()}
                      className={cell.column.isSorted ? 'isSorted' : ''}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default memo(TableUI);

export interface TableUIProps {
  data: any;
  columns: any;
  search: string;
  showAll: boolean;
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
  padding-right: 5px;

  ${({ isSorted }) =>
    isSorted &&
    css`
      background-color: #d5dcd8;
    `}
`;

const SortingWrapper = styled.span<any>`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  width: 30px;
  opacity: 0;
  transition: opacity 0.15s;
  transform: translateY(-50%);

  ${({ isSorted }) =>
    isSorted &&
    css`
      opacity: 1;
    `}
`;

const Container = styled.div`
  width: 101%; /** hack to avoid scrollbars showing on desktop full view */
  overflow-x: auto;

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
      color: ${({ theme }) => theme.colors.Primary};
      font-weight: bold;
      font-size: 14px;
      min-width: 150px;
      height: 60px;
      padding: 0px;
    }

    tr {
      :last-of-type {
        td {
          &.isSorted {
            border-bottom: 1px solid #d5dcd8;
          }
        }
      }
    }

    td {
      color: ${({ theme }) => theme.colors.Primary};
      font-size: 16px;
      padding: 15px;
      padding-left: 0;
      &.isSorted {
        border-left: 1px solid #d5dcd8;
        border-right: 1px solid #d5dcd8;
      }
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
        height: 45px;
        &:nth-of-type(2n) {
          td {
            background-color: rgba(234, 234, 234, 0.5);
          }
        }
      }
    }
  }
`;
