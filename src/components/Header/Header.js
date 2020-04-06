import React from 'react';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Header.css'); // eslint-disable-line global-require
}

const Header = () => (
  <nav className="navbar navbar-expand-md bg-success navbar-dark">
    <a className="navbar-brand" href="/">GonomeBook</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
