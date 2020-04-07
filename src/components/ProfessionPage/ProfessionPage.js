import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import { fetchGnomesIfNeeded } from '../../actions';
import GnomesList from '../GnomesList/GnomesList';
import Loading from '../Loading/Loading';
import _ from 'lodash';

if (process.env.WEBPACK) {
  require('./ProfessionPage.css'); // eslint-disable-line global-require
}

export class ProfessionPage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    professions: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
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
  static getProfessionals(props) {
    const professionName = props.params.professionName || '';
    return props.professions[professionName] || [];
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomesIfNeeded());
  }

  render() {
    const gnomes = ProfessionPage.getProfessionals(this.props);
    const { professions, isFetching } = this.props;
    const isEmpty = _.isEmpty(professions);
    const head = ProfessionPage.getMeta();
    return (
      <div className="HomePage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <h3>{this.props.params.professionName}'s in town</h3>
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
  const { professions = {}, isFetching = false, lastUpdated } = state;
  return {
    professions,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(ProfessionPage);
