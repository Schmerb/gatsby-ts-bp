import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from 'components/SEO';

const SecondPage = () => (
  <Container>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
);

export default SecondPage;

const Container = styled.div`
  color: #000;
  padding: 15px;
`;
