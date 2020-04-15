/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GnomesPage } from './GnomesPage';
import mockProps, { gnomes } from '../../lib/mockProps';

// Make a setup() helper that passes props and renders the component with shallow rendering
function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<GnomesPage gnomes={gnomes()} isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('GnomesPage', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.GnomesPage')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
