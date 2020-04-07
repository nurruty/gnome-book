import sinon from 'sinon';

/**
 * Mocks props for testing top level components, e.g. HomePage.
 * @return {object} the mocked props.
 */

const fn = sinon.spy();

export default () => (
  {
    posts: [
      {
        title: 'Some title',
        id: 1
      }
    ],
    params: {
      postID: '1'
    },
    dispatch: fn,
    isFetching: false
  }
);

export const gnomes = () => [
  { id: 1, name: 'Gnome', age: 125, weight: 25, heigth: 100, friends: [], professions: ['Medic'] },
  { id: 2, name: 'Gnome 2', age: 125, weight: 25, heigth: 100, friends: [], professions: ['Baker'] },
  { id: 3, name: 'Gnome 3', age: 125, weight: 25, heigth: 100, friends: [], professions: ['Baker'] }
];
export const professions = () => {
  return {
    Baker: ['Gnome 2', 'Gnome 3'],
    Medic: ['Gnome']
  };
};