import React from 'react';
import styled from 'styled-components';

import SEO from 'components/SEO';

const NotFoundPage = ({}: any) => (
  <Container>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Container>
);

export default NotFoundPage;

const Container = styled.div`
  color: #000;
  padding: 15px;
`;
