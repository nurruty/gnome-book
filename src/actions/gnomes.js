import _ from 'lodash';
import api from '../lib/api';

export const REQUEST_GNOMES = 'REQUEST_GNOMES';
export const RECEIVE_GNOMES = 'RECEIVE_GNOMES';

export const requestGnomes = () => ({
    type: REQUEST_GNOMES
});
  

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
    important: calculateImportantGnomes(json.data.Brastlewark) || [],
    receivedAt: Date.now()
});

const fetchData = () => (
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
            dispatch(fetchData());
        }
    }
);