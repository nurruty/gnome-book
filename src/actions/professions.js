import _ from 'lodash';
import api from '../lib/api';

export const REQUEST_PROFESSIONS = 'REQUEST_PROFESSIONS';
export const RECEIVE_PROFESSIONS = 'RECEIVE_PROFESSIONS';

export const requestProfessions = () => ({
    type: REQUEST_PROFESSIONS
});

const calculateProfessions = (gnomes) => {
    const professions = {};
    _.map(
      gnomes,
      (value) => {
        _.map(value.professions, (el) => {
          if (!professions[el]) professions[el] = [];
          professions[el] = _.concat(professions[el], [value]);
        });
      }
    );
    return professions;
};

export const receiveProfessions = json => ({
    type: RECEIVE_PROFESSIONS,
    professions: calculateProfessions(json.data.Brastlewark) || [],
    receivedAt: Date.now()
});

const fetchData = () => (
    dispatch => api('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(
      json => dispatch(receiveProfessions(json)),
    )
);

const shouldFetchProfessions = () => {
    const professions = false;
    if (!professions) {
      return true;
    }
    if (professions.isFetching) {
      return false;
    }
    return professions.didInvalidate;
};

export const fetchProfessionsIfNeeded = () => (
    (dispatch, getState) => {
        if (shouldFetchProfessions(getState())) {
            dispatch(fetchData());
        }
    }
);
