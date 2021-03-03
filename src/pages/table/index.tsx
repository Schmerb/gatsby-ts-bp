/**
 *
 *
 * TablePage
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import Table from 'containers/App/Table';

const TablePage = ({}: TablePageProps) => {
  return <Table />;
};

export default memo(TablePage);

export interface TablePageProps {}

const Container = styled.div`
  border: 1px solid #000;
`;
