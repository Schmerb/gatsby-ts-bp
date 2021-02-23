/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import Layout from 'layout';
import createStore from 'state/store';

const sheet = new ServerStyleSheet();

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([sheet.getStyleElement()]);
};

let store = null;

export const wrapRootElement = ({ element, ...rest }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  store = createStore();

  return (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <Layout>{element}</Layout>
      </StyleSheetManager>
    </Provider>
  );
};
