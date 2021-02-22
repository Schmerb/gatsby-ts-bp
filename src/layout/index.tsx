/**
 *
 * Layout
 *
 *  */

import React, { memo, useEffect } from "react"
import styled, {
  css,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Header"
import Footer from "components/Footer"

import Theme from "styles/theme"

import "./layout.css"

require("es6-promise").polyfill()
require("fetch-everywhere")

const GlobalStyle = createGlobalStyle`
   html,
    body {
      overflow-y: hidden !important;
    }
`

export const Layout = ({ children }: any) => {
  useEffect(() => {}, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <LayoutContainer>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Gatsby Project</title>
          </Helmet>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          {/* <AsideNav app={app} menuIsOpen={menuIsOpen} /> */}
          {/* <Modals /> */}
          <Main role="main">{children}</Main>
          <Footer />
        </LayoutContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  position: relative;
  color: #000;
`

const Main = styled.main<any>`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
