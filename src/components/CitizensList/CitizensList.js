import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';


if (process.env.WEBPACK) {
  require('./CitizensList.css'); // eslint-disable-line global-require
}


const CitizensList = props => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="CitizensList">
          {props.citizens.map((citizen, i) =>
            <LazyLoad key={citizen.id} placeholder={<Loading />}>
              <li key={i} className="list-group-item list-citizen">
                <Link to={`/gnome/${citizen.name}`}>
                  <div className="row">
                    <div className="col-4">
                      <span className="avatar-container">
                        <img alt="" className="avatar" src={citizen.thumbnail} />
                      </span>
                      <div className="info">

                        {citizen.name}

                      </div>
                    </div>
                    <div className="info col-4">
                      <span className="icon"><FontAwesomeIcon icon={faUserFriends} /></span>
                      {citizen.professions ? citizen.professions.length : 0}
                    </div>
                    <div className="info col-4">
                      <span className="icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                      {citizen.friends ? citizen.friends.length : 0}
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

CitizensList.propTypes = {
  citizens: PropTypes.array.isRequired
};

export default CitizensList;
