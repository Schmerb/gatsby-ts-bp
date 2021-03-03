import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from 'components/SEO';
import Clinic from 'containers/Clinic';

const ClinicPage = () => (
  <Container>
    <SEO title="Clinic Page" />
    <Clinic />
  </Container>
);

export default ClinicPage;

const Container = styled.div`
  color: #000;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
`;
