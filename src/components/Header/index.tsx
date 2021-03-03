/**
 *
 * Header
 *
 *  */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = ({ siteTitle }: any) => (
  <Container>
    <InnerWrapper>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </InnerWrapper>
  </Container>
);

interface Header {
  siteTitle: string;
}

export default Header;

const Container = styled.header`
  background: rebeccapurple;
  height: 80px;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 960;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;
