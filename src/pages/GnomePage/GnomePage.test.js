/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GnomePage } from './GnomePage';
import mockProps from '../../lib/mockProps';

// Make a setup() helper that passes props and renders the component with shallow rendering
function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<GnomePage {...props} />);

  return {
    props,
    wrapper
  };
}

describe('GnomePage', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.GnomePage')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
