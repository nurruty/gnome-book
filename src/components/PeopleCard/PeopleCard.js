import React from 'react';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./PeopleCard.css'); // eslint-disable-line global-require
}

const PeopleCard = ({title, data}) => {

  return(
        <div className="card card-chart">
          <div className="card-header">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <div className="card-data">
              {data}
              </div>
            </div>
          </div>
          <div className="card-footer">
              <div className="name">
                   {data}
                </div>
            </div>
        </div>
)}


export default PeopleCard;