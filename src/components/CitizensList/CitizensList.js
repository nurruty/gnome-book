import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./CitizensList.css'); // eslint-disable-line global-require
}

const CitizensList = props => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="CitizensList">
          {props.citizens.map((citizen, i) =>
              <li key={i} className="list-group-item CitizensList-gnome">
                <div className="row">
                <Link to={`/gnome/${citizen.name}`}>
                  <div className="col-4">
                    {citizen.name}
                  </div>
                  </Link>
                  <div className="col-4">
                    {citizen.age}
                  </div>
                  <div className="col-4">
                    {citizen.weight}
                  </div>
                </div>
              </li>
            
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
