/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProfessionPage } from './ProfessionPage';
import mockProps, { professions } from '../../lib/mockProps';

// Make a setup() helper that passes props and renders the component with shallow rendering
function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<ProfessionPage professions={professions()} isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('ProfessionPage', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.ProfessionPage')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
