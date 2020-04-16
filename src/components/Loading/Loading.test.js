/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Unit Test :: Loading', () => {
  it('renders', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('.Loading')).to.have.length(1);
  });
});

Loading.propTypes = {

}
/* eslint-enable no-undef */
