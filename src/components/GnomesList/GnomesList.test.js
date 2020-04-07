/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomesList from './GnomesList';
import mockProps, { gnomes } from '../../lib/mockProps';

describe('GnomesList', () => {
  it('renders', () => {
    const props = mockProps();
    props.gnomes = gnomes();
    const wrapper = shallow(<GnomesList {...props} />);
    expect(wrapper.find('.GnomesList')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
