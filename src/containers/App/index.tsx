/**
 *
 *
 *    App
 *
 *
 */

import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
// import socketIOClient from 'socket.io-client';

// const ENDPOINT = 'http://127.0.0.1:4001';

const App = ({}: AppProps) => {
  // const [response, setResponse] = useState('');
  // useEffect(() => {
  //   console.log('ENDPOINT');
  //   fetch(ENDPOINT).then(res => {
  //     console.log({ res });
  //   });
  //   const socket = socketIOClient(ENDPOINT);
  //   console.log({ socket });
  //   socket.on('FromAPI', (data: any) => {
  //     console.log({ data });
  //     setResponse(data);
  //   });
  // }, []);
  return (
    <Container>
      <h2>App</h2>
      {/* <time dateTime={response}>{response}</time> */}
    </Container>
  );
};

export default memo(App);

export interface AppProps {}

const Container = styled.div`
  color: #000;
  border: 1px solid #000;
`;
