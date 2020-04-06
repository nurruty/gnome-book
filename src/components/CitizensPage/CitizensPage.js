import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions';
import CitizensList from '../CitizensList/CitizensList';
import Loading from '../Loading/Loading';

if (process.env.WEBPACK) {
  require('./CitizensPage.css'); // eslint-disable-line global-require
}

export class CitizensPage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    gnomes: PropTypes.arrayOf(PropTypes.object.isRequired),
  }
  static getMeta() {
    return {
      title: 'GnomeBook',
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
    const { gnomes, isFetching } = this.props;
    const isEmpty = gnomes.length === 0;
    const head = CitizensPage.getMeta();
    return (
      <div className="HomePage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <h3>Citizens</h3>
        {isEmpty
          ? <div style={{ paddingTop: '25%' }}><Loading /></div>
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <CitizensList citizens={gnomes} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { gnomes = [], isFetching = false, lastUpdated } = state;
  return {
    gnomes,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(CitizensPage);
