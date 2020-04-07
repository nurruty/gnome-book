/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfessionList from './ProfessionList';
import mockProps, { professions } from '../../lib/mockProps';

describe('ProfessionList', () => {
  const props = mockProps();
  props.professions = professions();
  const wrapper = shallow(<ProfessionList {...props} />);

  it('renders', () => {
    expect(wrapper.find('.ProfessionList')).to.have.length(1);
  });

  it('has elements in list', () => {
    expect(wrapper.find('.list').props().children).to.have.length(2);
  })

});
/* eslint-enable no-undef */
