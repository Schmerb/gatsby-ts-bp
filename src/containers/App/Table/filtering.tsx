/**
 *
 *
 * Filter components
 *
 *
 */

import React, { useState } from 'react';
// import { useAsyncDebounce } from 'react-table';

// Define a default UI for filtering
export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
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
