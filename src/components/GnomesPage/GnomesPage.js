import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions';
import GnomesList from '../GnomesList/GnomesList';
import Loading from '../Loading/Loading';

if (process.env.WEBPACK) {
  require('./GnomesPage.css'); // eslint-disable-line global-require
}

export class GnomesPage extends Component {
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
    const head = GnomesPage.getMeta();
    return (
      <div className="HomePage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <h3>Gnomes</h3>
        {isEmpty
          ? <div style={{ paddingTop: '25%' }}><Loading /></div>
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <GnomesList citizens={gnomes} />
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

export default connect(mapStateToProps)(GnomesPage);
