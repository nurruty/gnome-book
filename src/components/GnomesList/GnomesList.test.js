/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomesList from './GnomesList';
import mockProps, { gnomes } from '../../lib/mockProps';

describe('GnomesList', () => {
  const props = mockProps();
  props.gnomes = gnomes();
  const wrapper = shallow(<GnomesList {...props} />);

  it('renders', () => {
    expect(wrapper.find('.GnomesList')).to.have.length(1);
  });

  it('has gnomes in list', () => {
    expect(wrapper.find('.GnomesList').props().children).to.have.length(3);
  });
});
/* eslint-enable no-undef */
