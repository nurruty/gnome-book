import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions';
import InfoCard from '../InfoCard/InfoCard';
import PeopleCard from '../PeopleCard/PeopleCard';
import { Link } from 'react-router';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./HomePage.css'); // eslint-disable-line global-require
}

export class HomePage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    gnomes: PropTypes.arrayOf(PropTypes.object.isRequired),
    professions: PropTypes.object.isRequired
  }
  static getMeta() {
    return {
      title: 'React Redux Boilerplate',
      link: [
        {
          rel: 'canonical',
          href: 'http://localhost:3000'
        }
      ],
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'description', content: 'Put the home page description here!'
        }
      ]
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomesIfNeeded());
  }
  render() {
    const { gnomes, professions, isFetching } = this.props;
    const isEmpty = gnomes.length === 0;
    const head = HomePage.getMeta();
    return (
      <div className="HomePage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <div className="row">
          <div className="col-6">
            <Link to={'/citizens'}>
              <InfoCard title="Total Population" data={gnomes.length} />
            </Link>
          </div>
          <div className="col-6">
          <Link to={'/professions'}>
            <InfoCard title="Different Professions" data={Object.keys(professions).length} />
          </Link>
          </div>
        </div>

        <h3>Famous Citizents</h3>
        <div className='row'>
          <div className="col-lg-4">
            <PeopleCard title="John Snow" data={'35'} />
          </div>
          <div className="col-lg-4">
          <PeopleCard title="Donald Trump" data={'35'} />
          </div>
          <div className="col-lg-4">
          <PeopleCard title="Madonna" data={'35'} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { gnomes = [], professions = [], isFetching = false, lastUpdated } = state;
  return {
    gnomes,
    professions,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(HomePage);
