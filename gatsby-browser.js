/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"

import Layout from "layout"
import createStore from "state/store"

// lets us access store methods in functions
// we might create to fetch initial data and set
// it in redux
let store = null

export const wrapRootElement = ({ element, ...rest }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  store = createStore()

  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  )
}

wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  // store.dispatch(setLocation(location))
  // Track pageview with google analytics
  // window.ga(
  //   `set`,
  //   `page`,
  //   location.pathname + location.search + location.hash,
  // )
  // window.ga(`send`, `pageview`)
}
