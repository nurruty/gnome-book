/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomeCard from './GnomeCard';

const gnome = { id: 1, name: 'Gnome', thumbnail: 'img', friends: [], professions: ['Baker'] };

describe('GnomeCard', () => {
  const wrapper = shallow(<GnomeCard gnome={gnome} />);
  it('renders', () => {  
    expect(wrapper.find('.GnomeCard')).to.have.length(1);
    expect(wrapper.find('.gnome-card-title').props().children).to.be.equal('Gnome');
  });

  it('has empty friends and professions', () => {
    expect(wrapper.find('.Friends').props().children[1]).to.be.equal(0);
    expect(wrapper.find('.Professions').props().children[1]).to.be.equal(1);
  })
});
/* eslint-enable no-undef */