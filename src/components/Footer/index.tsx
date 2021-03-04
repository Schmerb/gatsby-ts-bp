/**
 *
 *
 *    Footer
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const Footer = ({}: FooterProps) => {
  return (
    <Container>
      <h2>Footer</h2>
    </Container>
  );
};

export default memo(Footer);

export interface FooterProps {}

const Container = styled.div`
  height: 200px;
  border: 1px solid #000;
`;
