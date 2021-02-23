/**
 *
 * Header
 *
 *  */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
)

interface Header {
  siteTitle: string
}

export default Header

const Container = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`
