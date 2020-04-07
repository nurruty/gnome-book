/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InfoCard from './InfoCard';


describe('InfoCard', () => {
  it('renders', () => {
    const wrapper = shallow(<InfoCard title={'Info Card'} data={150} />);
    expect(wrapper.find('.InfoCard')).to.have.length(1);
  });
});
/* eslint-enable no-undef */