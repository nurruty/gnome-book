/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Posts from './CitizensList';

describe('Posts', () => {
  it('renders', () => {
    const props = {
      posts: []
    };
    const wrapper = shallow(<Posts {...props} />);
    expect(wrapper.find('.Posts')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
