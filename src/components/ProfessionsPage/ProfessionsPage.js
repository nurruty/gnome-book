import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions';
import ProfessionList from '../ProfessionList/ProfessionList';
import Pagination from '../Pagination/Pagination';


if (process.env.WEBPACK) {
  require('./ProfessionsPage.css'); // eslint-disable-line global-require
}

export class ProfessionsPage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    professions: PropTypes.object.isRequired,
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


  constructor(props) {
    super(props);
    this.state = { allProfessions: [], currentProfessions: [], currentPage: null, totalPages: null };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomesIfNeeded());
  }

  onPageChanged = (data) => {
    const allProfessions = Object.keys(this.props.professions);
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentProfessions = allProfessions ? allProfessions.slice(offset, offset + pageLimit) : [];

    this.setState({ currentPage, currentProfessions, totalPages });
  }

  render() {
    const { isFetching } = this.props;
    const allProfessions = Object.keys(this.props.professions);
    const isEmpty = allProfessions ? allProfessions.length === 0 : true;
    const head = ProfessionsPage.getMeta();

    const { currentProfessions, currentPage, totalPages } = this.state;

    const totalProfessions = allProfessions ? allProfessions.length : 1;

    if (totalProfessions === 0) return null;
    return (
      <div className="HomePage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <h3>Professions</h3>

        {isEmpty
          ? (isFetching ? <h3>Loading...</h3> : <h4 className="HomePage-message">Empty :(</h4>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <ProfessionList professions={Object.keys(this.props.professions)} />
          </div>
        }

        {/* { currentPage && (
                <span className="current-page text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) }
        <div style={{float: 'right' }} className="align-items-center">
              <Pagination totalRecords={totalProfessions} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { professions = {}, isFetching = false, lastUpdated } = state;
  return {
    professions,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(ProfessionsPage);
