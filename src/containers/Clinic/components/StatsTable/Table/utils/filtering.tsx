/**
 *
 *
 * Filter components
 *
 *
 */

import React, { useState, useMemo } from 'react';
// import { useAsyncDebounce } from 'react-table';

// Define a default UI for filtering
export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  // const onChange = useAsyncDebounce(value => {
  //   setGlobalFilter(value || undefined);
  // }, 200);

  // TODO implement using my own useDebouncedValue
  const onChange = (newValue: any) => setGlobalFilter(newValue || undefined);

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onClick={(evt: any) => {
          evt.stopPropagation();
        }}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
export function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onClick={(evt: any) => {
        evt.stopPropagation();
      }}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onClick={(evt: any) => {
        evt.stopPropagation();
      }}
      onChange={(evt: any) => {
        setFilter(evt.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i: number) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
