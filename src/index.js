import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { store } from './createStore';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('app') // eslint-disable-line no-undef
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
  });
}
