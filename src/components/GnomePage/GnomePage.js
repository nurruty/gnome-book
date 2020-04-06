import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Meta from 'react-helmet';
import { find } from 'lodash';
import { fetchGnomesIfNeeded } from '../../actions';
import LazyLoad from 'react-lazyload';
import Loading from '../Loading/Loading';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./GnomePage.css'); // eslint-disable-line global-require
}

export class GnomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  static getMeta(id) {
    return {
      title: `Post Detail Page - Post ${id}`,
      link: [
        {
          rel: 'canonical',
          href: `http://localhost:3000/gnome/${id}`
        }
      ],
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'description', content: 'Put the description here!'
        }
      ]
    };
  }
  static getGnome(props) {
    if (isNaN(props.params.gnomeID)) {
      const gnomeName = props.params.gnomeID || '';
      return find(props.gnomes, { name: gnomeName }) || {};
    }
    const gnomeID = parseInt(props.params.gnomeID) || 0;
    return find(props.gnomes, { id: gnomeID }) || {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomesIfNeeded());
  }
  render() {
    const gnome = GnomePage.getGnome(this.props);
    const isEmpty = gnome === {};
    const { isFetching } = this.props;
    const friends = gnome.friends ? gnome.friends : [];
    const professions = gnome.professions ? gnome.professions : [];
    const head = GnomePage.getMeta(gnome.id);
    return (
      <div className="PostPage">
        <Meta
          title={head.title}
          description={head.description}
          link={head.link}
          meta={head.meta}
        />
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="card-category">{gnome.name}</h5>

              </div>
              <div className="card-body">
                <div className="chart-area">
                  {isEmpty
                  ? (isFetching ? <Loading /> : <h4 className="HomePage-message">Empty :(</h4>)
                  : <img src={gnome.thumbnail} alt="..." />
                }
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <div className="row">
                    <div className="left col-xs-6">
                      <label>Height:</label>
                      {Math.round(parseInt(gnome.height), -1)}
                    </div>
                    <div className="col-xs-6">
                      <label >Age:</label>
                      {gnome.age}

                    </div>
                  </div>
                  <div className="row">
                    <div className="left col-xs-6">
                      <label>Weight:</label>
                      {Math.round(parseInt(gnome.weight), -1)}
                    </div>
                    <div className="col-xs-6">
                      <label >Hair:</label>
                      {gnome.hair_color}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 card-title">
                    <h5>Professions</h5>
                  </div>
                  <div className="">
                    <ol style={{ listStyleType: 'none' }}>
                      {professions ? professions.map((profession, i) =>
                        <li key={i} className="list-item">
                          {profession}
                        </li>
                      ) : <div>Unemployeed :(</div>}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 card-title">
                    <h5>Friends</h5>
                  </div>
                  <div className="">
                    <ol style={{ listStyleType: 'none' }}>
                      {friends ? friends.map((friend, i) =>
                        <Link to={`/gnome/${friend}`}>
                          <li key={i} className="list-item">
                            {friend}
                          </li>
                        </Link>
                      ) : <div>Need some friends :(</div>}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(GnomePage);
