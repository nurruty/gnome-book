import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./ProfessionList.css'); // eslint-disable-line global-require
}

const ProfessionList = props => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="ProfessionList">
          {Object.keys(props.professions).map((profession, i) =>
            <li key={i} className="list-group-item ProfessionList-gnome">
              <div className="row">
                <div className="col-4">
                  {profession}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  </div>
  
);

ProfessionList.propTypes = { 
  professions: PropTypes.object.isRequired
};

export default ProfessionList;
