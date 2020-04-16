import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createLogger from 'redux-logger';

// This allows us to use Redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// With server rendering, we can grab the preloaded state.
const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);