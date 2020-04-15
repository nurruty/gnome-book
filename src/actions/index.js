import _ from 'lodash';
import api from '../lib/api';


export const REQUEST_GNOMES = 'REQUEST_GNOMES';
export const RECEIVE_GNOMES = 'RECEIVE_GNOMES';
export const REQUEST_GNOME = 'REQUEST_GNOME';
export const RECEIVE_GNOME = 'RECEIVE_GNOME';

export const requestGnomes = () => ({
  type: REQUEST_GNOMES
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

const calculateImportantGnomes = (gnomes) => {
  _.map(gnomes, (g) => {
    g.friends ? g.friendsCount = g.friends.length : g.friendsCount = 0;
    g.professions ? g.professionsCount = g.professions.length : g.professionsCount = 0;
  });
  return _.chain(gnomes)
    .orderBy(['professionsCount'], 'desc')
    .orderBy(['friendsCount'], 'desc')
    .take(3)
    .value();
};

export const receiveGnomes = json => ({
  type: RECEIVE_GNOMES,
  gnomes: json.data.Brastlewark || [],
  professions: calculateProfessions(json.data.Brastlewark) || [],
  important: calculateImportantGnomes(json.data.Brastlewark) || [],
  receivedAt: Date.now()
});

export const requestGnome = () => ({
  type: REQUEST_GNOME
});

export const receiveGnome = json => ({
  type: RECEIVE_GNOME,
  gnomes: json.data.Brastlewark[0],
  professions: json.data.Brastlewark[0].professions,
  receivedAt: Date.now()
});

export const fetchGnomes = () => (
  dispatch => api('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
  .then(
    json => dispatch(receiveGnomes(json)),
  )
);

const shouldFetchGnomes = () => {
  const gnomes = false;
  if (!gnomes) {
    return true;
  }
  if (gnomes.isFetching) {
    return false;
  }
  return gnomes.didInvalidate;
};

export const fetchGnomesIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchGnomes(getState())) {
      dispatch(fetchGnomes());
    }
  }
);