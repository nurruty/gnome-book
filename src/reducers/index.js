import {
  REQUEST_GNOMES, RECEIVE_GNOMES
} from '../actions';

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
        professions: action.professions,
        important: action.important,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};
