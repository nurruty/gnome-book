import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions/gnomes';
import GnomesList from '../../components/GnomesList/GnomesList';
import Loading from '../../components/Loading/Loading';

if (process.env.WEBPACK) {
  require('./GnomesPage.css'); // eslint-disable-line global-require
}

export class GnomesPage extends Component {
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
          name: 'description', content: ''
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
      <div data-test="GnomesPage">
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
            <GnomesList gnomes={gnomes} />
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

GnomesPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  gnomes: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default connect(mapStateToProps)(GnomesPage);
