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

// @ts-ignore
import RedBullImgSrc from 'images/bull.jpeg';

import Account from './Account';

console.log({ RedBullImgSrc });

const ProfileHome = props => (
  <div>
    <Link to="..">Back to Home</Link>
    <h2>
      Hello, <Link to="/profile/account">Mike</Link>
    </h2>
    <img src={RedBullImgSrc} alt="" />
  </div>
);

const Profile = ({ path }: ProfileProps) => {
  return (
    <Container>
      <Router basepath="/profile">
        <ProfileHome path="/" />
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
  background-image: url('images/bull.jpeg');
  background-size: contain;
  background-repeat: no-repeat;
`;
