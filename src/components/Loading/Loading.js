
import React from 'react';

if (process.env.WEBPACK) {
  require('./Loading.css'); // eslint-disable-line global-require
}

const Loading = props => (
  <div className="container">
    <div className="spinner-border spinner" />
  </div>
);

export default Loading;
