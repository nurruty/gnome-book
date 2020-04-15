/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomeCard from './GnomeCard';
import { findByTestAtrr, checkProps } from '../../../test';

const gnome = { id: 1, name: 'Gnome', thumbnail: 'img', friends: [], professions: ['Baker'] };

describe('GnomeCard', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        gnome: {
          id: 0,
          name: 'Name',
          thumbnail: 'imageLink',
          age: 122,
          weigth: 39,
          height: 101,
          hair_color: 'red',
          professions: [],
          friends: []
        }
      }

      const propsError = checkProps(GnomeCard, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });

  describe('Renders', () => {
    const wrapper = shallow(<GnomeCard gnome={gnome} />);

    it('Should render the card', () => {  
      const card = findByTestAtrr(wrapper, 'GnomeCard')
      expect(card).to.have.length(1);
      expect(wrapper.find('.gnome-card-title').props().children).to.be.equal('Gnome');
    });
  
    it('Should have empty friends and 1 profession', () => {
      const profs = findByTestAtrr(wrapper, 'Professions')
      expect(profs.props().children[1]).to.be.equal(1);
      const friends = findByTestAtrr(wrapper, 'Friends')
      expect(friends.props().children[1]).to.be.equal(0);    
    })

    it('Should link to gnome/Gnome', () => {
      expect(wrapper.find('.card-link').props().to).to.be.equal('gnome/Gnome');
    })

  })
 
 
});
/* eslint-enable no-undef */