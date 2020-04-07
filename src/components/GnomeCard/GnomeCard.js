import React from 'react';
import Loading from '../Loading/Loading';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBriefcase, faSearch } from '@fortawesome/free-solid-svg-icons';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./GnomeCard.css'); // eslint-disable-line global-require
}

const GnomeCard = ({ gnome }) => {

  return (
    <div className="gnome-card gnome-card-chart">
      <div className="gnome-card-header">
        <h5 className="gnome-card-title">{gnome.name}</h5>
      </div>
      <div className="gnome-card-body">
        <LazyLoad key={gnome.id} placeholder={<Loading />}>
          <Link to={`gnome/${gnome.name}`}>
          <img alt="..." src={gnome.thumbnail} />
          </Link>
        </LazyLoad>
      </div>
      <div className="gnome-card-footer">
        <div className="row">     
          <div className="info col-6">
            <span className="icon" title="Friends"><FontAwesomeIcon icon={faUserFriends} /></span>
            {gnome.friends ? gnome.friends.length : 0}
          </div>
          <div className="info col-6">
            <span className="icon" title="Professions"><FontAwesomeIcon icon={faBriefcase} /></span>
            {gnome.professions ? gnome.professions.length : 0}
          </div>
        </div>
      </div>
    </div>
); };

GnomeCard.propTypes = {
  gnome: PropTypes.array.isRequired
};

export default GnomeCard;
