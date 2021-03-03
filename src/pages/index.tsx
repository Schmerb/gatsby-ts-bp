import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Router } from '@reach/router';

import Image from 'components/Image';
import SEO from 'components/SEO';
import NotFoundPage from 'components/NotFoundPage';
import Profile from 'containers/Profile';

const Home = ({ path }: any) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </div>
);

const Navigation = props => (
  <>
    <Link to="/socket">Socket</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/profile">profile</Link>
    <br />
    <Link to="/table">table</Link>
  </>
);

const IndexPage = () => {
  return (
    <Container>
      <SEO title="Home" />
      <Router>
        <Navigation path="/" />
        <Home path="/" />
        <Profile path="/profile/*" />
        <NotFoundPage default />
      </Router>
    </Container>
  );
};

export default IndexPage;

const Container = styled.div`
  color: #000;
  padding: 15px;

  a {
    font-size: 20px;
  }
`;
