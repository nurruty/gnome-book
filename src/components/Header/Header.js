import React from 'react';
import { Link } from 'react-router';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Header.css'); // eslint-disable-line global-require
}

const Header = () => (
  <nav className="navbar navbar-expand-md bg-success navbar-dark Header">
    <Link className="navbar-brand" to={'/'}>GnomeBook</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={'/gnomes'}>Gnomes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/professions'}>Professions</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
