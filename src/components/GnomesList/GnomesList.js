import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import Loading from '../Loading/Loading';

if (process.env.WEBPACK) {
  require('./GnomesList.css'); // eslint-disable-line global-require
}

const GnomesList = (props) => {

  const [state, setState] = useState({ filter: '' });

  const handleChange = (e) => {
    setState({ filter: e.target.value });
  };

  let list = [];
  if (props.citizens) {
    list = state.filter.length > 0
    ? _.filter(props.citizens, c => {
      return c.name.match(state.filter) != null;
    })
    : list = props.citizens;
  }

  return (
    <div className="container">
      
      <div className="row">
        <div className="col-12">
          <form role="form">
            <div className="form-group">
              <input type="text" onChange={handleChange} className="input" id="iconified" placeholder="Search..." />
            </div>
          </form>
        </div>
        <div className="col-12">
          <ul className="GnomesList">
            {list.map((citizen, i) =>
              <LazyLoad key={citizen.id} placeholder={<div></div>}>
                <li key={i} className="list-group-item list-citizen">
                  <Link to={`/gnome/${citizen.name}`}>
                    <div className="row">
                      <div className="col-6">
                        <span className="avatar-container">
                          <img alt="" className="avatar" src={citizen.thumbnail} />
                        </span>
                        <div className="info">

                          {citizen.name}

                        </div>
                      </div>
                      <div className="info col-2">
                        <span className="icon" title="Friends"><FontAwesomeIcon icon={faUserFriends} /></span>
                        {citizen.friends ? citizen.friends.length : 0}
                      </div>
                      <div className="info col-4">
                        <span className="icon" title="Professions"><FontAwesomeIcon icon={faBriefcase} /></span>
                        {citizen.professions ? citizen.professions.length : 0}
                      </div>
                    </div>
                  </Link>
                </li>
              </LazyLoad>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

GnomesList.propTypes = {
  citizens: PropTypes.array.isRequired
};

export default GnomesList;
