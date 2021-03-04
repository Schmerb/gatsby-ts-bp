/**
 *
 * Header
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// @ts-ignore
import LogoImgSrc from 'images/allurion-logo.png';

import BurgerMenu from 'components/BurgerMenu';
import PaperEdit from 'components/svg/PaperEdit';
import MultiPerson from 'components/svg/MultiPerson';
import Person from 'components/svg/Person';

import { Mobile, Desktop } from 'components/Utils';

import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from './styles';

const Header = ({}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
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
            <LogoImage src={LogoImgSrc} alt="Allurion Logo" />
            <span>Allurion Insights</span>
          </Link>
        </Title>
        <Mobile>
          <BurgerMenu isOpen={isOpen} onClick={toggleMenu} />
        </Mobile>
        <Desktop>
          <NavControls>
            <Circles>
              <Circle to="/edit">
                <PaperEdit />
              </Circle>
              <Circle to="/patients">
                <MultiPerson />
              </Circle>
              <Circle to="/admin">
                <Person />
              </Circle>
            </Circles>
            <LogoutLink to="#!">Logout</LogoutLink>
          </NavControls>
        </Desktop>
      </InnerWrapper>
    </Container>
  );
};

interface Header {
  siteTitle: string;
}

export default Header;

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.Primary};
  height: ${HEADER_HEIGHT}px;

  ${({ theme }) => theme.media.max.mobile`
    height: ${MOBILE_HEADER_HEIGHT}px;
  `}
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 25px;
  transition: padding-right 0.5s;
  @media screen and (min-width: 1290px) {
    padding-right: 0px;
  }
`;

const LogoImage = styled.img`
  height: 32px;
  width: 32px;

  ${({ theme }) => theme.media.max.mobile`
    height: 18px;
    width: 18px;
  `}
`;

const Title = styled.h1`
  font-size: 26px;
  margin: 0;

  ${({ theme }) => theme.media.max.mobile`
    font-size: 14.46px;
  `}

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  span {
    display: inline-block;
    margin-left: 22px;
  }
`;

const NavControls = styled.nav`
  display: flex;
  align-items: center;
`;

const Circles = styled.div`
  display: flex;
`;

const Circle = styled(Link)`
  background-color: ${({ theme }) => theme.colors.DarkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  transition: opacity 0.5s;

  &:not(:last-of-type) {
    margin-right: 12px;
  }
  &:hover {
    opacity: 0.75;
  }
`;

const LogoutLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  margin-left: 40px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.75;
  }
`;
