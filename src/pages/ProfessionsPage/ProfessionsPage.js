import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchProfessionsIfNeeded } from '../../actions/professions';
import ProfessionList from '../../components/ProfessionList/ProfessionList';

if (process.env.WEBPACK) {
  require('./ProfessionsPage.css'); // eslint-disable-line global-require
}

export class ProfessionsPage extends Component {
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


  constructor(props) {
    super(props);
    this.state = { allProfessions: [], currentProfessions: [], currentPage: null, totalPages: null };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProfessionsIfNeeded());
  }

  render() {
    const { isFetching, professions } = this.props;
    const isEmpty = professions.length === 0;
    const head = ProfessionsPage.getMeta();

    return (
      <div className="ProfessionsPage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <h3>Professions</h3>

        {isEmpty
          ? (isFetching ? <h3>Loading...</h3> : <h4 className="ProfessionsPage-message">Empty :(</h4>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <ProfessionList professions={professions} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { gnomes = [], professions = {}, isFetching = false, lastUpdated } = state;
  return {
    professions,
    gnomes,
    isFetching,
    lastUpdated
  };
};

ProfessionsPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  professions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProfessionsPage);
