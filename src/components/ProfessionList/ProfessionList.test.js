/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfessionList from './ProfessionList';
import mockProps, { professions } from '../../lib/mockProps';

describe('ProfessionList', () => {
  it('renders', () => {
    const props = mockProps();
    props.professions = professions();
    const wrapper = shallow(<ProfessionList {...props} />);
    expect(wrapper.find('.ProfessionList')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
