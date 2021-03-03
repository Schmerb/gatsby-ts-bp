/**
 *
 *
 *    Socket
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import App from 'containers/App';

const Socket = ({}: SocketProps) => {
  return (
    <Container>
      <App />
    </Container>
  );
};

export default memo(Socket);

export interface SocketProps {}

const Container = styled.div`
  border: 1px solid #000;
`;
