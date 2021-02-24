/**
 *
 *
 *    Account
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Router } from '@reach/router';

const Settings = (props: any) => <div>Settings!</div>;

const Account = ({ path }: AccountProps) => {
  console.log('Account');
  return (
    <Container>
      <h2>My Account</h2>
      <Link to="/profile/account/settings">to settings</Link>
      <Router basepath="/profile/account">
        <Settings path="/settings" />
      </Router>
    </Container>
  );
};

export default memo(Account);

export interface AccountProps {
  path: string;
}

const Container = styled.div`
  border: 1px solid #000;
`;
