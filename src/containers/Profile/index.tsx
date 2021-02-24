/**
 *
 *
 *    Profile
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Router } from '@reach/router';

import Account from './Account';

const Profile = ({ path }: ProfileProps) => {
  return (
    <Container>
      <Link to="/">Back to Home</Link>
      <h2>
        Hello, <Link to="/profile/account">Mike</Link>
      </h2>

      <Router basepath="/profile">
        <Account path="/account/*" />
      </Router>
    </Container>
  );
};

export default memo(Profile);

export interface ProfileProps {
  path: string;
}

const Container = styled.div`
  border: 1px solid #000;
`;
