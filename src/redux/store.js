import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// In development, use the browser's Redux dev tools extension if installed
// https://github.com/zalmoxisus/redux-devtools-extension#usage
// https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83
window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), ...enhancers)
  // applyMiddleware(...middlewares)
)

export default store;