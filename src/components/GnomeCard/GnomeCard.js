import React from 'react';
import Loading from '../Loading/Loading';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBriefcase } from '@fortawesome/free-solid-svg-icons';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./GnomeCard.css'); // eslint-disable-line global-require
}

const GnomeCard = ({ gnome }) => {
  return (
    <div className="gnome-card gnome-card-chart GnomeCard">
      <div className="gnome-card-header">
        <h5 className="gnome-card-title">{gnome.name}</h5>
      </div>
      <div className="gnome-card-body">
        <LazyLoad key={gnome.id} placeholder={<Loading />}>
          <Link to={`gnome/${gnome.name}`}>
            <img alt="..." src={gnome.thumbnail} style={{ maxHeight: '600px' }} />
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
  gnome: PropTypes.object.isRequired
};

export default GnomeCard;
