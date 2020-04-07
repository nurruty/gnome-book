import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

if (process.env.WEBPACK) {
  require('./App.css'); // eslint-disable-line global-require
}

const App = props => (
  <div>
    <Header />
    <div className="App">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
