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
  if (props.gnomes) {
    list = state.filter.length > 0
    ? _.filter(props.gnomes, (c) => {
      try {
        return c.name.match(state.filter) != null;
      } catch(e) {
        return true
      }
    })
    : list = props.gnomes;
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
          <ul data-test="GnomesList" className={list.length > 0 ? 'notEmpty' : 'empty'} style={{padding: 0}}>
            {list.map((gnome, i) =>
              <LazyLoad key={gnome.id} placeholder={<Loading />}>
                <li key={i} className="list-group-item list-gnome">
                  <Link to={`/gnome/${gnome.name}`}>
                    <div className="row">
                      <div className="col-6">
                        <span className="avatar-container">
                          <img alt="" className="avatar" src={gnome.thumbnail} />
                        </span>
                        <div className="info">

                          {gnome.name}

                        </div>
                      </div>
                      <div className="info col-2">
                        <span className="icon" title="Friends"><FontAwesomeIcon icon={faUserFriends} /></span>
                        {gnome.friends ? gnome.friends.length : 0}
                      </div>
                      <div className="info col-4">
                        <span className="icon" title="Professions"><FontAwesomeIcon icon={faBriefcase} /></span>
                        {gnome.professions ? gnome.professions.length : 0}
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
  gnomes: PropTypes.array.isRequired
};

export default GnomesList;
