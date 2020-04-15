import {
  REQUEST_GNOMES, RECEIVE_GNOMES
} from '../actions/gnomes';

import {
  REQUEST_PROFESSIONS, RECEIVE_PROFESSIONS
} from '../actions/professions'

export default (state = {
  isFetching: false,
  didInvalidate: false,
  gnomes: [],
  professions: []
}, action) => {
  switch (action.type) {
    case REQUEST_GNOMES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_GNOMES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        gnomes: action.gnomes,
        important: action.important,
        lastUpdated: action.receivedAt
      };

    case REQUEST_PROFESSIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };

    case RECEIVE_PROFESSIONS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        professions: action.professions,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};
