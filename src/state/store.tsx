/**
 *
 * Store
 *
 *  */

import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import appReducer from 'state/app/appReducer';
// import

// import { SET_DIMENSIONS } from 'actions/display/types';
// import { SET_LOCATION, SET_PREV_LOCATION } from 'actions/location';

const logger = createLogger({
  predicate: (getState: any, action: any) => true,
  // action.type !== SET_DIMENSIONS &&
  // action.type !== SET_LOCATION &&
  // action.type !== SET_PREV_LOCATION,
  // collapsed: (getState, action) => action.type === SET_DIMENSIONS,
});

export default () =>
  createStore(
    combineReducers({
      app: appReducer,
      // reducer
    }),
    compose(
      applyMiddleware(thunk, logger),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );
