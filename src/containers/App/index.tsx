/**
 *
 *
 *    App
 *
 *
 */

import React, { memo } from "react"
import styled from "styled-components"

const App = ({}: AppProps) => {
  return (
    <Container>
      <h2>App</h2>
    </Container>
  )
}

export default memo(App)

export interface AppProps {}

const Container = styled.div`
  border: 1px solid #000;
`
