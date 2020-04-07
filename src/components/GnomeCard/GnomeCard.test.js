/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomeCard from './GnomeCard';

const gnome = {id: 1, name: 'Gnome', thumbnail: 'img', friends: [], professions: [] };

describe('GnomeCard', () => {
  it('renders', () => {
    const wrapper = shallow(<GnomeCard gnome={gnome} />);
    expect(wrapper.find('.GnomeCard')).to.have.length(1);
  });
});
/* eslint-enable no-undef */